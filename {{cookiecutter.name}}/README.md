# {{ cookiecutter.description }}

This project is based on
[Cookiecutter Pyodide + React template](https://github.com/sureimthatmatt/cookiecutter-pyodide-react),
which is based on
[nano-react-app](https://github.com/nano-react-app/nano-react-app) CRA template.

- `npm start` — This will spawn a development server with a default port of
  `3000`.
- `npm run wheel` — This will output a Python library wheel in the
  `src/{{ cookiecutter.name_py }}/dist` directory.
- `npm run build` — This will output a React production build with up-to-date
  Python library wheel, in the `dist` directory.

## Making changes to the Python library

Open `src/{{ cookiecutter.name_py }}` in PyCharm and create Poetry environment
when prompted. Run `npm run wheel` in the root directory after you're done.

## Adding extra Python dependencies

Change contents of `src/packages.json` and `vite.config.js` files.

You can use `pyodide/packages.json` and
`src/{{ cookiecutter.name_py }}/poetry.lock` files as a source.

## Custom port

You can use the `-p` flag to specify a port for development. To do this, you can
either run `npm start` with an additional flag:

```
npm start -- --port 1234
```

Or edit the `start` script directly:

```
vite --port 1234
```

## Adding styles

You can use CSS files with simple ES2015 `import` statements anywhere in your
Javascript:

```js
import "./index.css";
```

## Babel transforms

The Babel preset
[babel-preset-nano-react-app](https://github.com/nano-react-app/babel-preset-nano-react-app)
is used to support the same transforms that Create React App supports.

The Babel configuration lives inside `package.json` and will override an
external `.babelrc` file, so if you want to use `.babelrc` remember to delete
the `babel` property inside `package.json`.

## Deploy to GitHub Pages

You can also deploy your project using GitHub pages. First install the
`gh-pages` [package](https://github.com/tschaub/gh-pages):

`npm i -D gh-pages`

Use the following scripts for deployment:

```
"scripts": {
  "start": "vite",
  "build": "vite build",
  "predeploy": "rm -rf dist && vite build",
  "deploy": "gh-pages -d dist"
},
```

Then follow the normal procedure in GitHub Pages and select the `gh-pages`
branch.
