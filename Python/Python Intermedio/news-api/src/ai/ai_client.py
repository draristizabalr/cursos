import os

from dotenv import load_dotenv
from openai import OpenAI
from openai.types.responses import ResponseOutputItem, ResponseOutputText

from models import Article

load_dotenv()
OPENAI_API_KEY = os.environ.get("OPENAI_API_KEY")


def filter_message_output(outputItem: ResponseOutputItem) -> bool:
    return outputItem.type == "message"


def analyze_news_with_ai(articles: list[Article], query: str) -> str | None:
    client = OpenAI(
        # This is the default and can be omitted
        base_url="http://127.0.0.1:1234/v1",
        api_key="lm-studio",
    )

    context = "\n".join(
        f"- {article['title']}: {article.get('description', '')[:100]}..."
        for article in articles[:10]  # Limitar para control de costos
    )

    prompt = f"""
    Basandote en estas noticias:
    {context}
    
    Pregunta: {query}
    
    Response de forma concisa en español
    """

    response = client.responses.create(
        model="google/gemma-4-12b-qat",
        instructions="Eres un agente que lee contexto y responde de manera breve",
        input=prompt,
    )

    output = response.output

    messages = list(filter(filter_message_output, output))

    if len(messages) > 0:
        messageItem: ResponseOutputItem = messages[0]
        messageContent: ResponseOutputText = messageItem.content[0]
        print(messageContent.text)
