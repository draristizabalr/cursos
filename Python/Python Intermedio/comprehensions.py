sample_articles = [
    {
        "title": "Python logra nuevo éxito",
        "source": {"name": "TechNews"},
        "description": "Gran noticia",
        "category": "Tecnología",
    },
    {
        "title": "Mercado en crisis",
        "source": {"name": "Finance"},
        "description": "Análisis completo",
        "category": "Economía",
    },
    {
        "title": "Nueva tecnología",
        "source": {"name": "TechNews"},
        "description": "Innovación",
        "category": "Tecnología",
    },
    {
        "title": "Deportes hoy",
        "source": {"name": "Sports"},
        "description": "Resultados",
        "category": "Deportes",
    },
    {
        "title": "Política actual",
        "source": {"name": "News"},
        "description": "Actualidad",
        "category": "Política",
    },
    {
        "title": "Ciencia avanza",
        "source": {"name": "Science"},
        "description": "Descubrimientos",
        "category": "Ciencia",
    },
]

CANTIDAD_DE_CARACTERES = 5


def extract_titles_traditional(articles):
    """Extrae solo los títulos usando un for"""
    titles = []
    for article in articles:
        if len(article["title"]) > CANTIDAD_DE_CARACTERES:
            titles.append(article["title"])
    return titles


def extract_titles(articles):
    """Extrae solo los títulos usando un comprehension"""
    return [
        article["title"]
        for article in articles
        if len(article["title"]) > CANTIDAD_DE_CARACTERES
    ]


def extract_article_summaries(articles):
    """Extrae el título y la descripción de cada artículo"""
    return {article["title"]: article["description"] for article in articles}


def get_sources_traditional(articles):
    sources = set()
    for article in articles:
        if article.get("source") and article.get("source").get("name"):
            sources.add(article.get("source").get("name"))
    return sources


def get_sources(articles):
    return {
        article.get("source").get("name")
        for article in articles
        if article.get("source").get("name")
    }


def categorize_traditional(articles):
    sources = get_sources(articles)
    results = {}
    for source in sources:
        if source not in results:
            results[source] = []

        for article in articles:
            if source == article.get("source").get("name"):
                results[source].append(article)
    return results


def categorize(articles):
    sources = get_sources(articles)
    return {
        source: [
            article
            for article in articles
            if source == article.get("source").get("name")
        ]
        for source in sources
    }


print("-" * 30, "PRINT TITLES", "-" * 30)
print(extract_titles_traditional(sample_articles))
print("=" * 90)
print(extract_titles(sample_articles))


print("-" * 30, "PRINT SUMMARIES", "-" * 30)
print(extract_article_summaries(sample_articles))


print("-" * 30, "PRINT SOURCES", "-" * 30)
print(get_sources_traditional(sample_articles))
print("=" * 90)
print(get_sources(sample_articles))


print("-" * 30, "PRINT CATEGORIZE", "-" * 30)
print(categorize_traditional(sample_articles))
print("=" * 90)
print(categorize(sample_articles))
