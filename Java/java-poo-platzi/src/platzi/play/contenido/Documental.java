package platzi.play.contenido;

public class Documental extends Contenido implements Promocionable {
  private String narrador;
  
  public Documental(String titulo, int duracion, Genero genero, double calificacion, String narrador) {
    super(titulo, duracion, genero, calificacion);
    this.narrador = narrador;
  }
  
  @Override
  public String getTipoContenido() {
    return "documental";
  }
  
  @Override
  public String promocionar() {
    return "Descubre el documental " + this.getTitulo() + " narrado por " + narrador + ". ¡Ahora en PLATZI PLAY!";
  }
  
  public String getNarrador() {
    return narrador;
  }
  
}
