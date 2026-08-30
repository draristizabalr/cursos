package platzi.play.util;

import platzi.play.contenido.Genero;

import java.util.Arrays;
import java.util.Scanner;

public class ScannerUtils {
    public static final Scanner SCANNER = new Scanner(System.in);

    public static String capturarTexto(String mensaje) {
        System.out.println(mensaje + ": ");
        return SCANNER.nextLine();

    }

    public static int capturarNumero(String mensaje) {
        System.out.println(mensaje + ": ");

        while (!SCANNER.hasNextInt()) {
            System.out.println("Dato inválido.\n" + mensaje + ": ");
            SCANNER.next();
        }

        int dato = SCANNER.nextInt();
        SCANNER.nextLine();
        return dato;
    }

    public static double capturarDecimal(String mensaje) {
        System.out.println(mensaje + ": ");

        while (!SCANNER.hasNextDouble()) {
            System.out.println("Dato invalido.\n" + mensaje + ": ");
            SCANNER.next();
        }

        double dato = SCANNER.nextDouble();
        SCANNER.nextLine();
        return dato;
    }

    public static Genero capturarGenero(String mensaje) {
        while (true) {
            System.out.println("Opciones:");
            Arrays.stream(Genero.values()).forEach(System.out::println);
            String entrada = capturarTexto(mensaje);

            try {
                return Genero.valueOf(entrada);
            } catch (IllegalArgumentException e) {
                System.out.println("Género no admitido.");
            }
        }
    }
}
