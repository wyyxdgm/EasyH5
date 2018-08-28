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

let build = () => {
	//构建当前页面的json。
	//[0]for key
	//	[1]如果是template,
	//		读取该tempate,路径：相对当前路径
	//			读取的数据
	//				如果原来没有data数据，
	//					拼接到该json的data上
	//						回到[0]
	//				如果原来的有数据，进入下一层
	//					回到[1]
	//				
	//		如果是别的直接忽略。
}



//bower
// cache                   Manage bower cache
//     help                    Display help information about Bower
//     home                    Opens a package homepage into your favorite browser
//     info                    Info of a particular package
//     init                    Interactively create a bower.json file
//     install                 Install a package locally
//     link                    Symlink a package folder
//     list                    List local packages - and possible updates
//     login                   Authenticate with GitHub and store credentials
//     lookup                  Look up a single package URL by name
//     prune                   Removes local extraneous packages
//     register                Register a package
//     search                  Search for packages by name
//     update                  Update a local package
//     uninstall               Remove a local package
//     unregister              Remove a package from the registry
//     version                 Bump a package version
// Options:

//     -f, --force             Makes various commands more forceful
//     -j, --json              Output consumable JSON
//     -l, --loglevel          What level of logs to report
//     -o, --offline           Do not hit the network
//     -q, --quiet             Only output important information
//     -s, --silent            Do not output anything, besides errors
//     -V, --verbose           Makes output more verbose
//     --allow-root            Allows running commands as root
//     -v, --version           Output Bower version
//     --no-color              Disable colors
//     --config.interactive=false Disable prompts