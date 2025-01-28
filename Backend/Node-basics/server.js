const http = require('http'); // NODE CORE MODULE

// Create an HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' }); // Type 
  res.end('okay'); // Send
});

server.listen('3000');