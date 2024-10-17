# speedtest_app/views.py
import logging
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import speedtest
from .serializers import SpeedTestSerializer

logger = logging.getLogger(__name__)

class SpeedTestView(APIView):
    def get(self, request):
        try:
            st = speedtest.Speedtest()
            st.get_best_server()
            download = st.download() / 1_000_000  # Convert to Mbps
            upload = st.upload() / 1_000_000      # Convert to Mbps
            ping = st.results.ping
            server = st.results.server['sponsor']

            data = {
                'download': round(download, 2),
                'upload': round(upload, 2),
                'ping': ping,
                'server': server,
            }

            # Corrected serializer instantiation using keyword argument
            serializer = SpeedTestSerializer(data=data)
            if serializer.is_valid():
                return Response(serializer.data, status=status.HTTP_200_OK)

            # If serializer isn't used or data isn't valid, return data directly
            return Response(data, status=status.HTTP_200_OK)

        except Exception as e:
            logger.error(f"Speed test failed: {e}")
            return Response({'error': 'An error occurred while performing the speed test.'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
