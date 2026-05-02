import { PROMPT, npm_lifecycle_script } from "../../src/js-foundation/02-destructuring";

describe('js-foundation/02-desctructuring', () => {
    test('should contain PROMPT and npm_lifecycle_script', () => {
        expect(PROMPT).toBeDefined();
        expect(npm_lifecycle_script).toBeDefined();
    });

    test('should have $P$G in PROMPT', () => {
      expect(PROMPT).toContain('$P$G');
    })

    test('should have test in npm_lifecycle_script', () => {
      expect(npm_lifecycle_script).toContain('jest');
    })
})