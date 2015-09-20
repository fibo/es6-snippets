
function * generator () {
  yield 5
  yield 6
}

var iterator = generator()
var item

item = iterator.next()
console.log('item.value = ' + item.value)
console.log('item.done is ' + item.done)

item = iterator.next()
console.log('item.value = ' + item.value)
console.log('item.done is ' + item.done)

item = iterator.next()
console.log('item.value = ' + item.value)
console.log('item.done is ' + item.done)

