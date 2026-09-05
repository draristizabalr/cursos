import json
import os
import urllib.parse
import urllib.request
from typing import cast

from dotenv import load_dotenv

from ai.ai_client import analyze_news_with_ai
from models import Article, NewsAPIResponse
from shared.news_api_system_error import APIKeyError

load_dotenv()
API_KEY = os.getenv("NEWS_API_KEY")
BASE_URL = os.getenv("BASE_URL")


def newsapi_client(
    api_key: str, query: str, timeout: int = 30, retries: int = 3
) -> NewsAPIResponse:
    query_string = urllib.parse.urlencode({"q": query, "apiKey": api_key})
    url = f"{BASE_URL}?{query_string}"

    try:
        with urllib.request.urlopen(url, timeout=timeout) as response:
            data = response.read().decode("utf-8")
            return cast(NewsAPIResponse, json.loads(data))
    except urllib.error.HTTPError:
        raise APIKeyError("No se ha podido ejecutar la consulta de las news")


def guardian_client(api_key, section, from_date, timeout=30, retries=3):
    pass


def fetch_news(api_name, *args, **kwargs):
    """
    Función flexible para conectar con la API
    """

    base_config = {"timeout": 30, "retries": 3}

    config = {**base_config, **kwargs}

    api_clients = {"newsapi": newsapi_client, "guardian": guardian_client}

    client = api_clients[api_name]
    return client(*args, **config)


def get_unique_sources(articles: Article) -> list[Article]:
    """Obtiene una lista de los recursos de los artículos sin repetir"""
    return {
        article.get("source").get("name")
        for article in articles
        if article.get("source") and article.get("source").get("name")
    }


def get_articles_by_source(articles: list[Article], source: str) -> list[Article]:
    """Obtiene los artículos que posean un tipo de recurso"""
    return list(
        filter(
            lambda article: article["sourcce"]["name"].lower() == source.lower(),
            articles,
        )
    )


def get_reading_time(article: Article) -> Article:
    """Calcula el tiempo de lectura"""
    minutes = len(article["content"]) // 200 + 1
    article["reading_time"] = minutes
    return article


try:
    response_data = fetch_news("newsapi", api_key=API_KEY, query="Python")

    # for article in response_data["articles"]:
    #     print(article["title"])

    analyze_news_with_ai(response_data["articles"], "¿Qué piensas de Python?")
except APIKeyError as e:
    print(f"{e}")
