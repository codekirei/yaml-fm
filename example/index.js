// modules
var fm = require('../')
var fs = require('fs')
var globby = require('globby')
var bb = require('bluebird')

// promisify fs.readFile
var read = path => bb.promisify(fs.readFile)(path, 'utf8')

// glob -> paths -> strings -> objects
globby('content/*.md')
  .then(paths => bb.all(paths.map(read)))
  .then(strs => strs.map(fm('---')))
  .then(console.log)
  .catch(console.log)

/**
  NOTE:
  The fm transform could also look like this:

  .then(strs => strs.map(str => fm('---')(str)))

  Because yaml-fm uses currying, we can shorten that to the code seen above:

  .then(strs => strs.map(fm('---')))
 */
