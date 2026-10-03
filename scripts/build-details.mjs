import fs from 'node:fs';
const md=s=>String(s).replaceAll('|','\\|').replaceAll('\n','<br>');
const yen=n=>'¥'+n.toLocaleString('en-US');
export function buildDetails(catalog){
 let text='# 나라콘 굿즈 — 사이즈·구매 장소·추첨 안내\n\n[사진·수량 구매표](GOODS_CHECKLIST.md) · [휴대폰 사이트](https://kimsuis.github.io/zutomayo-nara-2026-guide/)\n\n확인일 **'+catalog.verified+'**. 상품별 안내를 펼치면 실측과 판매 조건을 볼 수 있습니다. 실측은 약값, 가격은 세금 포함 엔화이며 실시간 재고 정보가 아닙니다. Short는 짧은 길이 옵션, 가슴단면은 둘레가 아닙니다. 화장은 목 중심에서 소매 끝까지 길이입니다.\n\n';
 text+='## 명장 공예 추첨 규칙 · 공개 상태\n\n| 항목 | 상태 | 안내 |\n|---|---|---|\n'+catalog.lotteryRules.rows.map(r=>`| ${r.label} | ${r.status} | ${r.value} |`).join('\n')+`\n\n확인일 ${catalog.lotteryRules.verified} · [공식 추첨 판매 소개](${catalog.lotteryRules.source}). 체험 참가권 추첨·팝업 입장 예약과 별도입니다.\n\n`;
 text+='## 추가 공개를 기다리는 명장 협업\n\n'+catalog.pendingCrafts.map(p=>`- **${p.ko}**: ${p.status}. [공식 공지](${p.source})`).join('\n')+'\n\n';
 for(const p of catalog.goods){const s=p.specs,b=p.purchase;text+=`<a id="${p.id.toLowerCase()}"></a>\n\n<details>\n<summary>${p.ko} · ${p.code} · ${yen(p.price)}</summary>\n\n**${md(p.name)}**\n\n[공식 상품·소개](${p.url})${p.additionalRelease?' · **추가 공개 상품**':''}\n\n### 사이즈·규격\n\n`;
 if(p.collab)text+=`**${p.collab.group==='nara'?'이번 나라 콜라보':'이전·기존 콜라보'}: ${p.collab.partner} (${p.collab.original})** · [공식 협업 소개](${p.collab.source})\n\n`;
 if(s.options.length)text+='공개 사이즈: **'+md(s.options.join(' / '))+'**\n\n';
 if(s.rows.length)text+='| 사이즈 | 공식 실측 (약) |\n|---|---|\n'+s.rows.map(r=>`| ${md(r.label)} | ${md(r.value)} |`).join('\n')+'\n\n';
 text+=s.notes.length?s.notes.map(md).join('<br>')+'\n\n':s.rows.length?'':'상세 실측 미공개\n\n';
 if(s.material)text+='소재: '+md(s.material)+'\n\n';text+=`[규격 출처](${s.source})\n\n### 구매 안내 — ${b.method}\n\n`;
 if(b.restrictions.length)text+=b.restrictions.map(t=>'- '+md(t)).join('\n')+'\n\n';
 if(b.channels.length)text+='| 장소 | 일정·방법 | 공식 안내 |\n|---|---|---|\n'+b.channels.map(c=>`| ${md(c.label)} | ${md(c.detail)} | [확인](${c.url}) |`).join('\n')+'\n\n';
 for(const url of b.sources.filter(url=>!b.channels.some(c=>c.url===url)))text+=`[추가 판매 조건](${url})\n\n`;
 text+='</details>\n\n';
 }
 fs.writeFileSync('GOODS_DETAILS.md',text);
}
