# Live reloading example ReasonML React project VSCode compatible

## Motivation
TypeScript makes Javascript and ES6 usable for larger teams and projects.
ReasonML gives stronger advantages with less effort using a more mature and
powerful type system based on formal logic. Using live reloading with a
series of code transformations based on watches enables a fluid and
articulate programming experience that feels more like automated theorem
proving than TDD. This effect stems from the rapid incremental compilation
of ReasonML.

## Prerequisites

Node.js, `npm` and `yarn`

## Installation

Consider a beverage while waiting for this command to finish.
```
yarn install
```

## Run

Three steps for live reloading your ReasonML using three processes.

1. Run
```
yarn start
```
in one shell to compile the reason code.
2. Run
```
yarn bundle
```
 in another shell to bundle the javascript code with Webpack.
3. Run
```
serve -s public
```
in another shell.
(install [serve](https://www.npmjs.com/package/serve) if necessary)

4. Open (http://localhost:5000) in your browser.

5. Try changing one of the source files in `src/*.re` and see the live
reloading.

## [ReasonML Twitter](https://twitter.com/reasonml?lang=en) 
