# [Parcel](https://parceljs.org/) Project Setup

- [x] [Visual Studio Code Settings](#visual-studio-code-settings)
- [] [Parcel](#parcel)
- [] [TypeScript](#typescript)

## [Visual Studio Code](https://code.visualstudio.com/) Settings

[Workspace settings](https://code.visualstudio.com/docs/getstarted/settings) added from [here](../vscode)

## [Parcel](https://parceljs.org)

```bash
npm i -D parcel
```

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
