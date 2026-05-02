from http import HTTPStatus

from fastapi.testclient import TestClient

mock_customer = {"name": "Jhon Doe", "email": "jhon@mail.com", "age": 33}


def test_create_customer(client: TestClient):
    response = client.post("/customer", json=mock_customer)
    assert response.status_code == HTTPStatus.CREATED


def test_read_customer(client: TestClient):
    response = client.post("/customer", json=mock_customer)
    assert response.status_code == HTTPStatus.CREATED

    customer_id = response.json()["id"]
    response_read = client.get(f"/customer/{customer_id}")

    assert response_read.status_code == HTTPStatus.OK

    response_json = response.json()
    for customer_key in mock_customer.keys():
        assert response_json[customer_key] == mock_customer[customer_key]
