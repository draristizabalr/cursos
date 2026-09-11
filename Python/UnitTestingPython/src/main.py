def calculate_total(products: list[dict]) -> float:
    total = 0
    for product in products:
        total += product["price"]
    return total


def test_calculate_total_empty_list() -> None:
    print("prueba")
    assert calculate_total([]) == 0


def test_calculate_total_with_list() -> None:
    print("prueba 2")
    products: list[dict] = [{"name": "Ryzen 5 7600X", "price": 5}]

    assert calculate_total(products) == 5

    other_products: list[dict] = [
        {"name": "Ryzen 5 7600X", "price": 5},
        {"name": "RX 6750 XT", "price": 10},
        {"name": "Courser Memory RAM DDR5 16 Gb", "price": 8},
    ]

    assert calculate_total(other_products) == 23


if __name__ == "__main__":
    test_calculate_total_empty_list()
    test_calculate_total_with_list()
