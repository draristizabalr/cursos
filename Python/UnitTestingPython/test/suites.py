import unittest

# pyrefly: ignore
from test.test_bank_account import BankAccountTest


def bank_account_suite() -> unittest.TestSuite:
    suite = unittest.TestSuite()
    suite.addTest(BankAccountTest("test_deposit"))
    suite.addTest(BankAccountTest("test_withdraw"))

    return suite


if __name__ == "__main__":
    runner = unittest.TextTestRunner()
    _ = runner.run(bank_account_suite())
