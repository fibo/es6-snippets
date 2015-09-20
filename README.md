es6-snippets
============

> Play with ES6 features

Snippets are in *src/* folder where each subfolder is named according to [ECMAScript 6 compatibility table][1].
Code is run using [Node.js][2] v4 or greater.

If code in file *foo.js* needs to be imported, a *test_foo.js* file will contain the corresponding snippet.
For example [src/class/Point2d.js](https://github.com/fibo/es6-snippets/blob/master/src/class/Point2d.js) is imported by [src/class/test_Point2d.js](https://github.com/fibo/es6-snippets/blob/master/src/class/test_Point2d.js) so you can run

    node src/class/test_Point2d.js

Some features are not supported yet: in that case the folder or file name containing the code will be prepended by an *underscore* character.
For example, at the time of this writing (September 2015), *for of* is not implemented by [Node.js][2] so its folder is *src/_for-of*

  [1]: http://kangax.github.io/compat-table/es6/ "ECMAScript 6 compatibility table"
  [2]: http://nodejs.org/ "Node.js"

