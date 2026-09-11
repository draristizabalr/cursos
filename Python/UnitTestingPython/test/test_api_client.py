import unittest
from unittest.mock import MagicMock, Mock, patch

import requests

from api_client import get_location


class ApiClientTests(unittest.TestCase):
    @patch("src.api_client.requests.get")
    def test_get_location_returns_expected_data(self, mock_get: MagicMock) -> None:
        ip = "8.8.8.8"
        mock_get.return_value.status_code = 200
        mock_get.return_value.json.return_value = {
            "countryName": "United States",
            "regionName": "California",
            "cityName": "Mountain View",
        }
        result = get_location(ip)
        self.assertEqual(result.get("country"), "United States")

        mock_get.assert_called_once_with(f"https://freeipapi.com/api/json/{ip}")

    @patch("src.api_client.requests.get")
    def test_get_location_returns_side_effect(self, mock_get: MagicMock) -> None:
        ip = "8.8.8.8"
        mock_get.side_effect = [
            requests.exceptions.RequestException("Service Unavailable"),
            Mock(
                status_code=200,
                json=lambda: {
                    "countryName": "United States",
                    "regionName": "California",
                    "cityName": "Mountain View",
                },
            ),
        ]
        with self.assertRaises(requests.exceptions.RequestException) as cm:
            result = get_location(ip)

        self.assertIn("Service Unavailable", str(cm.exception))
