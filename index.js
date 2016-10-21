const fs = require('fs')
const Mustache = require('mustache')
const pdf = require('html-pdf')

const readFile = require('./helpers')

module.exports = function invoice(template, templateVariables, options) {
  if (!template) {
    console.log('No template specified!')
  }
  let defaults = {
    filename: 'invoice.pdf',
    pdfOptions: {
      orientation: 'landscape'
    }
  }
  // Combine the two objects, overriding defaults with specified options
  let settings = Object.assign({}, defaults, options)
  // First, load the template file!
  readFile(template)
    .then(fileBuffer => {
      // It resolves as a buffer, so we'll need to make a string to do things with it
      let templateString = fileBuffer.toString()

      // Run the template through mustache with variables
      let renderedData = Mustache.render(templateString, templateVariables)

      // Use the final rendered data to create a pdf
      pdf.create(renderedData, settings.pdfOptions)
        .toFile(settings.filename, (pdfError, result) => {
          if (pdfError) {
            console.log(`Error creating PDF: ${pdfError}`)
          }
          console.log(`PDF Created: ${result.filename}`)
        })
    })
    .catch(fileError => {
      console.log(`Error reading file: ${fileError}`)
    })
}
