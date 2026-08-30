package platzi.play.exception;

import platzi.play.contenido.Contenido;

public class ContenidoExistenteException extends RuntimeException {
  public ContenidoExistenteException(Contenido contenido) {
    super("El contenido " + contenido.getTitulo() + " de tipo " + contenido.getTipoContenido() + " ya existe");
  }
}
