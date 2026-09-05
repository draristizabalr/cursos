from datetime import datetime

from pydantic import BaseModel


class Source(BaseModel):
    name: str
    id: str | None = None


class Article(BaseModel):
    source: Source
    author: str
    title: str
    description: str
    url: str
    url_to_image: str
    published_at: datetime
    content: str


class NewsAPIResponse(BaseModel):
    status: str
    total_results: int
    articles: list[Article]
