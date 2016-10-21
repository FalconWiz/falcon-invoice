# falcon-invoice
Generate PDF invoices using HTML templates and mustaches!

## Installation
```
npm install falcon-invoice
```


## Usage

Check out ```test/index.js``` for a more detailed example!

```javascript
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

## Template Example

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
  </head>
  <body>
    <p>
      Customer Name: {{name}}
    </p>
  </body>
</html>
```


## Output example
![alt text](http://i.imgur.com/U9D5ZQV.png "Dat Invoice")

## Credits
This package uses: [html-pdf](https://www.npmjs.com/package/html-pdf) and [mustache](https://www.npmjs.com/package/mustache)

I got my test html template from: https://github.com/NextStepWebs/simple-html-invoice-template
