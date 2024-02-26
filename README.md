## Introduction

This is a template project to develop .js code.

This project allows you to work with:

- pre-commit
- tests
- prettier
- linter

## How to use this template in your project

Copy all the files in your project.

### package.json

Replace `pre-commit-js` with the name of your project.

Update values of:

- desription
- main

My name and my GitHub account appear in this file too, modify them.

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

Note. The linter will be run automatically with pre-commit before each commit.

To run the linter manually, in the same path as the `package.jon` file, execute:

```bash
npm run lint
```

The previous command will execute the `lint` script defined in `package.json`.

## Prettier

Note. The prettier will be run automatically with pre-commit before each commit.

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

### pre-commit

Read [this link](https://www.npmjs.com/package/pre-commit).

### prettier

Prettifier, explained in [this link](https://blog.logrocket.com/using-prettier-eslint-automate-formatting-fixing-javascript/).

## Resources

Initialize the project:
https://blog.logrocket.com/using-prettier-eslint-automate-formatting-fixing-javascript/

Test with jest:
https://jestjs.io/docs/getting-started
