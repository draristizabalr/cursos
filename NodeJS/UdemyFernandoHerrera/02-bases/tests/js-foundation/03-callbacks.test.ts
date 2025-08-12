import { getUserById } from "../../src/js-foundation/03-callbacks"

describe('js-foundation/03-callbacks', () => {

  test('getUserById should return user when id is defined',  (done) => {
    const id = 1;
    getUserById(id, (error: string | null, user: { id: number; name: string } ) => {
      expect(error).toBeNull();
      expect(user).toBeDefined();

      done();
    })
  });

  test('getUserById should return user when id is defined',  (done) => {
    const id = 10;
    getUserById(id, (error: string | null, user: { id: number; name: string } | null ) => {
      expect(error).toBeDefined();
      expect(user).toBeNull();
      done();
    })
  });


})