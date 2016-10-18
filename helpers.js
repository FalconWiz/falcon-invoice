'use strict'

const fs = require('fs')

module.exports = function readFilePromise(filePath, options) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, options, (err, data) => {
      if (err) {
        reject(err)
        return
      }

      resolve(data)
    })
  })
}
