let fs = require('fs');
if (!fs.existsSync('gm.json')) return console.error('no gm.json');
let conf = require('./gm.json');
if (!conf.main) return console.error('no main gm.json');
let [htmlPath, jsonPath] = [conf.main + '.html', conf.main + '.json'];
if (!fs.existsSync(htmlPath)) return console.error('no file ' + htmlPath + ' that defined in gm.json by main');
if (!fs.existsSync(jsonPath)) return console.error('no file ' + jsonPath + ' that defined in gm.json by main');
let [htmlContent, jsonContent] = [htmlPath, jsonPath].map(_path => fs.readFileSync(_path).toString());
console.log({
	htmlContent,
	jsonContent
});

let ejs = require('ejs');
let htmlStr = ejs.render(htmlContent, json);
