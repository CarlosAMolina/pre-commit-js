## Introduction

This is a template project to develop .js code.

This project allows you to work with tests, pre-commit, linter, prettier, etc.

## Configuration

### Install requirements

In the same path as the `package.json` file, run:

```bash
npm install
```

## Test

In the same path as the `package.json` file, run:

```bash
npm test
```

## Linter

To run the linter manually, in the same path as the `package.jon` file, execute:

```bash
npm run lint
```

The previous command will execute the `lint` script defined in `package.json`.

## Prettier

To run the prettier manually, in the same path as the `package.jon` file, execute:

```bash
npm run prettier
```

The previous command will execute the `prettier` script defined in `package.json`.

To fix the prettier issues, run:

```bash
npm run prettier:fix
```

## Files explanation

### .babelrc

The line with `@babel/plugin-transform-modules-commonjs` solves the error `SyntaxError: Cannot use import statement outside a module` when running tests. [Reference](https://stackoverflow.com/questions/59709939/jest-cannot-use-import-statement-outside-a-module).

### .eslintrc.json

#### Fix errors

Error `Parsing error: The keyword 'export' is reserved`.

Explained in this [link](https://stackoverflow.com/questions/42706584/eslint-error-parsing-error-the-keyword-const-is-reserved), I use:

- "ecmaVersion": "latest"

Error `Parsing error: 'import' and 'export' may appear only with 'sourceType: module'`

Explained in this [link](https://stackoverflow.com/questions/60338944/eslint-howto-fix-parsing-error-import-and-export-may-only-appear-at-the-top). I add:

- "sourceType": "module"

### package.json

This file has been created running the command:

```bash
npm init
```

After that, the file has been updated with different requirements.

## Project explanation

### Test non exported code

Explained in this [link](https://stackoverflow.com/questions/54116070/how-can-i-unit-test-non-exported-functions).

## Installed libraries

### @babel/plugin-transform-modules-commonjs

Solves the error `SyntaxError: Cannot use import statement outside a module` when running tests. [Reference](https://stackoverflow.com/questions/59709939/jest-cannot-use-import-statement-outside-a-module).

### eslint

Linter, explained in [this link](https://blog.logrocket.com/using-prettier-eslint-automate-formatting-fixing-javascript/).

### jest

For testing, explained in [this link](https://jestjs.io/docs/getting-started).

### prettier

Prettifier, explained in [this link](https://blog.logrocket.com/using-prettier-eslint-automate-formatting-fixing-javascript/).

## Resources

Initialize the project:
https://blog.logrocket.com/using-prettier-eslint-automate-formatting-fixing-javascript/

Test with jest:
https://jestjs.io/docs/getting-started
