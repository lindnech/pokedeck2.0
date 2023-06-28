// Lese die JSON-Datei und parsiere sie
const fs = require('fs');
const jsonData = fs.readFileSync('data.json');
const data = JSON.parse(jsonData);

// Übergebe die Daten an die Pug-Vorlage
const pug = require('pug');
const template = pug.compileFile('public/includes/cards.pug');
const renderedTemplate = template({ data });

console.log(renderedTemplate);
