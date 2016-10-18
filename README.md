# falcon-invoice
Generate PDF invoices using HTML templates and mustaches!

## Installation
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
