const http = require('http');
const os = require('os');

const PORT = 5000;
const IP_ADDRESS = '127.0.0.1';

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  if (req.method === 'GET' && req.url === '/') {
    setTimeout(() => {
      const userInfo = {
        cpu: os.cpus(),
        os: {
          platform: os.platform(),
          type: os.type(),
          release: os.release(),
          totalMemory: os.totalmem(),
          freeMemory: os.freemem(),
        },
      };

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(userInfo));
    }, 5000); 
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(PORT, IP_ADDRESS, () => {
  console.log(`Server running at http://${IP_ADDRESS}:${PORT}/`);
});
