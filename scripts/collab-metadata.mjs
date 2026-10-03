export const lotteryRules={verified:'2026-10-03',source:'https://zutomayo.net/bunka-denrai/',rows:[
 {label:'판매 방식',status:'공개',value:'명장 공예 시리즈는 팝업·공연장 전시 후 수량 한정 추첨 판매'},
 {label:'판매 수량',status:'공개',value:'찻사발·술잔 각각 40개 / 하리코 인형 2종 각각 100개'},
 {label:'접수 기간·응모 링크',status:'미공개',value:'공식 안내에서 확인하지 못함'},
 {label:'신청 자격·회원 여부',status:'미공개',value:'회원 가입 필요 여부·해외 거주자 신청 조건 미확인'},
 {label:'응모·구매 제한',status:'미공개',value:'1인 응모 횟수·여러 품목 신청 가능 여부·당첨 시 구매 수량 미확인'},
 {label:'당첨 발표·결제·수령',status:'미공개',value:'발표 일정·알림 방식·결제 기한·배송 또는 현장 수령 방법 미확인'}
]};
export function enrichCollabs(goods,sources){
 const partners=[
 ['nara','주쇼','合同会社樹匠',['ZMY903','ZMY904']],
 ['nara','HEP · 가와히가시 신발상점','川東履物商店 (HEP)',['ZMY891','ZMY914']],
 ['nara','요코','yoccoh.',['ZMY917']],
 ['nara','활판공방 탄','活版工房 丹',['ZMY915','ZMY916','POSTCARD-0','POSTCARD-1','POSTCARD-2']],
 ['nara','하나마루키','ハナマルキ',['ZMY906']],
 ['nara','보사츠 카레','菩薩咖喱',['ZMY912','ZMY913']],
 ['nara','나라 아마즈라 재현 프로젝트','奈良あまづらせん再現プロジェクト',['ZMY918']],
 ['nara','고토카노시즈쿠','古都華のしずく',['ZMY942']],
 ['nara','혼케 기쿠야','本家菊屋',['ZMY925','ZMY926']],
 ['nara','메이스이노사토','名水の里',['ZMY924']],
 ['nara','이마니시 세이베에 상점','今西清兵衛商店',['ZMY927']],
 ['nara','나카모토 주조','中本酒造店',['ZMY928']],
 ['nara','FARMENTRY','FARMENTRY',['ZMY946']],
 ['nara','THERAPYNIA','THERAPYNIA',['ZMY947','ZMY948']],
 ['nara','겐이치 자연농원','健一自然農園',['ZMY889']],
 ['nara','시라유키','白雪',['ZMY894']],
 ['nara','아카시야','奈良筆あかしや',['ZMY890']],
 ['nara','사토덴 마스오 상점','砂糖傳増尾商店',['ZMY892','ZMY893']],
 ['nara','나라현 · 센토군','奈良県 · せんとくん',['ZMY886','ZMY873','ZMY874','ZMY923']],
 ['nara','Good Job! 센터 가시바','Good Job! センター香芝',['ZMY910','ZMY911']],
 ['nara','오시오 쇼잔 · 아카하다야키','大塩昭山',['ZMY907','ZMY908']],
 ['legacy','nana-nana','nana-nana',['ZMY306']],
 ['legacy','하나세레브','鼻セレブ',['ZMY157']]
 ];
 const map=new Map();for(const [group,partner,original,ids]of partners)for(const id of ids)map.set(id,{group,partner,original});
 for(const p of goods){const c=map.get(p.id);p.collab=c?{...c,source:c.group==='nara'?sources.craft:p.url}:null;
  if(p.id==='UPCH-29308'){const source='https://zutomayo.net/news/652/';p.ko='미니 1집 초회 한정판 복각 — 올바른 거짓에서의 기상';p.aliases=['미니1집','미니 1집','1집 초회','초회한정판','첫 미니앨범','정거짓','올거짓','마도서판','마도서 복각','魔導書'];p.specs.notes=['CD 12트랙: 본곡 6곡 + 인스트루멘털 6곡','마도서 형태 BOX · MV 아트북 · ACAね 해설이 포함된 전곡 코드 악보'];p.specs.source=source;p.purchase.method='회원 한정 · 수량 한정 복각 판매';p.purchase.channels=[
   {key:'pickup',label:'사전 주문 → 공연장 수령',detail:'PREMIUM 회원 한정. 10/3 20:00~10/7 23:59 접수, ¥3,565. 10/10·11 祭Area Goods 부스에서 수령. 1인 1장.',url:source},
   {key:'venue',label:'공연장 물판',detail:'PREMIUM 회원 한정. 10/10·11 10:00~21:00, 祭Area Goods 부스. ¥3,600, 1인 1장, 회원증 제시. 재고 소진 시 종료.',url:source},
   {key:'after-event',label:'공연 후 ZUTOMAYO MART 판매 예고',detail:'공연 종료 후 수량 한정·회원 선행 판매 예정. 판매 시기·상세 조건은 추후 공지.',url:source}
  ];p.purchase.sources=[source,p.url];p.purchase.restrictions=['공연 전 사전 수령·현장 판매 모두 PREMIUM 회원 한정','1인 1장 · 각 판매 방식에 별도 상한 재고, 소진 시 종료','사전 수령 ¥3,565 / 현장 직접 구매 ¥3,600 · 구매표 합계는 ¥3,565 기준','나라 팝업의 미니 1집 통상판(UPCH-20497)과 다른 상품'];}
 }
}
