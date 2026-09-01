const server = require('http');
const fs = require('fs');

const myServer = server.createServer((req, res) => {
      const log = `${Date.now()}: new request is recieved \n`;
      fs.appendFile("log.txt",log,(err,daata)=>
        {res.end("Hello World from my server")

});
myServer.listen(3000,() => console.log(`Server is running on port 3000`));