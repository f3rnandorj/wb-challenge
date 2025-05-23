import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: [
      "next/core-web-vitals", "next/typescript", "prettier", "plugin:testing-library/react", "plugin:jest-dom/recommended"],
    rules: {
      semi: ["error"],
      quotes: ["error", "double"],
      "prefer-arrow-callback": ["error"],
      "prefer-template": ["error"],
      "@typescript-eslint/no-explicit-any": ["off"],
      "react-hooks/exhaustive-deps": ["off"],
      "react/display-name": ["off"],
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          "argsIgnorePattern": "^_",
          "ignoreRestSiblings": true
        }
      ]
    },
  }),
];
export default eslintConfig;
