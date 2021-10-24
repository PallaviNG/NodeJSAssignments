const url = require("url");
const urlAddress = "http://localhost:3000/admin/about?q=html&a=sample";
let parseQuery = url.parse(urlAddress,true);
var pageName = parseQuery.pathname.substr(parseQuery.pathname.lastIndexOf('/')+1);
console.log(pageName+".html");
// console.log(parseQuery);
// console.log(url);