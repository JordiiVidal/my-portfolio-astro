import * as astro from "eslint-plugin-astro";
import * as jsxA11y from "eslint-plugin-jsx-a11y";
import tsParser from "@typescript-eslint/parser";
import astroParser from "astro-eslint-parser";

const astroRecommended = astro.configs?.["flat/recommended"] ?? astro.configs?.recommended;
const astroA11yStrict = astro.configs?.["flat/jsx-a11y-strict"] ?? astro.configs?.["jsx-a11y-strict"];

export default [
  {
    ignores: ["dist", "node_modules", "**/*.ts", "**/*.tsx"],
  },
  ...(Array.isArray(astroRecommended) ? astroRecommended : [astroRecommended].filter(Boolean)),
  {
    files: ["**/*.astro"],
    plugins: { "jsx-a11y": jsxA11y },
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tsParser,
      },
    },
    rules: {
      ...(astroA11yStrict?.rules ?? {}),
    },
  },
];

