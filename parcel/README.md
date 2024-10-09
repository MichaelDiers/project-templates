# [Parcel](https://parceljs.org/) Project Setup

- [x] [Visual Studio Code Settings](#visual-studio-code-settings)
- [] [TypeScript](#typescript)
- [] [React](#react)
- [] [Parcel](#parcel)
- [] [.gitignore](#gitignore)
- [] [ESLint](#eslint)
- [] [Tests](#tests)
- [] [Code Coverage](#code-coverage)

## [Visual Studio Code](https://code.visualstudio.com/) Settings

[Workspace settings](https://code.visualstudio.com/docs/getstarted/settings) are added from [here](../vscode).

## [TypeScript](https://www.typescriptlang.org/)

```bash
npm i -D typescript
```

Add the TypeScript [configuration](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) file [`tsconfig.json`](./tsconfig.json):

```json
{
  "compilerOptions": {
    "allowJs": false,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "module": "esnext",
    "moduleResolution": "node",
    "noEmit": true,
    "noFallthroughCasesInSwitch": true,
    "target": "es6",
    "strict": true
  },
  "include": [
    "src",
    "test"
  ]
}
```

## [React](https://react.dev/)

```bash
npm i react react-dom react-router-dom
npm i -D @types/react @types/react-dom @types/react-router-dom
```

## [Parcel](https://parceljs.org)

```bash
npm i -D parcel @parcel/config-default @parcel/transformer-typescript-tsc
```

Add the Parcel [configuration](https://parceljs.org/plugin-system/configuration/) file [`.parcelrc`](./.parcelrc):

```json
{
  "extends": "@parcel/config-default",
  "transformers": {
    "*.{ts,tsx}": [
      "@parcel/transformer-typescript-tsc"
    ]
  }
}
```

Add the [`index.html`](./src/index.html) in the [`src`](./src/) folder:

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <title>My Parcel App</title>
</head>

<body>
  <div id="app"></div>
  <script type="module" src="index.tsx"></script>
</body>

</html>
```

Add file [`index.tsx`](./src/index.tsx) in the [`src`](./src/) folder:

```js
import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

const container = document.getElementById('app')!;
const root = createRoot(container);
root.render(<App />);
```

Add file [`App.tsx`](./src/App.tsx) in the [`src`](./src/) folder:

```js
import React from 'react';

export function App(): React.JSX.Element {
  const text = 'Hello World!';
  return (
    <h1>
      {text}
    </h1>
  );
}
```

Edit the [`package.json`](./package.json) and add the entries for `scripts` and `source`:

```json
"source": "src/index.html",
"scripts": {
  "start": "parcel",
  "build": "parcel build"
}
```

Run the app and check if it is available at `http://localhost:1234`:

```bash
npm start
```

## [.gitignore](https://docs.github.com/en/get-started/getting-started-with-git/ignoring-files)

Add files and folders that are ignored at check-ins to the [`.gitignore`](./.gitignore) file:

```
dist
node_modules
.parcel-cache
.nyc_output
```

## [ESLint](https://eslint.org/)

[ESLint](https://eslint.org/) uses the Airbnb [configuration](https://www.npmjs.com/package/eslint-config-airbnb-typescript).


```bash
npx install-peerdeps --dev eslint-config-airbnb
npm i -D eslint-config-airbnb-typescript@latest @typescript-eslint/eslint-plugin@^7.18.0 @typescript-eslint/parser@^7.18.0
```

Add the [`.eslintrc`](./.eslintrc) configuration file for [ESLint](https://eslint.org/docs/latest/use/configure/configuration-files-deprecated):

```json
{
  "extends": [
    "airbnb",
    "airbnb-typescript"
  ],
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "rules": {
    "jsx-quotes": [
      "error",
      "prefer-single"
    ],
    "import/prefer-default-export": "off",
    "jsx-a11y/label-has-associated-control": [
      2,
      {
        "assert": "htmlFor"
      }
    ]
  },
  "overrides": [
    {
      "files": [
        "*.spec.ts",
        "*.spec.tsx"
      ],
      "rules": {
        "@typescript-eslint/no-unused-expressions": "off"
      }
    }
  ]
}
```

Add `lint` to the [`package.json`](./package.json) `scripts`:

```json
"lint": "npx eslint src test --fix"
```

> [!Warning]
> The [npm](https://www.npmjs.com) package [`eslint-config-airbnb-typescript`](https://github.com/iamturns/eslint-config-airbnb-typescript) is not supported anymore and needs to be replaced.

## Tests

A combination of [Mocha](https://mochajs.org/), [Chai](https://www.chaijs.com/) and the [React Testing Library](https://github.com/testing-library/react-testing-library) is 
used for testing.

```bash
npm i -D @types/mocha mocha ts-node "@types/chai@^4.3.16" "chai@4.5.0"
npm i -D @testing-library/react @testing-library/dom
npm i -D jsdom @types/jsdom
npm i -D jsdom-global @types/jsdom-global
npm i -D cross-env
npm i -D ts-node
```

Add a specific [tsconfig.test.json](./tsconfig.test.json) that is used by [ts-node](https://github.com/TypeStrong/ts-node):

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "module": "CommonJS"
  }
}
```
Add the mocha configuration file [.mocharc.json](./.mocharc.json):

```json
{
  "env": {
    "mocha": true
  },
  "extension": [
    "ts",
    "tsx"
  ],
  "require": [
    "ts-node/register"
  ],
  "recursive": true
}
```

Add test file [`App.spec.tsx`](./test/App.spec.tsx) in the `test` folder:

```js
import ReactDOMClient from 'react-dom/client';
import { expect } from 'chai';
import { act } from '@testing-library/react';
import jsdomGlobal from 'jsdom-global';
import React from 'react';
import { App } from '../src/App';

describe('App tests', function appTests() {
  this.timeout(5000);

  before(function before() {
    this.jsdom = jsdomGlobal();
  });

  after(function after() {
    this.jsdom();
  });

  it('can render App and "Hello World!" is displayed', async () => {
    const container = document.createElement('div');
    document.body.appendChild(container);

    await act(async () => {
      ReactDOMClient.createRoot(container).render(<App />);
    });

    const h1 = container.querySelector('h1');
    expect(h1).not.be.null;
    expect(h1!.textContent).to.equal('Hello World!');
  });
});
```

Add `test` to the [`package.json`](./package.json) `scripts`:

```json
"test": "cross-env TS_NODE_PROJECT='./tsconfig.test.json' mocha"
```

## Code Coverage

[Istanbul](https://istanbul.js.org/) is used for the code coverage analysis.

```bash
npm i -D nyc @istanbuljs/nyc-config-typescript
```

Add the coverage configuration file [`.nycrc`](./.nycrc):

```json
{
  "extends": "@istanbuljs/nyc-config-typescript",
  "all": true,
  "check-coverage": true,
  "exclude": [
    "**/*.spec.ts",
    "**/*.spec.tsx"
  ],
  "extension": [
    ".ts",
    ".tsx"
  ]
}
```

Add `coverage` to the [`package.json`](./package.json) `scripts`:

```json
"coverage": "cross-env TS_NODE_PROJECT='./tsconfig.test.json' nyc mocha"
```
