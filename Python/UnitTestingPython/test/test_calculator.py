import unittest

from unittestingpython.calculator import division, multiplication, substract, sum


class CalculatorTests(unittest.TestCase):
    def test_sum(self) -> None:
        assert sum(2, 3) == 5

    def test_substract(self) -> None:
        assert substract(3, 2) == 1

    def test_multiplication(self) -> None:
        assert multiplication(3, 2) == 6

    def test_division(self) -> None:
        assert division(4, 2) == 2

    def test_division_by_zero(self) -> None:
        with self.assertRaisesRegex(ValueError, "Division by zero"):
            _ = division(2, 0)
