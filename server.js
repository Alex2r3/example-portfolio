const http = require('http');
const fs = require('fs');
const path = require('path');

const mimeTypes = {
    '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript',
    '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg', '.gif': 'image/gif', '.svg': 'image/svg+xml',
    '.webp': 'image/webp', '.ico': 'image/x-icon',
};

http.createServer((req, res) => {
    if (req.url === '/favicon.ico') { res.writeHead(204); res.end(); return; }
    const fileName = req.url === '/' ? '/index.html' : req.url;
    const filePath = path.join(__dirname, 'public', fileName);

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(err.code === 'ENOENT' ? 404 : 500, { 'Content-Type': 'text/html' });
            res.end(err.code === 'ENOENT' ? 'Página no encontrada' : 'Error del servidor');
        } else {
            res.writeHead(200, { 'Content-Type': mimeTypes[path.extname(filePath).toLowerCase()] || 'application/octet-stream' });
            res.end(content);
        }
    });
}).listen(3000, () => console.log('Servidor en http://localhost:3000'));
