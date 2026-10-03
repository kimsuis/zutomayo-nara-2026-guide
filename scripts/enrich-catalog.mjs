// Extract factual size sections only; store descriptions and scripts are not republished.
const plain=s=>String(s||'').replace(/<!--[\s\S]*?-->/g,'').replace(/<br\s*\/?\s*>/gi,'\n').replace(/<[^>]+>/g,'').replace(/&nbsp;/g,' ').replace(/&Ntilde;/g,'Ñ').replace(/&times;/g,'×').replace(/&quot;/g,'"').replace(/&yen;/g,'¥').replace(/&amp;/g,'&').replace(/&#39;/g,"'").trim();
const translations=[['身丈(NP〜)','총장(목옆점부터)'],['ショルダーストラップ','어깨끈'],['ショルダー','어깨끈'],['持ち手','손잡이'],['ストラップ','스트랩'],['マチ','폭'],['ウエスト','허리둘레'],['ウェスト','허리둘레'],['ヒップ','엉덩이둘레'],['ワタリ','허벅지너비'],['股上','밑위'],['股下','인심'],['裾幅','밑단너비'],['着丈','총장'],['身丈','총장'],['総丈','전체길이'],['身幅','가슴단면'],['肩幅','어깨너비'],['袖丈','소매길이'],['裄丈','화장(목중심~소매끝)'],['袖幅','소매너비'],['頭周り','머리둘레'],['内径','안지름'],['外径','바깥지름'],['直径','지름'],['全長','전체길이'],['高さ','높이'],['横幅','가로'],['幅','너비'],['奥行','깊이'],['長さ','길이'],['本体','본체'],['チャーム','참'],['キーホルダー','키링'],['ポストカード','엽서'],['クリアファイル','클리어파일'],['ステッカー','스티커'],['巾着','조임끈 파우치'],['最大','최대'],['最小','최소'],['調整可能','조절 가능'],['ゴム','고무'],['約','약'],['用','용'],['綿','면'],['ポリエステル','폴리에스터'],['ポリウレタン','폴리우레탄'],['ナイロン','나일론'],['アクリル','아크릴'],['レーヨン','레이온'],['紙','종이'],['木','목재'],['表地','겉감'],['裏地','안감'],['リブ','리브'],['アルミ','알루미늄'],['鉄','철'],['真鍮','황동'],['亜鉛合金','아연합금'],['ステンレス','스테인리스'],['シリコン','실리콘'],['合成皮革','합성피혁'],['合成樹脂','합성수지'],['塩化ビニル','염화비닐'],['透明','투명'],['天然','천연'],['ガラス','유리'],['陶器','도자기'],['ひのき','히노키'],['杉','삼나무']];
const ko=s=>translations.reduce((v,[a,b])=>v.split(a).join(b),s).replace(/〜|～/g,'~');
function sections(comment,heading){const html=String(comment||'').replace(/<!--[\s\S]*?-->/g,'');const pattern=new RegExp('<span[^>]*>('+heading+')[^<]*</span>([\\s\\S]*?)(?=<span|$)','g');return [...html.matchAll(pattern)].map(m=>plain(m[2]).split(/Model[：:]|Size[：:]|※/)[0].trim()).filter(Boolean);}
function sizes(p,q){const lines=sections(q?.comment,'サイズ').flatMap(s=>s.split(/\r?\n/)).map(s=>s.trim()).filter(Boolean);
 const rows=[],notes=[],options=[];
 for(const line of lines){const variant=line.match(/^(Short|XXXL|XXL|XL|XS|S|M|L|FREE|Free|[SML]サイズ)[：:]\s*(.+)$/i);if(variant){const label=variant[1].replace('サイズ','');rows.push({label,value:ko(variant[2])});options.push(label);}else if(/^\d+(?:\.\d+)?cm[〜～~]\d+(?:\.\d+)?cm$/.test(line)){const value=ko(line);rows.push({label:value,value:'적용 발 사이즈'});options.push(value);}else if(!/\d+cm[：:]|着用|モデル/.test(line)){notes.push(ko(line));}}
 let optionsUnique=[...new Set(options)];if(!optionsUnique.length&&p.size){const tokens=p.size.split('/').map(s=>s.trim());if(tokens.length>1&&tokens.every(s=>/^(Short|XXXL|XXL|XL|XS|S|M|L|FREE)$/i.test(s)))optionsUnique=tokens;}
 if(p.id.startsWith('POSTCARD-')){notes.length=0;notes.push('단품 엽서 · 상세 실측 미공개');}
 return {options:optionsUnique,rows,notes:notes.length?notes:p.size&&!rows.length?[ko(p.size)]:[],material:sections(q?.comment,'素材').map(ko).join(' / '),source:q?.product_url||p.source};
}
const normalize=s=>plain(s).normalize('NFKC').toLowerCase().replace(/ × | x /g,'').replace(/legacy zombie labo|limited color|[\s\p{P}\p{S}]/gu,'');
export function enrichCatalog(goods,store,current,sources,popupHtml){
 const currentMap=new Map(current.map(p=>[p.code,p]));
 const popupLines=[...popupHtml.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/g)].map(m=>plain(m[1]).split(/¥/)[0].replace(/※.*/,'' )).filter(s=>s.length>3).map(normalize);
 const additions=new Set(['UPCH-29308','ZMY944','ZMY945','ZMY903','ZMY904','ZMY906','ZMY912','ZMY913','ZMY914','ZMY915','ZMY916','ZMY917','ZMY918','ZMY919','ZMY850','ZMY851','ZMY920','ZMY921','ZMY922','ZMY923','ZMY924','ZMY925','ZMY926','ZMY927','ZMY928','ZMY946','ZMY947','ZMY948','ZMY942','ZMY943','ZMY929','ZMY930','ZMY931','ZMY932']);
 // Individually identifiable items in the official STAND lineup image. Unnamed past goods in its footer are not assumed to be stocked here.
 const station=new Set(['ZMY785','ZMY786','ZMY840','ZMY842','ZMY881','ZMY882','ZMY853','ZMY854','ZMY855','ZMY856','ZMY858','ZMY859','ZMY860','ZMY861','ZMY862','ZMY863','ZMY864','ZMY895','ZMY896','ZMY868','ZMY943','ZMY869','ZMY870','ZMY866','ZMY867','ZMY871','ZMY872','ZMY875','ZMY876','ZMY877','ZMY878','ZMY879','ZMY873','ZMY874','ZMY884','ZMY919','ZMY880','ZMY780','ZMY922','ZMY920','ZMY921','ZMY894','ZMY885','ZMY929','ZMY930','ZMY931','ZMY932','ZMY904','ZMY912','ZMY913','ZMY890','ZMY918','ZMY889','ZMY892','ZMY893','ZMY923','POSTCARD-0','POSTCARD-1','POSTCARD-2']);
 for(const p of goods){const q=store.get(p.code);p.specs=sizes(p,q);p.size=p.specs.options.length?p.specs.options.join(' / '):p.specs.notes.join(' / ');
  p.additionalRelease=additions.has(p.code)||p.scope==='명장 공예';
  const purchase={method:'일반 판매',channels:[],restrictions:[],sources:[]};const channel=(key,label,detail,url)=>{purchase.channels.push({key,label,detail,url});if(!purchase.sources.includes(url))purchase.sources.push(url);};
  if(p.scope==='명장 공예'){const stock=['ZMY907','ZMY908'].includes(p.code)?40:100;purchase.method='전시 후 추첨 판매';purchase.lotteryStock=stock;purchase.restrictions.push(`추첨 판매 ${stock}개 한정`,'추첨 접수 일정·방법·신청 링크 미공개 (10/3 확인)','구매 수량은 희망 수량이며 당첨·구매를 보장하지 않습니다.');channel('exhibit','나라 팝업·공연장 전시','일반 물판·사전 수령 주문 대상이 아닙니다. 전시 후 추첨 판매하며 상세 전시 장소는 추가 공지를 확인하세요.',sources.craft);p.specs.notes=['도자기'===p.category?'도자기 실측 미공개':'상세 실측 미공개'];}
  else {if(currentMap.has(p.code)&&p.scope!=='팝업 한정색'){channel('venue','공연장 물판','10/10·11 각일 10:00~종연 후. 헤이조궁터 祭Area, 공연 티켓 없이 구매 가능.',sources.current);channel('pickup','사전 주문 → 공연장 수령','회원 우선 10/3 20:00~10/4 19:59, 일반 10/4 20:00~10/7 23:59. 10/10·11 선택한 시간에 祭Area 수령. 일본 현지 시각.',sources.current);}
   const names=[p.name,currentMap.get(p.code)?.name].filter(Boolean).map(normalize);const popupConfirmed=['팝업 한정색','팝업 구상품','나라 팝업 단품'].includes(p.scope)||popupLines.some(s=>names.some(n=>s===n||s.includes(n)&&n.length>16));
   if(popupConfirmed)channel('popup','나라 팝업','나라현 컨벤션센터 2F 덴표 갤러리. 10/3~12, 11:00~19:00 (10/10·11 ~21:00). 10/3·4·10·11 종일, 10/12 15시까지 입장 예약 필요.',sources.popup);
   if(station.has(p.id)){channel('station','야마토사이다이지역 STAND','공식 라인업 이미지에서 확인한 품목. 긴테쓰 야마토사이다이지역 개찰구 안 Time’s Place 17번 부스. 10/3~11, 10:00~20:00 (10/10·11 ~17:30). 재고에 따라 판매 품목 변경 가능.',sources.popup);purchase.sources.push('https://d12oj0i0pu43cb.cloudfront.net/zutomayo.net/share/bunkadenrai/stand_lineup.jpg');if(['ZMY890','ZMY918','ZMY889','ZMY892','ZMY893'].includes(p.code))purchase.restrictions.push('역 STAND 라인업 표기: 1인 1개');}
   if(p.scope==='팝업 한정색')purchase.restrictions.push('팝업 한정색 · 공연장 판매 제외');
   if(['ZMY927','ZMY928','ZMY946','ZMY947','ZMY948'].includes(p.code))channel('drink','공연장 음료 부스「造酒司」',['ZMY927','ZMY928'].includes(p.code)?'컵·병으로도 판매. 컵 가격은 상품 병 가격과 다릅니다.':'컵·캔으로도 판매. 컵 가격은 상품 캔 가격과 다릅니다.',sources.craft);
   if(['ZMY927','ZMY928','ZMY946','ZMY947'].includes(p.code))purchase.restrictions.push('주류: 만 20세 이상 · 주문·수령·구매 시 나이 확인');
   if(p.code==='ZMY906')purchase.restrictions.push('나라 팝업에서는 10/8부터 판매 예정');
   if(p.code==='ZMY944'){purchase.method='랜덤 가챠';purchase.restrictions.push('나라 팝업에서는 10/10부터 판매 예정','추첨 응모 상품이 아닌 랜덤 캡슐 굿즈 · 현장 500엔 동전');}
   const limit=String(q?.comment||'').match(/お(?:1|１)人様\s*(\d+)点/);if(limit)purchase.restrictions.push(`공식 상품 상세 주문 제한: 1인 ${limit[1]}개 (현장 제한은 판매처 안내 확인)`);
   if(Number(currentMap.get(p.code)?.premium)===1||p.code==='UPCH-29308')purchase.restrictions.push('ZUTOMAYO PREMIUM 회원 한정 · 현장 MY PAGE 회원 확인');
   if(p.code==='UPCH-29308'){purchase.restrictions.push('1인 1개 · 사전 수령 ¥3,565 / 공연장 직접 판매 ¥3,600 · 구매표 합계는 ¥3,565 기준');purchase.sources.push('https://zutomayo.net/news/652/');}
   if(!purchase.channels.length)purchase.restrictions.push('이 행사에서의 개별 판매처는 공식 목록을 확인하세요.');
  }
  p.purchase=purchase;
 }
 return ['나라 칠기','요시노 와시 조명','잇토보리 목각','목공예품','도자기','부채'].map(ko=>({ko,status:'추가 협업 예고 · 상품명·사진·가격·수량 미공개',source:sources.craft}));
}
