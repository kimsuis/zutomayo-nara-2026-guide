// 사진 파일을 저장하지 않고 HEAD 응답만 확인합니다.
import fs from 'node:fs';
const goods=JSON.parse(fs.readFileSync('data/goods.json','utf8')).goods;
const urls=[...new Set(goods.map(p=>p.images[0]).filter(Boolean))];
let index=0;const failures=[];let passed=0;
async function worker(){while(index<urls.length){const url=urls[index++];try{const r=await fetch(url,{method:'HEAD',signal:AbortSignal.timeout(15000)});if(!r.ok||!(/^(image\/|jpe?g$)/i.test(r.headers.get('content-type')||'')))failures.push({url,status:r.status,type:r.headers.get('content-type')});else passed++;}catch(e){failures.push({url,error:e.message});}}}
await Promise.all(Array.from({length:6},worker));
console.log(JSON.stringify({checked:urls.length,passed,failures},null,2));
