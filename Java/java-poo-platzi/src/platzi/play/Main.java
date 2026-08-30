package platzi.play;

import platzi.play.contenido.*;
import platzi.play.exception.ContenidoExistenteException;
import platzi.play.plataforma.Plataforma;
import platzi.play.util.FileUtils;
import platzi.play.util.ScannerUtils;

import java.util.List;

public class Main {
  public static final String VERSION = "1.0.0";
  public static final String NOMBRE_PLATAFORMA = "PLATZI PLAY";
  public static final int AGREGAR = 1;
  public static final int MOSTRAR_TITULOS = 2;
  public static final int MOSTRAR_RESUMENES = 3;
  public static final int BUSCAR = 4;
  public static final int BUSCAR_GENERO = 5;
  public static final int VER_POPULARES = 6;
  public static final int BUSCAR_POR_TIPO = 7;
  public static final int REPRODUCIR = 8;
  public static final int ELIMINAR = 9;
  public static final int SALIR = 10;
  
  public static void main(String[] args) {
    Plataforma plataforma = new Plataforma(NOMBRE_PLATAFORMA);
    System.out.println(NOMBRE_PLATAFORMA + VERSION);
    
    cargarPeliculas(plataforma);
    
    System.out.println("Más de " + plataforma.getDuracionTotal() + " minutos de duración total.");
    plataforma.getContenidoPromocionable()
      .forEach(promocionable -> System.out.println(promocionable.promocionar()));
    
    while (true) {
      int opcionElegida = ScannerUtils.capturarNumero("""
        Ingrese una de las siguientes opciones:
           1. Agregar contenido
           2. Mostrar títulos
           3. Mostrar resumenes
           4. Buscar por título
           5. Buscar por género
           6. Ver populares
           7. Buscar por tipo
           8. Reproducir
           9. Eliminar
           10. Salir
        Opcion""");
      
      System.out.println("Opción elegida: " + opcionElegida);
      
      switch (opcionElegida) {
        case AGREGAR -> agregarContenido(plataforma);
        case MOSTRAR_TITULOS -> {
          List<String> titulos = plataforma.getTitulos();
          titulos.forEach(System.out::println);
        }
        case MOSTRAR_RESUMENES -> {
          List<ResumenContenido> resumenContenidos = plataforma.getResumenes();
          resumenContenidos.forEach(System.out::println);
        }
        case BUSCAR -> resultadoBusquedaPelicula(plataforma);
        case BUSCAR_GENERO -> buscarPeliculasPorGenero(plataforma);
        case VER_POPULARES -> {
          int cantidad = ScannerUtils.capturarNumero("¿Cuántas películas listar?");
          List<Contenido> contenidos = plataforma.getPopulares(cantidad);
          contenidos.forEach(pelicula -> System.out.println(pelicula.obtenerFichaTecnica() + "\n"));
        }
        case BUSCAR_POR_TIPO -> {
          int tipoDeContenido = 0;
          while (tipoDeContenido != 1 && tipoDeContenido != 2) {
            System.out.println("""
              1. Película.
              2. Documental
              """);
            tipoDeContenido = ScannerUtils.capturarNumero("¿Qué tipo de contenido deseas agregar?");
            if (tipoDeContenido != 1 || tipoDeContenido != 2) {
              System.out.println("No haz selecccionado una opción valida.");
            }
          }
          
          if (tipoDeContenido == 1) {
            plataforma.getPeliculas().forEach(System.out::println);
          } else {
            plataforma.getDocumentales().forEach(System.out::println);
          }
        }
        case REPRODUCIR -> {
          String titulo = ScannerUtils.capturarTexto("Nombre del contenido a reproducir");
          Contenido contenido = plataforma.buscarPorTitulo(titulo);
          
          if (contenido != null) {
            plataforma.reproducir(contenido);
          } else {
            System.out.println(titulo + " no existe en " + plataforma.getNombre());
          }
        }
        case ELIMINAR -> eliminarPelicula(plataforma);
        case SALIR -> System.exit(0);
        default -> System.out.println("Opción no valida");
      }

//            Pelicula pelicula2 = new Pelicula("F1 The movie", 220, "Acción");
//            plataforma.agregar(pelicula2);
//            System.out.println(plataforma.getContenido().size());
//            plataforma.eliminar(pelicula2);

//            Usuario usuario = new Usuario("Juan", "juan@mail.com");
//
//            System.out.println(usuario.fechaRegistro);
//
//            usuario.ver(pelicula);
    
    }


//        System.out.println(pelicula.obtenerFichaTecnica());
//
//        long duracionLong = pelicula.duracion;
//        int calificacionInt = (int) pelicula.calificacion;
//
//        System.out.println("Duración long: " + duracionLong);
//        System.out.println("Calificación Int: " + calificacionInt);
//        System.out.println("Número de premios: " + numeroDePremios);

        /*Scanner scanner = new Scanner(System.in);
        System.out.println("¿Cuál es tu titulo?");

        String name = scanner.nextLine();

        System.out.println("Hola " + name + ", esto es Platzi Play!");

        System.out.println("¿Cuántos años tienes?");
        int age = scanner.nextInt();
        System.out.println(name + " tienes " + age + " años");*/
    
  }
  
