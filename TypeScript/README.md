# TypeScript

- TypeScript extends JavaScript by adding types.
- As TypeScript is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs.
- TypeScript saves you time catching errors and providing fixes before you run code.
- TypeScript is developed and maintained by Microsoft. First release in 1 October 2012;
- But most of a browser don't understand Typescript code so we have compile to javascript code.
- [Learn more](https://www.typescriptlang.org/)

---

## I] Run TypeScript on Browser

1. Required any browser and typescript compiler to compile ts code to js. you can also direct install typescript compiler with using npm
    ```bash
    $ sudo npm install -g typescript
    ```

1. Create two file
    - [index.html](./run-on-browser/index.html) : HTML file
    - [main.ts](./run-on-browser/main.ts)  : TypeScript file

1. Compile Typescript code
    - First way is to direct compile a particular file
        ```bash
        $ tsc main.ts
        ```
    - Second way If you have many ts file to conpile you have to create [tsconfig](./run-on-browser/tsconfig.json) more about tsconfig [here](/https://www.typescriptlang.org/docs/handbook/tsconfig-json.html). Then simply type below command to compile all the ts file
        ```
        $ tsc
        ```

1. New javascript file [main.js](./run-on-browser/main.js) will create with same name but extension will be js. In html file we have import our newly created javascript file using `<script>` tag. 

1. Now we can simple open index.html on browser to run our javascript file.


## II] Run Typescript on nodejs

1. Install nodejs on system (you can install using below command on ubuntu or from [here](https://nodejs.org/en/download/) )
    ```bash
    $ sudo apt install nodejs
    ```
1. Install typescript compiler
    ```bash
    $ sudo npm install -g typescript
    ```

1. Install required packages
    ```bash
    $ npm install prompt-sync
    $ npm install @types/prompt-sync
    ```

1. Write a simple Typescript code code [main.ts](./run-on-node/main.ts)

1. Then write [tsconfig.json](./run-on-node/tsconfig.json) file to compile ts file using (typescript compiler)tsc
    ```bash
    $ tsc
    ```

1. Run newly created [main.js](./run-on-node/main.js) on nodeJs
    ```bash
    $ node main.js
    ```

## TypeScript Language Features

1. __Object Oriented__
1. __Static-Typed language__


## Application and Real-World Example (you can use ts where-ever js is used)
- __Front-End Framework__ -> (Angular, React, Vue)
- __Server-side Framework__ -> (Express ,Nest.js, sail.js, ..etc)
- __Desktop Application__ -> (Electron)
- __Mobile Application__ -> (React native, Ionic )

## Advantage
- Reduce runtime error and bug.
- Make a code more predictable.

## Disadvantage

- You have to mention type but if you initialing the value then it is not necessary.
