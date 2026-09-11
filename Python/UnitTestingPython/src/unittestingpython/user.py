from unittestingpython.bank_account import BankAccount


class User:
    def __init__(self, name: str, email: str):
        self.name = name
        self.email = email
        self.accounts: list[BankAccount] = []

    def add_account(self, account: BankAccount):
        self.accounts.append(account)

    def get_total_balance(self):
        return sum(account.balance for account in self.accounts)
