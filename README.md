# falcon-invoice
Generate PDF invoices using HTML templates and mustaches!

## Installation (NOTE: THIS DOESN'T WORK YET, PLEASE FORGIVE ME)
```
npm install falcon-invoice
```


## Usage

Check out ```test/index.js``` for a more detailed example!

```
const invoice = require('falcon-invoice')

const template = '/path/to/template'
const templateVariables = {
  name: 'Herp Derpington'
}

// Optional options
const options = {
  filename: 'differentName.pdf',
  pdfOptions: {
    orientation: 'landscape'
  }
}

invoice(template, templateVariables, options)
```

## Credits
This package uses: [html-pdf](https://www.npmjs.com/package/html-pdf) and [mustache](https://www.npmjs.com/package/mustache)

I got my test html template from: https://github.com/NextStepWebs/simple-html-invoice-template
