# Suburbicode ESLint Config

Shareable code style for Suburbicode projects.

## Install

```sh
yarn add --dev @suburbicode/eslint-config eslint-config-standard eslint-plugin-promise eslint-plugin-jest eslint-plugin-node eslint-plugin-es5 eslint-plugin-standard eslint-plugin-security eslint-plugin-import eslint-plugin-prefer-let eslint-plugin-unicorn eslint
```


## Usage

Add this config to `package.json` or other ESLint configs.

Browser and universal project:

```js
  "eslintConfig": {
    "extends": "@suburbicode/eslint-config/browser"
  }
```

Server-only project:

```js
  "eslintConfig": {
    "extends": "@suburbicode/eslint-config/node"
  }
```

For base config extension:

```js
  "eslintConfig": {
    "extends": "@suburbicode/eslint-config"
  }
```
