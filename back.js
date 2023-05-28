const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
const webtag = fs.readFileSync('webtag.html')
const homemade = fs.readFileSync('./homemade.html')
const my_account = fs.readFileSync('./my_account.html')
const store = fs.readFileSync('./store.html')
const help = fs.readFileSync('./help.html')
const about_us = fs.readFileSync('./about_us.html')

const server = http.createServer((req,res)=>{
    console.log(req.url);
    url = req.url;

    res.statusCode = 200;
    res.setHeader('Content-Type' , 'text/html');
    if(url == '/' || url == '/webtag'){
        res.end(webtag);
    }
    else if(url == '/homemade'){
        res.end(homemade);
    }
    else if(url == '/my_account'){
        res.end(my_account);
    }
    else if(url == '/store'){
        res.end(store);
    }
    else if(url == '/about_us'){
        res.end(about_us);
    }
    else if(url == '/help'){
        res.end(help);
    }
    else{
        res.statusCode = 404;
        res.end("<h1>404 not found</h1>");
    }
});

server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
});