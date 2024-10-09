# [Parcel](https://parceljs.org/) Project Setup

- [x] [Visual Studio Code Settings](#visual-studio-code-settings)
- [] [TypeScript](#typescript)
- [] [React](#react)
- [] [Parcel](#parcel)
- [] [.gitignore](#gitignore)
- [] [ESLint](#eslint)

## [Visual Studio Code](https://code.visualstudio.com/) Settings

[Workspace settings](https://code.visualstudio.com/docs/getstarted/settings) added from [here](../vscode)

## [TypeScript](https://www.typescriptlang.org/)

```bash
npm i -D typescript
```

Add the TypeScript (configuration)[https://www.typescriptlang.org/docs/handbook/tsconfig-json.html] file (`tsconfig.json`)[./tsconfig.json]:

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
npm i -D parcel
npm i -D @parcel/config-default @parcel/transformer-typescript-tsc
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

Add file [`index.tsx`](./src/index.tsx):

```js
import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

const container = document.getElementById('app')!;
const root = createRoot(container);
root.render(<App />);
```

Add file [`App.tsx`](./src/App.tsx):

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

Edit the [`package.json`](./package.json): add `scripts` and `source`:

```json
"source": "src/index.html",
"scripts": {
  "start": "parcel",
  "build": "parcel build"
}
```

Run the app and check if it available at `http://localhost:1234`:

```bash
npm start
```

## [.gitignore](https://docs.github.com/en/get-started/getting-started-with-git/ignoring-files)

Add files and folders that are not checked in to the [`.gitignore`](./.gitignore):

```
dist
node_modules
.parcel-cache
```

## [ESLint](https://eslint.org/)

[ESLint](https://eslint.org/) uses the Airbnb [configuration](eslint-config-airbnb-typescript).


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
