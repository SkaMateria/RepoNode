// Authentication code Github: 670c929c7b6d7e72d08c02aabed2d01c673c57d8
// GITHUB_ACCESS_TOKEN=670c929c7b6d7e72d08c02aabed2d01c673c57d8

const chalk = require('chalk')
const getNotes = require('./notes.js')

const msg = getNotes()
console.log(chalk.green(msg))

console.log("what is happening")

getNotes