  private static void cargarPeliculas(Plataforma plataforma) {
    plataforma.getContenido().addAll(FileUtils.leerContenido());
  }
  
  private static void agregarContenido(Plataforma plataforma) {
    int tipoDeContenido = 0;
    while (tipoDeContenido != 1 && tipoDeContenido != 2) {
      System.out.println("""
        1. Película.
        2. Documental
        """);
      tipoDeContenido = ScannerUtils.capturarNumero("¿Qué tipo de contenido deseas agregar?");
      if (tipoDeContenido != 1 || tipoDeContenido != 2) {
        System.out.println("No haz selecccionado una opción valida.");
      }
    }
    
    String titulo = ScannerUtils.capturarTexto("Nombre del contenido");
    Genero genero = ScannerUtils.capturarGenero("Género del contenido");
    int duracion = ScannerUtils.capturarNumero("Duración del contenido");
    double calificacion = ScannerUtils.capturarDecimal("Calificación del contenido");
    
    try {
      if (tipoDeContenido == 2) {
        String narrador = ScannerUtils.capturarTexto("Nombre del narrador");
        Documental contenido = new Documental(titulo, duracion, genero, calificacion, narrador);
        plataforma.agregar(contenido);
      } else {
        Pelicula contenido = new Pelicula(titulo, duracion, genero, calificacion);
        plataforma.agregar(contenido);
      }
    } catch (ContenidoExistenteException e) {
      System.out.println(e.getMessage());
    }
    
  }
  
  private static Contenido buscarPelicula(Plataforma plataforma) {
    String titulo = ScannerUtils.capturarTexto("¿Cuál es el título de la película");
    return plataforma.buscarPorTitulo(titulo);
  }
  
  private static void resultadoBusquedaPelicula(Plataforma plataforma) {
    Contenido contenido = buscarPelicula(plataforma);
    if (contenido != null) {
      System.out.println(contenido.obtenerFichaTecnica());
    } else {
      System.out.println("No existe película con ese titulo en la plataforma " +
        plataforma.getNombre());
    }
  }
  
  private static void eliminarPelicula(Plataforma plataforma) {
    Contenido contenido = buscarPelicula(plataforma);
    
    if (contenido == null) {
      System.out.println("No existe una película con ese título en " + plataforma.getNombre());
    }
    
    plataforma.eliminar(contenido);
    System.out.println("Se ha eliminado la película\n" +
      contenido.getTitulo() +
      "\nde la plataforma\n" +
      plataforma.getNombre());
  }
  
  private static void buscarPeliculasPorGenero(Plataforma plataforma) {
    Genero genero = ScannerUtils.capturarGenero("¿Cuál es el género de películas por el que quieres buscar?");
    List<Contenido> contenidos = plataforma.buscarPorGenero(genero);
    
    if (contenidos.size() == 0) {
      System.out.println("No hay películas del genero\n" +
        genero +
        "\nEn la plataforma\n" +
        plataforma.getNombre());
    } else {
      contenidos.forEach(pelicula -> System.out.println(pelicula.getTitulo() + "\n"));
    }
    
  }
}
