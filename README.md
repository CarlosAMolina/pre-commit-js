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
npx eslint src
```

## Files explanation

### .babelrc

The line with `@babel/plugin-transform-modules-commonjs` solves the error `SyntaxError: Cannot use import statement outside a module` when running tests. [Reference](https://stackoverflow.com/questions/59709939/jest-cannot-use-import-statement-outside-a-module).

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
