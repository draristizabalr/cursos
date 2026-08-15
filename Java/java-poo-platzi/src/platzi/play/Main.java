package platzi.play;

import platzi.play.contenido.Pelicula;
import platzi.play.plataforma.Usuario;
import platzi.play.util.ScannerUtils;

import java.time.LocalDate;
import java.time.LocalDateTime;

public class Main {
    public static final String VERSION = "1.0.0";
    public static final String NOMBRE_PLATAFORMA = "PLATZI PLAY";

    public static void main(String[] args) {
        System.out.println(NOMBRE_PLATAFORMA + VERSION);

        String titulo = ScannerUtils.capturarTexto("Nombre del contenido");
        String genero = ScannerUtils.capturarTexto("Género del contenido");
        int duracion = ScannerUtils.capturarNumero("Duración del contenido");
        double calificacion = ScannerUtils.capturarDecimal("Calificación del contenido");

        Pelicula pelicula = new Pelicula(titulo, duracion, genero, calificacion);

        System.out.println(pelicula.obtenerFichaTecnica());

        long duracionLong = pelicula.duracion;
        int calificacionInt = (int) pelicula.calificacion;
        long numeroDePremios = Long.parseLong("25");

        System.out.println("Duración long: " + duracionLong);
        System.out.println("Calificación Int: " + calificacionInt);
        System.out.println("Número de premios: " + numeroDePremios);


        Usuario usuario = new Usuario("Juan", "juan@mail.com");

        System.out.println(usuario.fechaRegistro);

        usuario.ver(pelicula);

        /*Scanner scanner = new Scanner(System.in);
        System.out.println("¿Cuál es tu titulo?");

        String name = scanner.nextLine();

        System.out.println("Hola " + name + ", esto es Platzi Play!");

        System.out.println("¿Cuántos años tienes?");
        int age = scanner.nextInt();
        System.out.println(name + " tienes " + age + " años");*/

    }
}
