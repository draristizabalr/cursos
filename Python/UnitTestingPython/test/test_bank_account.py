import os
from typing import override
from unittest import TestCase
from unittest.mock import MagicMock, patch

from unittestingpython.bank_account import BankAccount
from unittestingpython.errors import (
    InsufficientFundsError,
    WithdrawalTimeRestrictionError,
)


class BankAccountTest(TestCase):
    @override
    def setUp(self) -> None:
        self.account = BankAccount(balance=1000, log_file="transaction_log.txt")
        self.other_account = BankAccount(100)

    @override
    def tearDown(self) -> None:
        if bool(self.account.log_file) and os.path.exists(self.account.log_file):
            os.remove(self.account.log_file)

    def _count_lines(self, filename: str) -> int:
        with open(filename, "r") as f:
            return len(f.readlines())

    @patch("unittestingpython.bank_account.datetime")
    def test_deposit(self, mock_datetime: MagicMock) -> None:
        mock_datetime.now.return_value.hour = 10
        new_balance = self.account.deposit(500)
        self.assertEqual(new_balance, 1500, "Balance is not equal")

    def test_negative_deposit(self) -> None:
        with self.assertRaisesRegex(ValueError, "Amount have to be greater than zero"):
            _ = self.account.deposit(-1)

    @patch("unittestingpython.bank_account.datetime")
    def test_withdraw(self, mock_datetime: MagicMock) -> None:
        mock_datetime.now.return_value.hour = 10
        new_balance = self.account.withdraw(100)
        self.assertEqual(new_balance, 900, "Balance is not equal")

    @patch("unittestingpython.bank_account.datetime")
    def test_negative_withdraw(self, mock_datetime: MagicMock) -> None:
        mock_datetime.now.return_value.hour = 10
        with self.assertRaisesRegex(ValueError, "Amount have to be greater than zero"):
            _ = self.account.withdraw(-10)

    def test_get_balance(self) -> None:
        balance = self.account.balance
        self.assertEqual(balance, 1000, "Balance is not equal")

    def test_balance_is_private(self) -> None:
        with self.assertRaises(AttributeError):
            # pyrefly: ignore
            self.account.balance = 10

    def test_transaction_log(self) -> None:
        _ = self.account.deposit(500)
        self.assertTrue(
            os.path.exists("transaction_log.txt"), "Log file does not exist"
        )

    def test_count_transactions(self) -> None:
        if bool(self.account.log_file):
            lines_1 = self._count_lines(self.account.log_file)
            self.assertEqual(
                lines_1,
                1,
                "Number of lines after deposit are not equals",
            )
            _ = self.account.deposit(100)
            lines_2 = self._count_lines(self.account.log_file)
            self.assertEqual(
                lines_2,
                2,
                "Number of lines before deposit are not equals",
            )

    def test_transaction(self) -> None:
        new_balance_account = self.account.transaction(100, self.other_account)
        self.assertEqual(
            new_balance_account,
            900,
            "New balance, from first account is not equal",
        )
        new_balance_other_account = self.other_account.balance
        self.assertEqual(
            new_balance_other_account,
            200,
            "New balance, from second account is not equal",
        )

    def test_transaction_no_funds(self) -> None:
        other_account = BankAccount(0)
        with self.assertRaisesRegex(InsufficientFundsError, "Insufficient funds"):
            _ = other_account.transaction(100, self.account)

    def test_transaction_not_enough_funds(self) -> None:
        with self.assertRaisesRegex(InsufficientFundsError, "Not enough funds"):
            _ = self.other_account.transaction(200, self.account)

    @patch("unittestingpython.bank_account.datetime")
    def test_withdraw_during_bussines_hours(self, mock_datetim: MagicMock) -> None:
        mock_datetim.now.return_value.hour = 8
        new_balance = self.account.withdraw(100)
        self.assertEqual(new_balance, 900)

    @patch("unittestingpython.bank_account.datetime")
    def test_withdraw_disallow_after_bussines_hours(
        self, mock_datetim: MagicMock
    ) -> None:
        mock_datetim.now.return_value.hour = 7
        with self.assertRaises(WithdrawalTimeRestrictionError):
            _ = self.account.withdraw(100)

    @patch("unittestingpython.bank_account.datetime")
    def test_withdraw_disallow_before_bussines_hours(
        self, mock_datetim: MagicMock
    ) -> None:
        mock_datetim.now.return_value.hour = 18
        with self.assertRaises(WithdrawalTimeRestrictionError):
            _ = self.account.withdraw(100)

    def test_deposit_varios_ammounts(self) -> None:
        test_cases = [
            {"ammount": 100, "expected": 1100},
            {"ammount": 3000, "expected": 4000},
            {"ammount": 4500, "expected": 5500},
        ]

        for case in test_cases:
            with self.subTest(case=case):
                account = BankAccount(balance=1000, log_file="transaction_log.txt")
                new_balance = account.deposit(case["ammount"])
                self.assertEqual(new_balance, case["expected"])
