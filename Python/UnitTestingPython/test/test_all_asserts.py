import unittest

SERVER = "server_a"


class AllAssertsTests(unittest.TestCase):
    def test_assert_equal(self) -> None:
        self.assertEqual(10, 10)

    def test_assert_true_or_false(self) -> None:
        self.assertTrue(True)

    def test_assert_raises(self) -> None:
        with self.assertRaises(ValueError):
            # pyrefly: ignore
            int("no_soy_un_numero")

    def test_assert_in(self) -> None:
        self.assertIn(10, [2, 3, 5, 10])
        self.assertNotIn(4, [2, 3, 5, 10])

    def test_assert_dict_set(self) -> None:
        user = {"first_name": "Luis", "last_name": "Martinez"}
        self.assertDictEqual({"first_name": "Luis", "last_name": "Martinez"}, user)
        self.assertSetEqual({1, 2, 3}, {1, 2, 3})

    @unittest.skip("Work in progress. It will be available again")
    def test_skip(self) -> None:
        self.assertEqual("Hola", "Chao")

    @unittest.skipIf(
        SERVER == "server_a", "Skipped, because it is not production server"
    )
    def test_skip_if(self) -> None:
        self.assertEqual(100, 100)

    @unittest.expectedFailure
    def test_expected_failure(self) -> None:
        self.assertEqual(100, 150)
