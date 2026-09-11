import unittest

from faker import Faker

from main import calculate_total


class TestsMain(unittest.TestCase):
    def setUp(self):
        self.faker = Faker(locale="es")

    def test_calculate_total(self):
        products: list[dict] = []
        total_expected = 0
        for _ in range(3):
            price = self.faker.random.uniform(1000, 22000)
            total_expected += price
            product = {
                "name": self.faker.catch_phrase(),
                "price": price,
            }
            products.append(product)

        total = calculate_total(products)
        self.assertEqual(total, total_expected)
