import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
const root=process.cwd();
const port=Number(process.argv[2])||4173;
const mime={'.html':'text/html; charset=utf-8','.md':'text/markdown; charset=utf-8','.json':'application/json; charset=utf-8','.css':'text/css; charset=utf-8','.js':'application/javascript; charset=utf-8','.png':'image/png'};
http.createServer((req,res)=>{try{const relative=decodeURIComponent(new URL(req.url,'http://localhost').pathname);const file=path.resolve(root,'.'+(relative==='/'?'/index.html':relative));if(file!==root&&!file.startsWith(root+path.sep)){res.writeHead(403);res.end();return;}if(!fs.existsSync(file)||!fs.statSync(file).isFile()){res.writeHead(404);res.end();return;}res.writeHead(200,{'Content-Type':mime[path.extname(file)]||'application/octet-stream','Cache-Control':'no-store'});fs.createReadStream(file).pipe(res);}catch{res.writeHead(400);res.end();}}).listen(port,'127.0.0.1',()=>console.log('Preview: http://127.0.0.1:'+port));
