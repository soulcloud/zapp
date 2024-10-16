# speedtest_app/serializers.py
from rest_framework import serializers

class SpeedTestSerializer(serializers.Serializer):
    download = serializers.FloatField()
    upload = serializers.FloatField()
    ping = serializers.FloatField()
    server = serializers.CharField()
