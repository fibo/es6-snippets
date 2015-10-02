es6-snippets
============

> Play with ES6 features

Code is run using [Node.js][2] v4 or greater.

Snippets are in *src/* folder where each subfolder is named according to [ECMAScript 6 compatibility table][1], where a space is replaced with a *dash* and other characters are removed: for example *for of loops* snippets are in folder [src/for-of-loops](https://github.com/fibo/es6-snippets/tree/master/src/for-of-loops), *function "name" property* are in folder [src/function-name-property](https://github.com/fibo/es6-snippets/tree/master/src/function-name-property).

Same naming convention applies to file names.

If code in file *foo.js* needs to be imported, a *test_foo.js* file will contain the corresponding snippet.
For example [src/class/Point2d.js](https://github.com/fibo/es6-snippets/blob/master/src/class/Point2d.js) is imported by [src/class/test_Point2d.js](https://github.com/fibo/es6-snippets/blob/master/src/class/test_Point2d.js) so you can run

    node src/class/test_Point2d.js

Some features are not supported yet: in that case the folder or file name containing the code will be prepended with an *underscore* character.
For example, at the time of this writing (September 2015), *rest parameters* feature is not implemented at all by [Node.js][2] so its folder will be *src/_rest-parameters*. While *function "name" property* is partially implemented, in particular *variable functions* are not, so the file path will be *src/function-name-property/_variables-function.js*.

  [1]: http://kangax.github.io/compat-table/es6/ "ECMAScript 6 compatibility table"
  [2]: http://nodejs.org/ "Node.js"

