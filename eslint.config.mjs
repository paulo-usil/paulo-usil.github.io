import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node, // Permite require, module.exports, process, etc.
      },
    },
    ignores: ["_site/**"], // Ignora la carpeta compilada
  },
];
