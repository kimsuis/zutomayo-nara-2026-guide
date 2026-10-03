import fs from 'node:fs';
const base='research/latest';fs.mkdirSync(base,{recursive:true});
const sources={
  'netorder.html':'https://zutomayo.net/bunka_denrai_Item_netorder/',
  'preorder.html':'https://zutomayo.net/bunka_denrai_Item_order/',
  'popup.html':'https://zutomayo.net/mart_nara202610/',
  'special.html':'https://zutomayo.net/bunka-denrai/',
  'matsuri.html':'https://zutomayo.net/special/bunka-denrai/matsuri-area/',
  'official-goods.json':'https://script.google.com/macros/s/AKfycbxYww3tOdOtU-Dr337mZ9ZvcJmOBnbbpbVUawJAcFEQoao6_F_bp1s-L6JJjx8-XxiZ/exec',
  'official-preorder.json':'https://script.google.com/macros/s/AKfycbxC6Xh1lai2J21mXAIst2FJCNRTBS8rjmmAm15pqVgFskW3HSrB2UO3-YSB6xnf6EAR/exec',
  'store-api.json':'https://api.official-goods-store.jp/v2/products?shop_id=227&limit=100&offset=0'
};
for(const offset of [100,200,300,400,500,600,700,800])sources['store-api-'+offset+'.json']='https://api.official-goods-store.jp/v2/products?shop_id=227&limit=100&offset='+offset;
await Promise.all(Object.entries(sources).map(async([name,url])=>{const r=await fetch(url,{signal:AbortSignal.timeout(45000)});if(!r.ok)throw Error(name+': HTTP '+r.status);fs.writeFileSync(base+'/'+name,await r.text());console.log('saved '+name);}));
for(const name of ['official-goods.json','official-preorder.json','store-api.json']){const before=JSON.parse(fs.readFileSync('research/'+name,'utf8')),after=JSON.parse(fs.readFileSync(base+'/'+name,'utf8'));const key=name==='store-api.json'?'product_code':'code';const prev=new Set(before.map(p=>p[key]));console.log(JSON.stringify({file:name,before:before.length,after:after.length,added:after.filter(p=>!prev.has(p[key])).map(p=>({code:p[key],name:p.name||p.title,price:p.price||p.price_sale}))}));}
