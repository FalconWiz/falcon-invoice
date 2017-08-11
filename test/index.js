const invoice = require('../')

const htmlTemplate = `${__dirname}/templates/invoice.html`

const templateVariables = {
  date: new Date().toISOString().split('T')[0],
  imageDirectory: `${__dirname}/templates/images`,
  paymentMethod: 'Credit',
  itemName: 'Video Games',
  itemPrice: '59.99',
  totalCost: '59.99'
}

invoice(htmlTemplate, templateVariables).then(function(success){

}).catch(function(error){
  
});
