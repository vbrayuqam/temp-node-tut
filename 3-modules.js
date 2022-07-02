// Node uses CommonJS under the hood, every file is a module
// Modules
const names = require('./4-names')
const {john, peter} = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavour')

require('./7-mind-grenade')

console.log(data)
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
sayHi(john)
sayHi(peter)
sayHi(data.singlePerson.name)

