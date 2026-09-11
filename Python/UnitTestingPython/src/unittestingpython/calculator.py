def sum(a: float, b: float) -> float:
    """
    >>> sum(5, 7)
    12
    """
    return a + b


def substract(a: float, b: float) -> float:
    return a - b


def multiplication(a: float, b: float) -> float:
    return a * b


def division(a: float, b: float) -> float:
    """
    >>> division(10, 0)
    Traceback (most recent call last):
    ValueError: Division by zero
    """
    if b == 0:
        raise ValueError("Division by zero")
    return a / b
