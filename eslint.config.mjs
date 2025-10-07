// eslint.config.mjs

import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import eslintPluginImport from "eslint-plugin-import";
import reactHooks from "eslint-plugin-react-hooks"; // <-- ✅ Add this
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,jsx,mjs,cjs}"],
    plugins: {
      js,
      import: eslintPluginImport,
      react: pluginReact,
      "react-hooks": reactHooks, // <-- ✅ Register plugin
    },
    extends: ["js/recommended"],
    languageOptions: {
      globals: globals.browser,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      // ✅ Import sorting rules
      "import/order": [
        "warn",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
          "newlines-between": "always",
        },
      ],
      // ✅ React Hooks rules
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  },
  pluginReact.configs.flat.recommended,
]);
