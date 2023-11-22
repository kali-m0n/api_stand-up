const http = require("node:http");
const fs = require("node:fs/promises");

const Port = 2010;

http
.createServer(async (req, res) => {
    if (req.method === "GET" && req.url === '/comedians') {
        try {
            const data = await fs.readFile('comedians.json', "utf-8");
            res.writeHead(200, {
                "Content-type": "text/json; charset=utf-8",
                "access-control-allow-origin" : "*",
        });
        res.end(data); 
        } catch (error) {
            res.writeHead(500, {
                "Content-type": "text/play; charset=utf-8"
            });
            res.end(`Server Error: `)
        }    
    } else {
        res.writeHead(404);
        res.end('Not found');
    }
}).listen(Port);

console.log(`Server is ruled on http://localhost:${Port}`);