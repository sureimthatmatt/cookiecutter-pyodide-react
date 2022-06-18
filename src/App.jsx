import React, { useEffect } from "react";

export default function App() {
  useEffect(() => {
    loadPyodide({ fullStdLib: false }).then(async (py) => {
      await py.loadPackage("libdemo");

      const lib = py.pyimport("libdemo");
      alert(lib.greet("World"));
    });
  }, []);

  return (
    <>
      <h1>Welcome to Pyodide React app!</h1>
      <p>Hard to get more minimal than this React app.</p>
    </>
  );
}
