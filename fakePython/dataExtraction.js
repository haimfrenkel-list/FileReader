let fs = require('fs');
const { argv } = require('process');
let homedir = require('os').homedir()

const dataExtraction = function () {

    const names = ['James', 'William', 'Thomas', 'Christopher', 'Matthew', 'Amanda', 'Amy', 'Megan', 'Harold']
    const companies = ['google', 'meta', 'microsoft', 'tesla', 'hp', 'intel', 'wix', 'LiST']
    const categories = ['Insurance Policy', 'Premium Illustrations', 'LE', 'unknowns']

let file = fs.readFileSync(argv[2])

let data = {
    'name': names[Math.floor(Math.random() * names.length)],
    'category': categories[Math.floor(Math.random() * categories.length)],
    'company': companies[Math.floor(Math.random() * companies.length)],
     'file': fs.readFileSync(argv[2])
}
       
console.log(JSON.stringify(data));    
}

module.exports =  dataExtraction()

