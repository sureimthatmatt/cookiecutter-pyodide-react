#!/usr/bin/env bash

set -e

PYODIDE_VERSION="0.20.0"
PYODIDE_FILE="pyodide-build-${PYODIDE_VERSION}.tar.bz2"
PYODIDE_URL="https://github.com/pyodide/pyodide/releases/download/${PYODIDE_VERSION}/${PYODIDE_FILE}"

echo "* Downloading Pyodide distribution"
curl -O -L "${PYODIDE_URL}"

echo "* Unpacking Pyodide distribution"
tar xf "${PYODIDE_FILE}"

if [[ ! -f "pyodide/pyodide.js" ]];
then
    echo "[!] Could not find pyodide.js in Pyodide distribution. Exiting." >&2
    exit 1
fi
