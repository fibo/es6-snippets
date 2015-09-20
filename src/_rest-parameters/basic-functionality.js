
(function (first, ...rest) {
  console.log(first)

  if (rest instanceof Array)
    console.log('rest is instance of Array')

})('first', 3, 'other', 'arguments')

