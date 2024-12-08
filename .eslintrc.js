module.exports = {
  parser: "@typescript-eslint/parser", // Define o parser para o TypeScript
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier", // Desativa regras conflitantes com o Prettier
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020, // Suporte para recursos modernos do JavaScript
    sourceType: "module", // Suporte para módulos ECMAScript
  },
  rules: {
    // Aqui você pode sobrescrever regras conforme necessário
    "@typescript-eslint/no-unused-vars": "warn",
    "prettier/prettier": "error",
    "no-console": "warn", // Exemplo: desativa console.log em produção
  },
  env: {
    browser: true,
    node: true,
  },
};
