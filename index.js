var http = require("http");
// console.log(http);
var fs = require("fs");
var url = require("url");
const path =require("path");
const htmlBasePath = path.join(__dirname,'public','static');

const server = http.createServer(function (request, response) {
    const _urlAddress = request.url;
    // console.log(_urlAddress);
    const _parseURL = url.parse(_urlAddress, true);
    var _pageName = _parseURL.pathname.substr(_parseURL.pathname.lastIndexOf('/') + 1);
    if (_pageName != 'favicon.ico') {
        console.log(_pageName);
        // response.writeHead(200, {
        //     "Content-Type": "text/html",
        // });
        // response.write("hello");
        // response.end();

        // var filePath = `./public/html/${_pageName}.html`;
        // console.log(filePath);
        // fs.readFile(filePath,function(error,data){
        //     if(error)
        //         throw error;
        //     response.writeHead(200,{
        //         "Content-Type":"text/html"
        //     });
        //     response.write(data);
        //     return response.end();
        // });

        switch (_pageName) {
            case "":
                _pageName = 'index';
                break;
            case 'index':
                _pageName = 'index';
                break;
            case 'about':
                _pageName = 'about';
                break;
            case 'team':
                _pageName = 'team';
                break;
            default:
                _pageName = '404';
                break;
        }
        var filePath = path.join(htmlBasePath,`${_pageName}.html`);
        console.log("filePath: "+filePath);
        
        fs.readFile(filePath, function (error, data) {
            if (error)
                throw error;
            response.writeHead(200, {
                "Content-Type": "text/html"
            });
            response.write(data);
            return response.end();
        });
    }
    else {
        response.end();
    }
}).listen(3000, function () {
    console.log("Server is started at port: 3000");
})

// const server = http.createServer(function(request,response){
//     // response.write("<h1>Hello this from node server</h1>");
//     // response.end();
//     var filePath = "./public/html/index.html";
//     fs.readFile(filePath,function(error,data){
//         if(error)
//             throw error;
//         response.writeHead(200,{
//             "Content-Type":"text/html"
//         });
//         response.write(data);
//         return response.end();
//     })
// }).listen(3000,function(){
//     console.log("Server is started at port 3000");
// });