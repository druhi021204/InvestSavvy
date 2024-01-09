const http = require('http');
const lo =require('lodash');

const server = http.createServer((req, res)=>{
//    console.log(req.url, req.method);
      const num = lo.random(0,20);                //one of the methods of lodash
      console.log(num);

      const greet = lo.once(()=>{
        console.log("hello");
      })

      greet();
      greet();
   //set haeader content type
   res.setHeader('Content-Type', 'text/html');
   res.write('<h1>siddhi here,hello!!! using port 8080</h2>');
   res.end();
});

server.listen(8080, 'localhost', () =>{
    console.log("listenening for request on port 8000");
});

