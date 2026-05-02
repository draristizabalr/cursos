from django.shortcuts import render, HttpResponse

html_base = """
<nav>
    <ul style="display: flex; justify-content: center; align-items: center; gap: 0.5em; padding: 1em 1.5em; background-color: #aaa; list-style: none; border-radius: 1em;">
        <li><a style="padding: 0.5em 1em; border: 1px solid #eee; border-radius: 0.5em; background-color: #034f84; text-decoration: none; color: white;"href="/">Portada</a></li>
        <li><a style="padding: 0.5em 1em; border: 1px solid #eee; border-radius: 0.5em; background-color: #034f84; text-decoration: none; color: white;"href="/about-me/">Acerca de</a></li>
        <li><a style="padding: 0.5em 1em; border: 1px solid #eee; border-radius: 0.5em; background-color: #034f84; text-decoration: none; color: white;"href="/portfolio/">Portafolio</a></li>
        <li><a style="padding: 0.5em 1em; border: 1px solid #eee; border-radius: 0.5em; background-color: #034f84; text-decoration: none; color: white;"href="/contact/">Contacto</a></li>
    </ul>
</nav>
<h1>Mi web personal</h1>
"""

# Create your views here.
def home(request):
    return HttpResponse(html_base + """
    <h2>Portada</h2><p>Esto es la portada</p>
    """)

def about(request):
    return HttpResponse(html_base + """
    <h2>Acerca de</h2><p>Me llamo David y soy programador</p>
    """)

def portfolio(request):
    return HttpResponse(html_base + """
    <h2>Portafolio</h2>
    <p>Este es el portafolio</p>
    """)

def contact(request):
    return HttpResponse(html_base + """
    <h2>Contacto</h2>
    <p>Este es el contacto</p>
    """)