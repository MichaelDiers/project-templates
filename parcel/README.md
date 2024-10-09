# [Parcel](https://parceljs.org/) Project Setup

- [x] [Visual Studio Code Settings](#visual-studio-code-settings)
- [] [TypeScript](#typescript)
- [] [React](#react)
- [] [Parcel](#parcel)
- [] [.gitignore](#gitignore)

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
