// npm - global command, comes with node

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project 
// npm install -g <packageName>
// sudo npm install -g <apackageName> (mac)

// package.json - manifest file (stores important information about our project)
// manual approach (creat package.json in the root)
// npm init (step by step)
// npm init -y (yes to everything)


const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)

console.log(newItems)
console.log('hello people!')