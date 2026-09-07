class BibliotecaError(Exception):
    pass


class TituloBibliotecaError(BibliotecaError):
    pass


class LibroSinPosesionError(BibliotecaError):
    pass


class UsuarioNoEncontradoError(BibliotecaError):
    pass


class LibroNoEncontradoError(BibliotecaError):
    pass


class LibroNoDisponibleError(BibliotecaError):
    pass
