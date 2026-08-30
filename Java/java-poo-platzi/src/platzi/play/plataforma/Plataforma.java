package platzi.play.plataforma;

import platzi.play.contenido.*;
import platzi.play.exception.ContenidoExistenteException;
import platzi.play.util.FileUtils;

import java.util.*;

public class Plataforma {
  private String nombre;
  private List<Contenido> contenido;
  private Map<Contenido, Integer> visualizaciones;
  
  public Plataforma(String nombre) {
    this.nombre = nombre;
    this.contenido = new ArrayList<>();
    this.visualizaciones = new HashMap<>();
  }
  
  public void agregar(Contenido elemento) {
    Contenido contenido = buscarPorTitulo(elemento.getTitulo());
    
    if (contenido != null) {
      throw new ContenidoExistenteException(elemento);
    }
    
    this.contenido.add(elemento);
    
    FileUtils.escribirContenido(elemento);
  }
  
  public void reproducir(Contenido contenido) {
    int conteoActual = visualizaciones.getOrDefault(contenido, 0);
    System.out.println(contenido.getTitulo() + " ha sido reproducido " + conteoActual + " veces");
    visualizaciones.put(contenido, conteoActual + 1);
    contenido.reproducir();
  }
  
  public void eliminar(Contenido elemento) {
    contenido.remove(elemento);
  }
  
  public List<String> getTitulos() {
    return contenido.stream()
      .map(Contenido::getTitulo)
      .sorted()
      .toList();
  }
  
  public List<ResumenContenido> getResumenes() {
    return contenido.stream()
      .map(pelicula -> new ResumenContenido(
        pelicula.getTitulo(),
        pelicula.getDuracion(),
        pelicula.getGenero())
      ).toList();
  }
  
  public int getDuracionTotal() {
    return contenido.stream()
      .mapToInt(Contenido::getDuracion)
      .sum();
  }
  
  public List<Contenido> getPopulares(int cantidad) {
    return contenido.stream()
      .sorted(Comparator.comparingDouble(Contenido::getCalificacion).reversed())
      .limit(cantidad)
      .toList();
  }
  
  public Contenido buscarPorTitulo(String titulo) {
    return contenido.stream().filter(pelicula -> pelicula.getTitulo().equalsIgnoreCase(titulo))
      .findFirst()
      .orElse(null);
  }
  
  public List<Contenido> buscarPorGenero(Genero genero) {
    return contenido.stream()
      .filter(pelicula -> pelicula.getGenero().equals(genero))
      .toList();
  }
  
  public List<Pelicula> getPeliculas() {
    return contenido.stream().filter(contenido -> contenido instanceof Pelicula)
      .map(contenidoFiltrado -> (Pelicula) contenidoFiltrado)
      .toList();
  }
  
  public List<Documental> getDocumentales() {
    return contenido.stream().filter(contenido -> contenido instanceof Documental)
      .map(contenidoFiltrado -> (Documental) contenidoFiltrado)
      .toList();
  }
  
  public List<Promocionable> getContenidoPromocionable() {
    return contenido.stream()
      .filter(contenido -> contenido instanceof Promocionable)
      .map(contenidoPromo -> (Promocionable) contenidoPromo)
      .toList();
  }
  
  /* ----- GETTERS ----- */
  public String getNombre() {
    return nombre;
  }
  
  public List<Contenido> getContenido() {
    return contenido;
  }
}
