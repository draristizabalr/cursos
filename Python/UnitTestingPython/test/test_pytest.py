import pytest

from unittestingpython.bank_account import BankAccount


def test_sum():
    a = 2
    b = 6
    assert a + b == 8


@pytest.mark.parametrize("ammount, expected", [(100, 1100), (3000, 4000), (4500, 5500)])
def test_deposit_varios_ammounts(ammount: int, expected: int) -> None:
    account = BankAccount(balance=1000, log_file="transaction_log.txt")
    new_balance = account.deposit(ammount)
    assert new_balance == expected
