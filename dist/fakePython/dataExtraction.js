"use strict";
var fs = require('fs');
var argv = require('process').argv;
var homedir = require('os').homedir();
var dataExtraction = function () {
    var names = ['James', 'William', 'Thomas', 'Christopher', 'Matthew', 'Amanda', 'Amy', 'Megan', 'Harold'];
    var companies = ['google', 'meta', 'microsoft', 'tesla', 'hp', 'intel', 'wix', 'LiST'];
    var categories = ['Insurance Policy', 'Premium Illustrations', 'LE', 'unknowns'];
    var file = fs.readFileSync(argv[2]);
    var data = {
        'name': names[Math.floor(Math.random() * names.length)],
        'category': categories[Math.floor(Math.random() * categories.length)],
        'company': companies[Math.floor(Math.random() * companies.length)],
        'file': fs.readFileSync(argv[2])
    };
    console.log(JSON.stringify(data));
};
module.exports = dataExtraction();
//# sourceMappingURL=dataExtraction.js.map