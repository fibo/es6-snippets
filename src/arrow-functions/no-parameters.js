
var five = () => 5

console.log(five())

function getSix () {
  return () => 6
}

var six = getSix()

console.log(six())

function constant (x) {
  return () => x
}

var seven = constant(7)

console.log(seven())

