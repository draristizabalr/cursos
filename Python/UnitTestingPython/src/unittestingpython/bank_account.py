from __future__ import annotations

from datetime import datetime

from unittestingpython.errors import (
    InsufficientFundsError,
    WithdrawalTimeRestrictionError,
)


class BankAccount:
    def __init__(self, balance: float = 0, log_file: str | None = None) -> None:
        self.__balance = balance
        self.log_file = log_file
        self._log_transaction("Cuenta creada")

    def _log_transaction(self, message: str) -> None:
        if bool(self.log_file):
            with open(self.log_file, "a") as f:
                _ = f.write(f"{message}\n")

    def deposit(self, amount: float) -> float:
        if amount > 0:
            self.__balance += amount
            self._log_transaction(
                f"Deposited {amount}. New balance is: {self.__balance}"
            )
        else:
            raise ValueError("Amount have to be greater than zero")
        return self.__balance

    def withdraw(self, amount: float) -> float:
        now = datetime.now()
        print({"hour": now.hour})
        if now.hour < 8 or now.hour > 17:
            raise WithdrawalTimeRestrictionError("It is not available time")

        if amount > 0:
            self.__balance -= amount
            self._log_transaction(
                f"Withdrew {amount}. New balance is: {self.__balance}"
            )
        else:
            raise ValueError("Amount have to be greater than zero")
        return self.__balance

    def transaction(self, amount: float, account: BankAccount) -> float:
        if self.__balance == 0:
            raise InsufficientFundsError("Insufficient funds")
        if self.__balance - amount < 0:
            raise InsufficientFundsError("Not enough funds")

        self.__balance -= amount
        _ = account.deposit(amount)
        return self.__balance

    @property
    def balance(self) -> float:
        self._log_transaction(f"Checked balance. Current balance: {self.__balance}")
        return self.__balance
