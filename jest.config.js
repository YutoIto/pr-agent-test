// jest.config.js
module.exports = {
  preset: 'ts-jest', // ts-jest を使用して TypeScript ファイルをトランスパイル
  testEnvironment: 'node', // Node.js 環境でテストを実行
  moduleFileExtensions: ['ts', 'js'], // 読み込むファイル拡張子
  testMatch: ['**/__tests__/**/*.test.ts'], // テストファイルのパターン
};
