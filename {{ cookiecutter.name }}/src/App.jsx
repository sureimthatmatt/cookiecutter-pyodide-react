import React, { useEffect } from "react";

export default function App() {
  useEffect(() => {
    loadPyodide({ fullStdLib: false }).then(async (py) => {
      await py.loadPackage("{{ cookiecutter.name_py }}");

      const lib = py.pyimport("{{ cookiecutter.name_py }}");
      alert(lib.greet("World"));
    });
  }, []);

  return (
    <>
      <h1>Welcome to Cookiecutter Pyodide + React app!</h1>
      <p>Hard to get more minimal than this React app.</p>
    </>
  );
}
