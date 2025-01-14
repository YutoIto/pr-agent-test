// __tests__/index.test.ts
import { greet } from '../src/index';

// greet 関数のテスト
describe('greet function', () => {
  it('should return a greeting message', () => {
    const result = greet('TypeScript');
    expect(result).toBe('Hello, TypeScript!');
  });
});
