#!/usr/bin/env node
const http = require('http');
const fs = require('fs');
const path = require('path');

function parseArgs() {
  const args = process.argv.slice(2);
  const opts = { port: process.env.PORT || 5173, dir: process.cwd() };
  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (a === '--port' || a === '-p') { opts.port = args[i+1]; i++; }
    else if ((a === '--dir' || a === '-d') && args[i+1]) { opts.dir = path.resolve(args[i+1]); i++; }
    else if (a === '--help' || a === '-h') { opts.help = true; }
  }
  return opts;
}

function mimeType(file) {
  const ext = path.extname(file).toLowerCase();
  const map = {
    '.html':'text/html', '.htm':'text/html', '.css':'text/css', '.js':'application/javascript',
    '.json':'application/json', '.png':'image/png', '.jpg':'image/jpeg', '.jpeg':'image/jpeg', '.svg':'image/svg+xml', '.gif':'image/gif', '.woff':'font/woff', '.woff2':'font/woff2'
  };
  return map[ext] || 'application/octet-stream';
}

function serve(dir, port) {
  const server = http.createServer((req, res) => {
    try {
      const requested = decodeURIComponent(req.url.split('?')[0]);
      let filePath = path.join(dir, requested);
      // If request is directory, serve index.html
      if (filePath.endsWith(path.sep)) filePath = path.join(filePath, 'index.html');
      // If path is a directory without trailing slash
      if (!path.extname(filePath)) {
        const index = filePath + path.sep + 'index.html';
        if (fs.existsSync(index)) filePath = index;
      }
      if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
        // fallback to index.html from dir
        const fallback = path.join(dir, 'index.html');
        if (fs.existsSync(fallback)) {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          fs.createReadStream(fallback).pipe(res);
          return;
        }
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
        return;
      }
      const stat = fs.statSync(filePath);
      res.writeHead(200, { 'Content-Type': mimeType(filePath), 'Content-Length': stat.size });
      fs.createReadStream(filePath).pipe(res);
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Server error: ' + String(err));
    }
  });
  server.listen(Number(port), () => {
    console.log(`Serving ${dir} at http://localhost:${port}`);
    console.log('Press CTRL+C to stop');
  });
}

const opts = parseArgs();
if (opts.help) {
  console.log('Usage: study-buddy [--port <port>] [--dir <path>]');
  process.exit(0);
}

const serveDir = path.resolve(opts.dir);
serve(serveDir, opts.port);
