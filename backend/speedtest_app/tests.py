# speedtest_app/tests.py
from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework import status

class SpeedTestViewTest(TestCase):
    def setUp(self):
        self.client = APIClient()

    def test_speedtest_endpoint(self):
        response = self.client.get('/api/speedtest/test/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('download', response.data)
        self.assertIn('upload', response.data)
        self.assertIn('ping', response.data)
        self.assertIn('server', response.data)
