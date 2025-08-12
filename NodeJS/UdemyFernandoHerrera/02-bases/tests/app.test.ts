/// AAA

describe('Test in the App file', () => {
  test('should be true', () => {
    // 1. Arrange
    const numb1 = 10;
    const numb2 = 20;
    // 2. Act
    const result = numb1 + numb2;
    // 3. Assert
    expect(result).toBe(30);
  });
});