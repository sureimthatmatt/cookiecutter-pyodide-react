import { viteStaticCopy } from "vite-plugin-static-copy";

const files = [
  // Pyodide files
  "pyodide/pyodide.js",
  "pyodide/pyodide.asm.data",
  "pyodide/pyodide.asm.js",
  "pyodide/pyodide.asm.wasm",
  "pyodide/pyodide_py.tar",

  // Library files
  "src/packages.json",
  "src/{{ cookiecutter.name_py }}/dist/{{ cookiecutter.name_py }}-{{ cookiecutter.version }}-py3-none-any.whl",
];

export default {
  build: {
    rollupOptions: {
      external: "./py/pyodide.js",
    },
  },
  optimizeDeps: {
    exclude: ["node-fetch"],
  },
  plugins: [
    viteStaticCopy({
      targets: files.map((file) => ({ src: file, dest: "py" })),
    }),
  ],
};
