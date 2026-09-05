class NewsSystemError(Exception):
    """Error general en la app"""


class APIKeyError(NewsSystemError):
    """Error cuando la API KEY es invalida"""
