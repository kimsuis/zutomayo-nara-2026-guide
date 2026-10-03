# 즛토마요 나라콘 2026 — 文禍伝雷 관람 가이드

**특별공연제 LEGACY ZOMBIE LABO「文禍伝雷」奈良・平城京**

**[📱 휴대폰에서 사이트 열기](https://kimsuis.github.io/zutomayo-nara-2026-guide/)** · [GitHub 저장소](https://github.com/kimsuis/zutomayo-nara-2026-guide)

사이트 주소를 즐겨찾기하면 PC의 로컬 서버를 켜지 않아도 접속할 수 있습니다. 구매 수량과 메모는 각 기기의 브라우저에 저장되며, 기기 간 이동은 **내 구매표 → 백업 저장 / 백업 불러오기**를 사용하세요.

## 사진 구매표와 휴대폰용 HTML

| 파일 | 용도 | 기능 |
|---|---|---|
| **[index.html](index.html)** | **휴대폰용 굿즈·공연 가이드** | 한국어 이름·원문·공식 사진·상품 링크, 검색·판매 구분 필터, 수량 입력·자동 합계·구매 완료·메모·기기 저장 |
| **[GOODS_CHECKLIST.md](GOODS_CHECKLIST.md)** | **깃허브에서 보는 사진 구매표** | 색상별 234개 항목, 수량·구매 완료·사이즈/메모 빈칸. MD 파일을 편집해 기입 |
| 이 README | 전체 관람 정보 | 일정·교통·액티비티·푸드·굿즈 구매법·나라 팝업·스탬프 |

HTML의 **내 구매표 → 수량 담긴 MD 저장**을 누르면 입력한 수량과 메모를 담은 Markdown 파일을 내려받습니다. **백업 저장 / 백업 불러오기**로 다른 기기에 구매표를 옮길 수 있습니다. 입력 내용은 같은 브라우저에 저장되며, 계정·기기 간 자동 동기화는 제공하지 않습니다. 사이즈가 여러 개면 메모에 `M 1개 / L 2개`처럼 기입하세요. 사진은 공식 사이트에서 불러오므로 인터넷 연결이 필요합니다.

**굿즈 목록을 별도로 구분했습니다.** 기본 화면은 **이번 공연 굿즈 140개 항목**이며, **이전 투어·기존 굿즈 59개 항목**과 **카드·음반 35개 항목**은 각 목록 버튼에서 볼 수 있습니다. 이번 공연에는 공식 文禍伝雷 목록·나라 협업·한정색·명장 공예를 포함하고, 이전 목록은 공식 팝업의 구상품 목록을 기준으로 합니다. 카드·음반 목록에는 신규 카드 슬리브와 기존 카드·음반이 함께 들어 있습니다. 수량과 메모는 목록을 바꿔도 유지됩니다. 구분 근거: [공식 나라 팝업 판매 목록](https://zutomayo.net/mart_nara202610/), [공식 현장 수령 상품 안내](https://zutomayo.net/bunka_denrai_Item_netorder/).

<details>
<summary>깃허브에 올리고 휴대폰에서 HTML로 보는 방법</summary>

1. `index.html`, `README.md`, `GOODS_CHECKLIST.md`, `.nojekyll`을 저장소 루트에 올립니다. HTML에는 스타일·기능·상품 데이터·공연 가이드가 포함되어 별도 빌드 없이 열립니다.
2. 저장소 **Settings → Pages → Build and deployment → Source**에서 **Deploy from a branch**를 선택합니다.
3. 올린 브랜치(예: `main`)와 **`/(root)`**를 선택하고 **Save**를 누릅니다.
4. 배포가 완료되면 Pages에 표시되는 사이트 주소를 휴대폰 브라우저에서 엽니다. 저장소에서 HTML 파일을 클릭하면 코드가 보이므로, 실제 사용은 Pages의 사이트 주소를 이용하세요.

설정 기준: [GitHub 공식 Pages 게시 소스 안내](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), [진입 파일·정적 HTML 안내](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).

`assets/`는 HTML 제작 원본, `data/goods.json`은 정리한 상품 데이터, `scripts/build-page.mjs`는 재생성 스크립트입니다. 문서·상품 데이터를 수정한 뒤 HTML도 갱신하려면 Node.js와 `marked`가 설치된 `node_modules` 경로를 `NODE_PATH`로 지정해 `node scripts/build-page.mjs`를 실행하세요. `scripts/build-catalog.mjs`는 조사용 원본 스냅샷이 있어야 실행되는 내부 정리 도구입니다. `research/`와 `.preview/`는 업로드 대상에서 제외됩니다.

</details>

> **확인 기준: 2026년 10월 3일 · 공식 10월 2일 갱신 공지 반영**<br>
> 한국어 비공식 정리입니다. 시간은 모두 일본 현지 시간이며 **한국과 시차가 없습니다**. 가격은 엔화이며, 상품 가격은 세금 포함입니다. 재고·예약 잔여석은 실시간 정보가 아닙니다.<br>
> 이 문서에서 **액티비티**는 공식 `workshop & mini game`을 뜻합니다. 원문 상품명은 현장에서 찾기 쉽게 유지했습니다.

## 목차

- [먼저 확인할 일정](#먼저-확인할-일정)
- [공연과 티켓](#공연과-티켓)
- [교통과 귀가](#교통과-귀가)
- [마츠리 에어리어](#마츠리-에어리어)
- [액티비티 — 체험과 미니게임](#액티비티--체험과-미니게임)
- [무료 사이드스테이지](#무료-사이드스테이지)
- [푸드와 드링크](#푸드와-드링크)
- [굿즈 구매 방법](#굿즈-구매-방법)
- [굿즈 가격표](#굿즈-가격표)
- [나라 팝업스토어와 역 매점](#나라-팝업스토어와-역-매점)
- [스탬프 랠리와 전시](#스탬프-랠리와-전시)
- [당일 준비 체크리스트](#당일-준비-체크리스트)
- [추가 확인이 필요한 정보](#추가-확인이-필요한-정보)
- [공식 링크 모음](#공식-링크-모음)

## 먼저 확인할 일정

| 날짜 | 할 일 / 행사 | 시간·마감 | 확인할 점 |
|---|---|---|---|
| **10/2(금)~10/4(일)** | **체험·미니게임 사전 추첨** | **10/4 23:59 마감** | 선착순 아님 · [신청](https://w.pia.jp/t/zutomayo-lzl-bunkadenrai/) |
| **10/3(토)~10/4(일)** | **굿즈 현장 수령 사전 주문 — PREMIUM 우선** | **10/3 20:00~10/4 19:59** | 공연 당일 받을 날짜·시간 선택 |
| **10/4(일)~10/7(수)** | **굿즈 현장 수령 사전 주문 — 일반** | **10/4 20:00~10/7 23:59** | 상품·수령 시간대별 한정 수량 |
| ~10/5(월) | 왕복 투어버스 신청 | 23:59 마감 | 선착순, 만석이면 조기 종료 |
| 10/3(토)~10/12(월·공휴일) | ZUTOMAYO MART 나라 출점 | 날짜별 운영시간 아래 참고 | 공연일은 종일 입장 예약제 |
| 10/3(토)~10/11(일) | ZUTOMAYO STAND 역 매점 | 공연일 10:00~17:30 | 소품 중심 판매 |
| 10/9(금)~10/11(일) | 평성경 가을 산가쿠 페스타 | 행사별 별도 안내 | 마츠리 에어리어와 장소 구분 |
| **10/10(토)·10/11(일)** | **나라 공연 + 마츠리 에어리어** | **공연 입장 15:30 / 시작 17:30** | 두 날짜 동일 |
| 10/1(목)~10/31(토) | 나라 시내 회유 스탬프 랠리 | 각 시설 운영시간 | 공연장 8개 스탬프와 별도 행사 |

출처: [체험 안내](https://zutomayo.net/special/bunka-denrai/matsuri-area/), [굿즈 주문 안내](https://zutomayo.net/bunka_denrai_Item_netorder/), [버스 공지](https://zutomayo.net/news/645/), [팝업 안내](https://zutomayo.net/mart_nara202610/), [시내 스탬프 공지](https://zutomayo.net/news/651/).

## 공연과 티켓

### 공연 기본 정보

| 항목 | 내용 |
|---|---|
| 날짜 | **2026/10/10(토), 10/11(일)** |
| 공연장 | **平城宮跡歴史公園 中央区朝堂院 特設野外会場** — 헤이조궁터 역사공원 중앙구 조당원 특별 야외 공연장 |
| 주소 | 奈良県奈良市佐紀町528-1 / 〒630-8003 |
| 공연장 입장 / 시작 | **15:30 / 17:30** |
| 공연 길이 | 약 2시간 예정, 길어도 약 2시간 15분 구성 계획 |
| 종료 예상 | **19:30~19:45경** — 시작 시각과 예정 길이로 계산한 예상이며 확정 종료 시각 아님 |
| 날씨 | 비가 와도 진행, 악천후 시 취소 |
| 관람 방식 | 기본 전 구역 스탠딩, 블록·정리번호별 입장 |
| 세트리스트 | 아레나 투어 ZOMBIE CRAB LABO와 곡 구성·연출이 다름. 양일 기본 세트리스트는 동일 예정 |
| 판매 상태 | 공식 페이지 기준 **모든 권종 SOLD OUT** |

출처: [공연 공식 페이지](https://zutomayo.net/bunka-denrai/).

### 구역별 차이

| 구역 | 1일 가격 | 특징 | 입장·특전 |
|---|---:|---|---|
| Standard Area | ¥12,000 | 블록 지정 스탠딩 | 날짜별 디자인의 러버밴드 · 미취학 아동 입장 불가 |
| Premium Area | Standard에 **+¥3,000** | 합계 ¥15,000, 업그레이드 구역 | Standard와 같은 러버밴드 · 회원 인증·동행자 동시 입장 |
| 후방 Free Area | ¥6,500 | 후방 자유 관람 구역 | 지정 범위에서 돗자리 사용 가능 · 보호자 동반 미취학 아동 무료 |
| 후방 Free Area 나라현민 할인 | ¥5,500 | 신청자가 나라현 거주자여야 함 | 신청자 신분증 확인 · 분배 불가·동행자 동시 입장 |

**`Free Area`는 무료 공연 구역이라는 뜻이 아닙니다.** 무료 입장인 곳은 별도 **祭Area(마츠리 에어리어)**입니다.

Premium은 최초 PREMIUM 선행 구매자 대상 업그레이드였으며 신청은 종료됐습니다. 2장 입장은 회원 1명 이상, 3~4장은 회원 2명 이상이 필요하고 티켓 분배 없이 함께 입장합니다. 출처: [공연·티켓 안내](https://zutomayo.net/bunka-denrai/), [업그레이드 공지](https://zutomayo.net/news/644/).

### 공식 리세일

| 구매처 / 대상 | 10/10 공연 리세일 기간 | 10/11 공연 리세일 기간 | 링크 |
|---|---|---|---|
| Premium Upgrade 티켓 | 10/3 10:00~10/9 23:59 | 10/4 10:00~10/10 23:59 | [회원용 공식 리세일](https://zutomayo.net/bunka_denrai__resale/) |
| 티켓피아 — 위 대상 이외 | 10/3 10:00~10/9 23:59 | 10/4 10:00~10/10 23:59 | [티켓피아](https://w.pia.jp/t/zutomayo26rs/) |
| 로손티켓 | 10/3 12:00~10/6 23:59 | 10/4 12:00~10/7 23:59 | [로손티켓](https://l-tike.com/zutomayo/) |
| 이플러스 | 10/3 10:00~10/7 11:59 | 10/4 10:00~10/8 11:59 | [이플러스](https://eplus.jp/zutomayo/) |

- **일본 국내 휴대전화 번호가 없으면 공식 리세일 이용 불가**라고 공지되어 있습니다. 기존 해외 거주자 선행 접수와 조건이 다릅니다.
- PREMIUM 선행으로 구매한 Standard도 일반인에게 리세일 가능. Premium 구역은 회원끼리만 가능.
- 출품·성립 여부와 구매 가능 수량은 각 사이트에서 확인해야 합니다. 기간 종료·미성립 시 환불 불가.

출처: [10/2 공식 리세일 공지](https://zutomayo.net/news/654/).

### 현장 이용 규칙

| 항목 | 안내 |
|---|---|
| 재입장 | 개연 전 자기 블록에서 마츠리 에어리어·후방 음료/화장실로 이동 후 재입장 가능. 티켓 재확인·대기시간 고려 |
| 공연 중 이동 | Standard·Premium에서도 후방 음료 코너·화장실로 이동 가능. 연출에 따라 이동·재입장 제한 가능 |
| 돗자리 | 후방 Free Area의 지정된 뒤쪽 범위에서만 가능. 1인 약 70cm 사방, 공간 한정 |
| 접이식 의자 | 반입·사용 자제 요청 |
| 유모차 | 후방 Free Area에서 반입·사용 가능. 통로·주변 관람객 배려 |
| 우산 | **회장 내와 이동 중 사용 금지**. 우비·판초 준비 |
| 짐 보관 | 유료 클로크 **10:00~21:30 / 1봉투 ¥1,000 / 약 45L까지** |
| 클로크 주의 | 맡긴 뒤 중간 출납 불가, 귀중품 불가, 당일 회수, 수량 한정 |
| 화장실 | 특별 화장실 설치 |
| 퇴장 | 공연 종료 후 규제 퇴장 실시 |
| 공원 보호 | 쓰레기 투기·흡연·화기 사용·식물 훼손 금지 |
| 촬영·녹음 | 기본 가이드라인을 확인하고 특별공연의 현장 허용 안내를 따를 것. 포토스팟과 본공연 촬영 조건은 구분 |

출처: [공연별 주의사항](https://zutomayo.net/bunka-denrai/), [공통 라이브 가이드라인](https://zutomayo.net/live_guideline/).

## 교통과 귀가

### 역에서 걸어가기

| 출발역 | 공식 도보 안내 | 이용 시 참고 |
|---|---|---|
| 近鉄新大宮駅 — 긴테쓰 신오미야역 | 약 15분 | 공연장 공식 접근역 |
| 近鉄大和西大寺駅 — 긴테쓰 야마토사이다이지역 | 약 15분 | ZUTOMAYO STAND 매점 위치 |
| JR奈良駅 — JR 나라역 | 약 35분 | 시내 스탬프 장소와 함께 동선 검토 가능 |

**회장 인근 관람객 주차장 없음. 대중교통 이용 필수 안내입니다.** 위 시간은 공식 기준이며 혼잡·입장 게이트까지 이동 여유를 별도로 두세요. 출처: [공식 교통 안내](https://zutomayo.net/bunka-denrai/).

### 한큐교통사 왕복 투어버스

| 출발지 | 출발 시각 | 왕복 1인 가격 |
|---|---|---:|
| JR 신오사카역 | 12:00 | ¥5,800 |
| 우메다 — 우메다 예술극장 앞 | 12:00 | ¥5,800 |
| 덴노지 — 덴시바 남쪽 | 12:00 | ¥5,800 |
| 산노미야 — 히가시유엔치 → JR 신코베역 | 11:00 → 11:30 | ¥7,800 |
| 시조오미야 → JR 교토역 하치조 출구 | 11:00 → 11:30 | ¥5,800 |
| JR 나고야역 | 10:30 | ¥11,800 |

| 항목 | 내용 |
|---|---|
| 접수 마감 | **10/5(월) 23:59**, 선착순·만석 시 종료 |
| 회장 도착 / 출발 | 전 노선 **13:00경 도착 / 20:00경 출발** 예정 |
| 공연 티켓 | **버스 요금에 포함되지 않음** |
| 신청 | 온라인만 가능, 전화·점포 판매·당일권 없음 |
| 어린이 | 어른과 같은 요금 |
| 탑승 | 동행자 포함 본인 확인, 신청 완료 이메일 제시 |
| 귀가 주의 | 당일 왕복권. 종연 1시간이 지나도 미탑승이면 복편 포기로 처리 |
| 문의 | 한큐교통사 06-4795-5943 / 평일 10:00~17:00 |

공식은 **종연 후 회장→주변 역 버스도 별도 예정**이라고 안내하지만, 이 문서 확인 시점에는 요금·승차장·상세 운행표를 확정해 적을 수 없습니다. [버스 공지 및 신청 연결](https://zutomayo.net/news/645/).

## 마츠리 에어리어

| 항목 | 내용 |
|---|---|
| 날짜 | 10/10(토)·10/11(일) |
| 장소 | **佐伯門東側広場** — 사에키문 동쪽 광장, 라이브 회장 서쪽 |
| 입장 | **무료 / 공연 티켓 없이 이용 가능** |
| 입장 시작 | 9:30 예정 |
| 기본 운영 | 10:00~17:30 예정 |
| 일부 연장 | 굿즈·일부 콘텐츠는 21:30 종료 예정. 부스별 운영시간 다름 |
| 구성 | 체험 5종, 미니게임 2종, 20개 이상의 푸드점, 사이드스테이지, 굿즈·가챠, 포토스팟·스탬프, 카드 체험 |

출처: [마츠리 공식 페이지](https://zutomayo.net/special/bunka-denrai/matsuri-area/).

<details>
<summary>공식 회장 지도 보기</summary>

**전체 회장 지도 — 10/2 갱신본**

![전체 회장 지도](https://zutomayo.net/themes/zutomayo/_assets/img/special/bunkadenrai/map_heijyoukyo_v3.jpg)

**마츠리 에어리어 지도**

![마츠리 에어리어 지도](https://zutomayo.net/themes/zutomayo/_assets/img/special/bunkadenrai/maturi/map_heijyoukyo_v2.jpg?26093001=)

공식 외부 이미지 참조입니다. 배치 변경 시 [공연 페이지](https://zutomayo.net/bunka-denrai/)와 [마츠리 페이지](https://zutomayo.net/special/bunka-denrai/matsuri-area/)의 최신 지도를 확인하세요.

</details>

## 액티비티 — 체험과 미니게임

### 전체 비교표

| 구분 | 체험 / 원문명 | 운영·협업 | 참가비 | 소요시간 | 무엇을 하는지 |
|---|---|---|---:|---|---|
| 체험 | 목간 만들기 / 奈文研と想い書き 木簡づくり | 나라문화재연구소 | ¥1,500 | 약 10분 | 목간에 글쓰기, 가져가기 또는 무대 쌀가마니 타워 전시 선택 |
| 체험 | 흙 크레용·진흙 경단 / コズミックどろ団子／土クレヨン | 토양학자 藤井一至 | 성인 ¥1,000 / 초등학생 이하 ¥500 | 약 30분 | 흙 크레용 만들기와 진흙 경단 연마 중 선택 |
| 체험 | 미니 링노트 / 活版伝雷 ミニリングノートづくり | 活版工房 丹 | ¥800 | 약 10분 | 표지 10종·링 색 선택, 직원이 노트 완성 |
| 체험 | 먹 만들기 / 奈良墨職人から学ぶ おはじき墨づくり | 錦光園 | ¥2,500 | 약 13분 | 생먹 반죽과 문양 각인 |
| 체험 | 하리코 우니구리 / オリジナル はりこうにぐりづくり | Good Job!センター香芝 | ¥2,200 | 약 30분 | 종이 인형 채색, 사진 해시태그 콘테스트도 예정 |
| 게임 | 사격 / 射的場「ミラーシューター」 | いち屋 | 성인 ¥900 / 초등학생 이하 ¥500 | 약 2분 | 표적 사격. 성적에 따라 인형·타월·즈토카 등 경품 가능 |
| 게임 | 샌들 탁구 / 熱血！馴れ合い サンダルサーブ卓球部 | 川東履物商店(HEP) | 성인 ¥1,000 / 초등학생 이하 ¥500 | 약 5분 | 샌들로 랠리, 참가자에게 오리지널 탁구공 지급 |

목간 체험은 **10/9(금) 10:00~17:00**에도 **朱雀門ひろば・天平みつき館**에서 별도 실시 안내가 있습니다. 공연일 체험의 집합 시간대는 참가권에서 확인하세요. 출처: [체험·게임 공식 안내](https://zutomayo.net/special/bunka-denrai/matsuri-area/).

### 참가권 구매와 입장

| 방법 / 조건 | 안내 |
|---|---|
| **사전 추첨** | **10/2~10/4 23:59**, [티켓피아 신청](https://w.pia.jp/t/zutomayo-lzl-bunkadenrai/) |
| 선택 내용 | 체험·게임 종류, 날짜, 시간대 선택. 시간대별 추첨 |
| 신청 장수 | 동일 체험·게임 1회 신청 최대 **2장**, 다른 체험에 복수 신청 가능 |
| 티켓 형식 | **종이 티켓**, 편의점에서 사전 발권 필요 |
| **당일 판매** | **9:30~매진까지**, 마츠리 내 workshop & mini game 종합접수 |
| 당일 구매 장수 | 같은 체험·게임 1회 계산 최대 **2장** — 10/2 수정된 수량 |
| 인원 | 체험자 1명당 참가권 1장. 미취학 아동은 보호자 동반, 보호자도 체험하면 별도 참가권 필요 |
| 집합 | 티켓의 **집합 시각** 준수. 실제 체험 시작 시각과 다를 수 있음 |
| 지각·분실 | 참가 불가 가능, 자기 사유 지각·불참 환불 불가, 티켓 재발행 불가 |
| 공연 티켓 | 없어도 참가 가능 |
| 날씨 | 날씨에 따라 체험·게임 취소 가능 |

사전 추첨 결과 발표·결제·발권 기한, 시간대별 잔여 수량은 [접수 사이트](https://w.pia.jp/t/zutomayo-lzl-bunkadenrai/)의 안내를 확인하세요. 접수 페이지 상세를 확인하지 못한 항목은 임의로 적지 않았습니다.

### 무료 체험·전시

| 콘텐츠 | 장소·내용 | 비용 / 예약 |
|---|---|---|
| YAMAHA 名巧音楽館 奈良平城宮出張所 | 협업 디자인의 가쿠비와·Pacifica 기타 및 악기 전시, 비와 자동 연주 | 무료 / 사전 추첨 없음 |
| ZUTOMAYO CARD 배틀 코너 | **朱雀門ひろば・天平みつき館**. 초보 설명회·자유 대전·TRI-WIN BATTLE | 무료 / 사전 추첨 없음 |
| 카드 코너 특전 | 초보 설명회 참가 한정 카드, 3승 시 낮 니라짱 캔배지. 대여 덱 준비 | 자세한 운영은 현장 확인 |

출처: [마츠리 안내](https://zutomayo.net/special/bunka-denrai/matsuri-area/), [야마하 전시 발표](https://www.yamaha.com/ja/newsroom/topics/2026/26092901/).

## 무료 사이드스테이지

**side stage「昼ノ宴」— 관람 무료.** 날짜별 출연진이 다릅니다.

| 시간 | 10/10(토) DAY 1 — MC 大抜卓人 | 10/11(일) DAY 2 — MC 樋口大喜 |
|---|---|---|
| 10:30~10:50 | 街蜥蜴塾 | SootyWest |
| 11:10~11:30 | 나라문화재연구소 연구원의 헤이조궁터 토크 | 나라문화재연구소 연구원의 헤이조궁터 토크 |
| 11:50~12:10 | A-SIDE OK | Open Reel Ensemble 回回指南処 |
| 12:30~12:50 | 桜雲-AUN- | DJ 爆裂 |
| 13:10~13:30 | 「せんとくんなら知っている」센토군 & 우니구리군 | 폼폼푸린 스페셜 스테이지「ぱぴぷぺPom！」 |
| 13:50~14:10 | 鈴木ジェロニモ | 「せんとくんなら知っている」센토군 & 우니구리군 |
| 14:30~14:50 | 藤井一至 토크「土は、奈良の何を知っている？」 | DanceSport Heritage Japan (DSHJ) |
| 15:00~15:30 | 해당 시간 공연 공지 없음 | 드럼 서클 |

출처: [공식 사이드스테이지 시간표](https://zutomayo.net/special/bunka-denrai/matsuri-area/).

## 푸드와 드링크

공식에 가격이 공개된 메뉴를 중심으로 정리했습니다. 모든 메뉴·가격·판매 여부는 현장에서 변경될 수 있습니다. **먹는 부스의 음식 가격과 굿즈로 파는 포장 식품 가격을 구분하세요.**

| 부스 | 공개 메뉴 / 가격 |
|---|---|
| 健一自然農園 & 本家菊屋 | 城之口餅 ¥500 · 여름 감귤 티소다 ¥800 · 夜明けの抹茶ソーダ ¥1,000 |
| ほうせき箱 & 平宗 | よもすがら甘葛風氷 ¥600 · 暗く黒く ¥500 · 柿の葉ずし ¥1,100 |
| 中本酒造店 | 長屋王 컵 ¥700 **[주류]** |
| 今西清兵衛商店 | 春鹿 컵 ¥800 **[주류]** |
| サンリオカフェワゴン | Sanrio Game호 한정 캐릭터 크레이프 ¥800 · 헬로키티 구운 도넛 6종 각 ¥350 |
| 寧楽発酵 | 百鬼夜行 発酵小宴 ¥1,200 · 遣唐使の発酵飯 ¥1,200 · 발효 음료 2종 각 ¥700 |
| おむすび番旬 | 차밥 주먹밥과 밤 ¥500 · 소금 주먹밥 ¥350 · 나라즈케 주먹밥 ¥400 |
| 菩薩咖喱 | 핑크페퍼 / 진저 카레 각 ¥1,500 — 공식 메뉴명은 スパイスカリーキット, 설명은 현장 한 접시 제공 |
| FARMENTRY & THERAPYNIA | 쑥 세종 / サンダーコンパーニャ IPA 각 캔 ¥1,000·컵 ¥800 **[주류]** · 드라이 진저에일 캔 ¥800·컵 ¥700 |
| 古都華のしずく | 딸기 우유 ¥800 · 딸기 아이스크림 ¥400 · 딸기 판나코타 ¥700 |
| てのべたかだや | 미와 소면 호두 흰 국물 / 생유바 와사비 각 ¥900 |
| 小町 | 버터샌드 5종 각 ¥450 · 3개 BOX ¥1,600 · 5개 BOX ¥2,600 |
| TEGAIMON CAFE | シャイな夜ふかしBlue ¥800 · 翡翠桃源郷 ¥800 · 虹色のひみつ育って ¥900 |
| 猪天餃子 | 文禍伝雷 만두 프랑크 1개 ¥800 · 만두도그 紅色(살사) ¥1,500 |
| Re;BU10 | 6種の沼ポテト ¥600 · TOKOSHIO 소금 / 스파이스 백탕 키트 각 ¥1,000 |
| うまいもん空海 | 浜松ずと餃子 — 가격 미공개 |
| LOCO TACOS | BIG 크런치 타코 ¥700 · BIG 저크 소시지 도그 ¥900 |
| ヤマトポーク天理ラーメン | 야마토포크 덴리 라멘 ¥1,200 |
| レストラン鹿野園 | 센토군 인형빵 ¥500 · 月見焼き ¥500 |
| 宮川町水簾 | だし巻き、挟んどいてよ ¥700 |
| 八食堂 | 月見の宴 — 돼지삼겹 덮밥·온천달걀·나라즈케 타르타르, 가격 미공개 |

출처: [푸드 공식 목록](https://zutomayo.net/special/bunka-denrai/matsuri-area/). 주류 구매·수령은 **만 20세 이상**, 연령 확인 가능한 신분증 지참. 진저에일은 소프트드링크이며, 푸드 페이지와 굿즈 페이지의 제조사 표기에 차이가 있어 위 표는 음료명으로 구분했습니다.

## 굿즈 구매 방법

### 어디서 어떻게 사는지

| 방식 | 기간 / 시간 | 장소 | 공연 티켓 | 주의 |
|---|---|---|---|---|
| 현장 수령 사전 주문 | 회원 10/3 20:00~10/4 19:59 / 일반 10/4 20:00~10/7 23:59 | [MART for LIVE](https://zutomayo.net/martforlive/) 주문 → 공연 당일 祭Area 수령 | 없어도 가능 | **배송 주문 아님**, 수령 날짜·시간 지정 |
| 회장 당일 구매 | 10/10·10/11 **10:00~종연 후 예정** | 祭Area 굿즈 판매소 | 없어도 가능 | 사전 주문 수령 줄과 다른 줄 |
| DENRAI 현장 가챠 | 공연 양일 10:00~종연 후 예정 | 가챠 부스 | 없어도 가능 | 1회 ¥500, **500엔 동전만 사용** |
| 나라 팝업 MART | 10/3~10/12 | 나라현 컨벤션센터 | 불필요 | 날짜별 입장 예약 필요, Limited Color 취급 |
| 역 STAND | 10/3~10/11 | 야마토사이다이지역 | 불필요 | 소품 일부만 판매, 매점 독점 상품 없음 |
| 7~8월 배송 프리오더 | **접수 종료** | 온라인 | 불필요 | 해외 배송은 공연 전 수령이 어려울 수 있다고 안내 |
| 공연 후 재고 통판 | 예정, 상세 미공개 | ZUTOMAYO MART | 불필요 | 모든 상품 재판매 보장 아님 |

출처: [현장 수령·판매](https://zutomayo.net/bunka_denrai_Item_netorder/), [팝업·STAND](https://zutomayo.net/mart_nara202610/), [기존 프리오더·재고 통판](https://zutomayo.net/bunka_denrai_Item_order/).

### 사전 주문·결제·수령 핵심

| 항목 | 안내 |
|---|---|
| 주문·수령 | 날짜별 따로 결제. 선택한 시간에 수령 **QR코드** 제시 |
| 수령 운영 | 공연 양일 10:00~종연 후 예정, 지정 시간 외 수령 불가 안내 |
| 온라인 결제 | 신용카드 / 편의점 선결제 / Paidy. 편의점 선결제는 마감 2일 전까지만 이용 |
| 주문 수수료 | **주문 1건당 ¥220** |
| 변경 | 주문 확정 후 취소·수령일 변경 불가 |
| 재고 | 사전 주문과 현장 판매 물량 별도 확보. 한쪽만 매진 가능 |
| 수량 제한 | 상품별 주문 페이지 확인. 추가 주문 가능 여부도 해당 안내 확인 |
| 수령 확인 | 상품·수량·불량 여부를 현장에서 확인, 불량 교환은 당일 수령 회장에서만 대응 |
| PREMIUM 상품 | 현장 구매 시 MY PAGE 회원 확인 |
| 주류 | 만 20세 이상, 수령·구매 시 신분증으로 연령 확인 |
| 현장 결제 | 현금 / 카드 / 각종 전자머니. 날씨 등으로 현금만 받는 경우 대비 |
| 전자머니 | 회장에서 충전 불가, 사전 충전 |

부득이한 미수령은 10월 하순 이후 등록 주소로 배송 전환, 배송비 ¥850 및 경우에 따라 착불 수수료 ¥330을 공지하고 있습니다. 해외 주소 배송 가능 여부를 이 안내만으로 단정할 수 없으므로 **현장 수령을 전제로 주문**하세요. 출처: [주문 유의사항](https://zutomayo.net/bunka_denrai_Item_netorder/).

### 가챠

| 항목 | 내용 |
|---|---|
| 가격 | DENRAI Gacha 1회 ¥500 |
| 현장 | 500엔 동전으로 직접 돌림, 현장 환전 가능 안내 |
| 사전 주문 | 직원이 주문 개수만큼 랜덤 캡슐 준비. 가챠 기계 이용·캡슐 변경 불가 |
| 당첨 경품 | **구매 당일 안에** 직원에게 교환 요청, 공연일 외 교환 불가 |
| 팝업 MART | DENRAI Gacha는 **10/10부터 판매 예정** |
| 구 가챠 | 팝업에 ZOMCRA Gacha ¥500도 별도 목록에 있음 |

출처: [회장 가챠 안내](https://zutomayo.net/bunka_denrai_Item_netorder/), [팝업 판매 목록](https://zutomayo.net/mart_nara202610/).

## 굿즈 가격표

**색상·버전은 같은 가격끼리 묶었습니다.** 아래는 나라 공연 관련 공개 상품을 중심으로 정리한 가격표입니다. 상품이 목록에 있어도 모든 판매처에서 취급하는 것은 아니며, 사이즈·수량 제한·회원 한정 여부는 주문 페이지를 확인하세요. `★` 프리오더 회원 수주 표시는 PREMIUM 전용 상품 표시와 다릅니다.

### 의류

팝업의 **Limited Color는 공연장 물판에서 취급하지 않습니다**. 한정 색상 표시는 최신 팝업 목록을 기준으로 했습니다. Henley Neck의 한정 색상은 과거 프리오더 목록과 달라 구매 페이지 재확인이 필요합니다.

| 상품 | 가격 | 일반 색상 | Limited Color — 회장 판매 제외 |
|---|---:|---|---|
| BUNKADENRAI Cropped Shirt | ¥14,800 | Charcoal / Kusumi Purple | Pistachio Green |
| BUNKADENRAI KV Tee | ¥5,900 | Black / White | Yomogi |
| Microwave Tee | ¥5,900 | Deep Purple / Purple | Cream White |
| Midnight Forever Tee | ¥5,900 | Black / White | Blue Gray |
| CREAM DAINAGON Tee | ¥5,900 | White / Dainagon Pink | — |
| LEGACY ZOMBIE LABO Fake Layered Henley Neck Shirt | ¥9,500 | Black / Nerd Blue | **Ice Blue — 최신 팝업 표기 기준** |
| future,or the past? Long Tee | ¥7,500 | Brown × Light Blue / Brown × Beige | Red × Beige |
| LEGACY ZOMBIE LABO Sweatshirt | ¥9,500 | Gray / Navy Blue | Pink Purple |
| CULTURAL REVIVAL Pullover Nylon Shirt | ¥9,800 | Charcoal / Blue Gray | Gray Pink |
| Medianoche Plaid Shirt | ¥11,200 | Black / Purple Navy | Brown |
| ZTMY Sailor Collar | ¥4,200 | Navy | Yomogi |
| if710 BUNKADENRAI Half-zip Sweatshirt | ¥9,800 | Black / Light Blue / Burgundy | — |
| THUNDER CONPAÑA Full-zip Hoodie | ¥13,500 | Vintage Black / Light Purple | Nerd Cyan |
| LEGACY ZOMBIE LABO Stripe Sweater | ¥10,800 | Light Gray × Ash Gray / Blue Gray × Orange | Burgundy × Blue |
| 4Pocket Thunder Velour Jacket | ¥16,500 | Dark Brown / Purple | Burgundy / Gray |
| LEGACY ZOMBIE LABO Coach Jacket | ¥13,800 | Black / Burgundy | Yomogi |
| BUNKADENRAI Satin Pants | ¥11,000 | Purple | Black / Light Blue |
| Thunder Pants (Solid) | ¥16,500 | Black / Kusumi Purple | — |
| Thunder Pants (Plaid) | ¥14,800 | Navy × Beige | Cream × Brown |

출처: [최신 팝업 상품 목록](https://zutomayo.net/mart_nara202610/), [프리오더 원목록](https://zutomayo.net/bunka_denrai_Item_order/).

### 가방·잡화·응원 굿즈

| 상품 | 가격 | 색상·구성 / 참고 |
|---|---:|---|
| Z Boston Bag | ¥14,600 | Black / Yomogi / **Burgundy는 Limited Color** |
| BUNKADENRAI Shoulder Bag | ¥8,900 | Navy / Yomogi |
| BUNKADENRAI Tote Bag | ¥3,200 | Navy / Beige |
| NARA UNIGURI(鹿) Shoulder Pouch | ¥5,400 | 사슴 우니구리 |
| Ashban Electric Inc. Cap | ¥4,800 | Black |
| BUNKADENRAI Cap | ¥4,800 | Colored / **Ivory는 Limited Color** |
| GINGER STRINGS Character Necklace | ¥7,900 | — |
| AKASHUMOKUZAME Character Necklace | ¥7,900 | — |
| BUNKADENRAI Brooch | ¥2,600 | Silver / Gold |
| FIGHT THE SHAMOJI | ¥1,000 | Green |
| SHAMOJI'S RING LIGHT | ¥1,300 | Amber |
| BUNKADENRAI Towel | ¥2,500 | 물판 상품. 사격 경품 Lavender 버전과 구분 |
| BUNKADENRAI Lantern (提灯) | ¥2,800 | 등롱 |
| BUNKADENRAI NARA ERA UCHIWA | ¥2,400 | 부채 |
| ZS Yomosugara UNIGURI Bracelet | ¥2,000 | — |
| BUNKADENRAI Shopping Bag | ¥300 | STAND 증정 조건은 아래 별도 참고 |
| BUNKADENRAI Drawstring Bag | ¥2,800 | Yomogi / Navy |

출처: [팝업 상품 목록](https://zutomayo.net/mart_nara202610/), [현장 신규 상품](https://zutomayo.net/bunka_denrai_Item_netorder/).

### 인형·키링·스티커

| 상품 | 가격 | 버전·구성 |
|---|---:|---|
| NIRACHAN mini NUI | ¥2,800 | MILABO / Medianoche |
| SHOGA_ST mini NUI 3 | ¥2,800 | Medianoche |
| NARA UNIGURI mini NUI | ¥2,800 | 鹿 |
| NARA UNIGURI BIG NUI | ¥5,800 | 鹿 |
| SHOGA_ST BIG NUI | ¥5,600 | 海馬成長痛 |
| Chaos Motif Carabiner Keychain | ¥4,500 | A DENRAI GURI / B BABYGURI / C NEW WAVE GURI |
| BUNKADENRAI Medal Keychain | ¥1,400 | せんとくん / 鹿 |
| UNIGURI 3D Wooden Keychain | ¥1,400 | — |
| BUNKADENRAI 3D Cookie Keychain | ¥1,400 | — |
| BUNKADENRAI KV Plate Keychain | ¥1,400 | — |
| 遣唐使 UNIGURI Floating Keychain | ¥1,500 | — |
| Nira Keychain BUNKADENRAI | ¥1,800 | Lavender / White |
| SHOGA_ST PUNIPUNI Keychain | ¥1,800 | — |
| Bell Charm Strap | ¥1,400 | SHOGA_ST / UNIGURI / SHAKUMA |
| Medianoche Bow Keychain | ¥2,200 | Verdigris |
| 青銅残機 Sword Keychain | ¥1,800 | Verdigris |
| BUNKADENRAI Metal Keychain | ¥1,800 | — |
| DENRAI Sticker Set & Wooden Keychain Set | ¥2,000 | 스티커·목제 키링 세트 |
| ZUTOMAYO TSUYAPUKU Sticker | ¥1,300 | — |
| NIRACHAN TSUYAPUKU Sticker | ¥1,300 | Vol.1 / Vol.2 |
| DENRAI Gacha | ¥500 | 랜덤 |

출처: [프리오더 목록](https://zutomayo.net/bunka_denrai_Item_order/), [현장 신규 상품](https://zutomayo.net/bunka_denrai_Item_netorder/), [팝업 목록](https://zutomayo.net/mart_nara202610/).

### 나라 협업 — 공예·생활용품

| 협업처 | 상품 | 가격 | 참고 |
|---|---|---:|---|
| 樹匠 | 歌詞おみくじキーホルダー | ¥1,800 | 가사 오미쿠지 키링 |
| 樹匠 | 文禍伝雷 箸 | ¥1,200 | 젓가락 |
| HEP | ZT Logo Marble Sandal | ¥4,800 | 로퍼 샌들과 다른 상품 |
| HEP | ZT Logo Charm Loafer Sandal | ¥24,000 | 기존 프리오더·협업 공개 상품, 판매처 확인 |
| yoccoh. | SHOGA_ST PVC Bag | ¥9,800 | — |
| 活版工房 丹 | if遣唐使船ポップアップカード | ¥2,600 | 입체 카드 |
| 活版工房 丹 | 活版ハガキ 3枚セット | ¥1,500 | 회장 3장 세트 |
| 活版工房 丹 | 活版ハガキ 단품 | ¥500 | 팝업: 漆胡瓶 / 紅牙・紺牙撥鏤碁子 / 密陀彩絵箱 |
| 奈良筆あかしや | 文禍伝雷 毛筆ペン | ¥1,000 | 붓펜, 판매처 확인 |
| 白雪ふきん | 文禍伝雷 友禅手ぬぐい | ¥2,200 | 손수건, 판매처 확인 |
| 나라현 캐릭터 협업 | Clear File Folder & Postcard Set | ¥800 | 센토군 × 우니구리 |

출처: [협업 상품 공식 소개](https://zutomayo.net/bunka-denrai/), [현장 목록](https://zutomayo.net/bunka_denrai_Item_netorder/), [팝업 목록](https://zutomayo.net/mart_nara202610/).

### 나라 협업 — 포장 식품·음료

| 협업처 | 상품 | 가격 | 참고 |
|---|---|---:|---|
| 本家菊屋 | 菊之寿 5개 | ¥1,800 | — |
| 本家菊屋 | 鹿もなか 5개 | ¥1,600 | — |
| ハナマルキ | にっぽんのおみそ汁 4식 | ¥1,400 | 팝업은 **10/8부터 판매 예정** |
| 菩薩咖喱 | 스파이스 카레 키트 | ¥1,600 | 핑크페퍼 / 진저 |
| 奈良あまづらせん再現プロジェクト | 甘葛風シロップ | ¥2,000 | — |
| 古都華のしずく | 콜라보 딸기 컨피츄르 | ¥3,000 | — |
| 名水の里 | ごろごろ水 | ¥300 | 센토군 × 우니구리 패키지 |
| 今西清兵衛商店 | 春鹿 純米大吟醸 720ml | ¥4,800 | **주류** |
| 中本酒造店 | 神龜乃黄金酒 長屋王 720ml | ¥4,800 | **주류**, 1병당 라벨 스티커 1장 특전 안내 |
| FARMENTRY | サンダーコンパーニャ IPA | ¥1,000 | **주류**, 6.5% |
| THERAPYNIA | 魔除けのよもぎセゾン | ¥1,000 | **주류**, 5.0% |
| THERAPYNIA | ドライジンジャーエールスパークリング | ¥800 | 소프트드링크 |
| 健一自然農園 | 3種の大和茶セット | ¥1,500 | 기존 협업 공개 상품, 판매처 확인 |
| 砂糖傳増尾商店 | 奈良こんふぇいと | ¥1,000 | 생강 / 야마토 센차, 판매처 확인 |

출처: [현장 신규 상품](https://zutomayo.net/bunka_denrai_Item_netorder/), [협업 상세](https://zutomayo.net/bunka-denrai/), [팝업 출시일 안내](https://zutomayo.net/mart_nara202610/).

### 명장 공예 시리즈 — 전시 후 수량 한정 추첨 판매

| 협업처 | 상품 | 가격 | 공개 수량 |
|---|---|---:|---:|
| Good Job!センター香芝 | 海苔巻きうにぐりくん はりこ | ¥2,500 | 100개 |
| Good Job!センター香芝 | I'm Creamyしょがスト はりこ | ¥2,500 | 100개 |
| 大塩昭山 | 大和絵うにぐりくん茶碗 | ¥9,800 | 40개 |
| 大塩昭山 | 大和絵しょがストぐい呑み | ¥6,800 | 40개 |
| 추가 공개 예정 | 나라 칠기 / 요시노 와시 조명 / 잇토보리 / 목공 / 도기 / 부채 | 미공개 | 미공개 |

**일반 물판처럼 현장에서 바로 구매하는 방식으로 안내되지 않았습니다.** 팝업·회장 전시 후 추첨 판매 예정이며, 접수 일정·방법은 추가 공지 확인. 출처: [명장 시리즈 공식 소개](https://zutomayo.net/bunka-denrai/).

### ZUTOMAYO CARD·음반

| 상품 | 가격 | 판매 안내 |
|---|---:|---|
| CARD SLEEVE 65 SET | ¥1,800 | THE WORLD IS CHANGING / ALL ALONG THE WATCHTOWER / Off Minor / Fantasy Is Reality |
| CARD Half Field Mat | ¥2,800 | 팝업 목록 |
| STARTER DECK STD-1~4 | ¥2,000 | STUDY ME / Neko Reset / SHADE / TAIDADA, 팝업 목록 |
| CARD BASIC PACK 1~4 | ¥500 | 팝업 목록 |
| CARD STARTER PACK | ¥3,000 | 팝업 목록 |
| CARD Case Keyholder / Acrylic Stand | ¥1,000 | 팝업 목록 |
| CARD DECK CASE | ¥1,200 | 팝업 목록 |
| CARD SLEEVE 50 SET (OVER SLEEVE) | ¥1,000 | 팝업 목록 |
| 正しい偽りからの起床 초회한정판 복각 | **¥3,565** | 현장 신규 목록, [복각 공지](https://zutomayo.net/news/652/) |
| 形藻土 | ¥9,900 / ¥6,380 / ¥3,300 | 피규어 / 초회 마도서 / 통상판, 팝업 목록 |
| 永遠深夜万博「名巧は愚なるが如し」 | ¥8,800 / ¥4,950 | 초회 / 통상판, 팝업 목록 |

팝업은 과거 음반·Blu-ray도 판매합니다. 전체 목록은 아래 접힌 표 참고. 출처: [팝업 목록](https://zutomayo.net/mart_nara202610/), [현장 신규 목록](https://zutomayo.net/bunka_denrai_Item_netorder/).

<details>
<summary>팝업의 구 굿즈·음반 전체 공개 목록</summary>

색상·버전별 동일 가격을 한 행으로 묶었습니다.

| 구 상품 | 가격 | 버전 |
|---|---:|---|
| ZOMCRA Gacha | ¥500 | — |
| ZUTOMAYO × 鼻セレブ L (2set) | ¥1,200 | — |
| Dakkochan doll | ¥1,500 | NIRA / SHOGASTO |
| nana-nana × ZUTOMAYO Hoop mini PVC | ¥15,950 | Cosmic Purple |
| NIRACHAN mini NUI | ¥2,600 | ヒューマノイド / 低血ボルト / ハゼ馳せる果てるまで / Stay Foolish / Pain Give Form |
| UNIGURI mini NUI | ¥2,600 | TAIDADA |
| BLACK NIRACHAN mini NUI | ¥2,600 | Time Left |
| SHOGA_ST mini NUI 2 | ¥2,600 | Hippocampal Pain |
| AIPEGA UNIGURI Cushion | ¥3,200 | — |
| SNNK Quilted Jacket | ¥14,800 | Blue Gray |
| ZTMY Carabiner | ¥2,000 | Black |
| Vintage Tote Bag | ¥6,500 | Purple |
| Re：HP TOP TEE | ¥5,600 | Black / White |
| Medianoche Tee B | ¥5,600 | Dark Navy |
| ZUTOMAYO INTENSE II Tour Tee | ¥5,600 | White / Vintage Black |
| ZUTOMAYO INTENSE II Tour Towel | ¥2,500 | — |
| CARD CHAMPIONSHIP 2026 KV Tee | ¥5,900 | White / Vintage Black |
| CARD4 Long Tee A | ¥6,800 | Vintage Black / Vintage Purple |
| CARD4 Long Tee B | ¥6,800 | Vintage Black |
| MADNIGHT Sweatshirt | ¥8,800 | Bluish Gray / Vintage Black |
| MAD Vintage Denim Pants | ¥14,800 | — |
| Saturn Velour Belt | ¥7,800 | Camel |
| Saturn Bracelet | ¥7,700 | Gray |
| Saturn Alarm Clock | ¥6,500 | — |
| CRAB Ear Muff | ¥3,900 | — |
| CRAB Neck Pillow & Ghost Uniguri Cushion (2way) | ¥3,900 | — |
| Ashban Electric Labo Chain Tie | ¥8,500 | White / Vintage Black |
| ZTMY Basic Socks Set | ¥3,500 | Black / Cream / Gray 세트 |
| FIGHT THE SHAMOJI | ¥1,000 | Purple Navy |
| SHAMOJI'S RING LIGHT | ¥1,300 | Dark Green |
| NUI Pouch | ¥2,800 | Black / Brown |
| SHOGA_ST mini Bag | ¥3,200 | — |
| Character Lip Case Keychain | ¥1,800 | UNIGURI / SHAKUMA / SHOGA_ST |
| Mirror Shooter Keychain | ¥1,600 | — |
| ZS Bag Hanger Keychain | ¥1,800 | — |
| ZS Headphone Keychain NUI | ¥2,200 | — |
| ZUTOMAD LABO Chain Brooch | ¥4,800 | — |
| NIRACHAN Stained Glass Keychain | ¥1,800 | SHADE |
| ZT 2Way Glasses Cord Necklace | ¥2,000 | — |
| Pet Bottle Holder | ¥1,600 | Blue / Gray / Smoky Pink |
| ZTMY CARD4 Metallic Poster | ¥2,500 | — |
| BIG LOGO STICKER 25~54 | ¥700 | — |
| ZTMY Paper Shopping Bag (M) | ¥800 | STAND에서는 미취급 |

| 음반 / 영상 | 가격 | 버전 |
|---|---:|---|
| 形藻土 | ¥9,900 / ¥6,380 / ¥3,300 | 수량 한정 피규어 / 초회 마도서 / 통상 |
| 正しい偽りからの起床 | ¥2,037 | 통상 |
| 今は今で誓いは笑みで | ¥2,090 | 통상 |
| 潜潜話 | ¥3,300 | 통상 |
| 朗らかな皮膚とて不服 | ¥1,980 | 통상 |
| ぐされ | ¥3,300 | 통상 |
| 伸び仕草懲りて暇乞い | ¥1,980 | 통상 |
| 沈香学 | ¥3,300 | 통상 |
| 虚仮の一念海馬に託す | ¥2,200 | 통상 |
| CLEANING LABO「温れ落ち度」 | ¥4,950 | 통상 |
| ZUTOMAYO FACTORY「鷹は飢えても踊り忘れず」 | ¥4,950 | 통상 |
| 本格中華喫茶・愛のペガサス ～羅武の香辛龍～ | ¥4,950 | 통상 |
| 永遠深夜万博「名巧は愚なるが如し」 | ¥8,800 / ¥4,950 | 초회 / 통상 |

출처: [팝업 공식 판매 목록](https://zutomayo.net/mart_nara202610/). 목록은 재고 보장이 아니며 품절 시 종료.

</details>

## 나라 팝업스토어와 역 매점

### 두 점포 비교

| 항목 | ZUTOMAYO MART 奈良出張所 | ZUTOMAYO STAND 大和西大寺駅店 |
|---|---|---|
| 장소 | **나라현 컨벤션센터 2F 天平ギャラリー** | **야마토사이다이지역 Time's Place 西大寺 17번 부스** |
| 주소 | 奈良市三条大路1丁目691-1 | 奈良市西大寺国見町1-1-1 |
| 기간 | **10/3~10/12** | **10/3~10/11** |
| 기본 시간 | **11:00~19:00**, 마지막 입장 18:30 | **10:00~20:00** |
| 공연 양일 | **11:00~21:00**, 마지막 입장 20:30 | **10:00~17:30** |
| 상품 | 나라 공연 굿즈·구 상품·카드·음반·Limited Color | 소품 위주 일부 상품 |
| 입장 예약 | 날짜별 필요, 아래 표 참고 | 별도 예약제 공지 확인되지 않음 |
| 점포 독점 | Limited Color 취급, 회장에서는 미취급 | **매점 한정 상품 없음** |
| 쇼핑백 | 공개 판매 목록 ¥300 | **1회 계산 ¥10,000마다 BUNKADENRAI Shopping Bag 1장 증정** |
| 유의 | DENRAI Gacha 10/10~, 미소시루 10/8~ 예정 | ZTMY Paper Shopping Bag (M) 미취급 |

출처: [팝업·역 매점 공식 페이지](https://zutomayo.net/mart_nara202610/).

### MART 입장 예약일

| 방문 날짜 | 예약 필요 여부 |
|---|---|
| 10/3(토)·10/4(일) | 종일 예약제 |
| 10/5(월)~10/9(금) | 예약 불필요 |
| **10/10(토)·10/11(일)** | **종일 예약제**, 21:00까지 영업 |
| 10/12(월·공휴일) | 15:00까지 예약제, 이후는 공지의 최신 운영 안내 확인 |

| 예약 조건 | 내용 |
|---|---|
| 일반 예약 | 9/23 18:00부터 각 입장 시간대 5분 전까지, 선착순 |
| 필요한 계정 | **LINE 등록 필수** |
| PREMIUM 우선 | 9/22 18:00~9/23 17:00, 종료 |
| 예약 링크 | [일반 입장 예약](https://0101event.eventos.tokyo/web/portal/784/event/8393/module/ticket/289837) |
| 운영 상세 | [마루이 공식 안내](https://www.0101.co.jp/405/info/index.html?contents_id=1209) |

**공연 티켓·체험 참가권·팝업 입장 예약은 각각 별개입니다.** 출처: [팝업 예약 안내](https://zutomayo.net/mart_nara202610/).

### MART 구매 특전

| 결제 조건 | 특전 |
|---|---|
| 1회 계산 세금 포함 ¥3,000 이상 | 文禍伝雷 홀로그램 스티커 2종 중 랜덤 1장 |
| 해당 구매에서 에포스카드 결제 또는 카드 제시 후 현금 결제 | 스티커 2종 1세트 |
| 다른 신용카드 결제 | ¥3,000 이상이어도 랜덤 1장 |
| 여러 영수증 합산 | 불가 |
| 수량 | 소진 시 종료 |

이 특전은 **MART 나라 출점 안내**입니다. 공연장 물판·STAND에서도 같은 특전을 주는 것으로 해석하면 안 됩니다. 출처: [구매 특전](https://zutomayo.net/mart_nara202610/).

<details>
<summary>공식 상품 이미지 목록 보기</summary>

- [MART 나라 출점 상품 이미지](https://d12oj0i0pu43cb.cloudfront.net/zutomayo.net/share/bunkadenrai/nara_lineup.jpg)
- [STAND 역 매점 상품 이미지](https://d12oj0i0pu43cb.cloudfront.net/zutomayo.net/share/bunkadenrai/stand_lineup.jpg)
- [판매 목록 본문·추가 이미지](https://zutomayo.net/mart_nara202610/)

</details>

## 스탬프 랠리와 전시

### 스탬프 행사 2종 구분

| 행사 | 기간 | 범위 | 특전 |
|---|---|---|---|
| **伝雷集印めぐり** | **10/10·10/11** | 공원 안 8개 인장·포토패널, 각 장소에 용지 비치 | **특전 교환 없음** |
| **奈良回遊スタンプラリー** | **10/1~10/31** | 나라 시내 7곳의 오리지널 스탬프 | 패널 QR 웹 설문 응답자 중 **추첨**으로 스티커 |

출처: [공원 스탬프·동시 행사](https://zutomayo.net/bunka-denrai/), [시내 스탬프 공지](https://zutomayo.net/news/651/).

### 나라 시내 스탬프 7곳

| 번호 | 장소 | 주소 / 조건 |
|---|---|---|
| 壱 | 平城宮跡歴史公園 天平うまし館 | 奈良市二条大路南4丁目6-1 |
| 弐 | 奈良公園バスターミナル | 奈良市登大路町76 |
| 参 | 近鉄奈良駅観光案内所 | 奈良市東向中町29, 긴테쓰 나라역 빌딩 |
| 肆 | 奈良市総合観光案内所 | 奈良市三条本町1-1082 |
| 伍 | ノボテル奈良 | 奈良市大宮町7-1-45 |
| 陸 | 亀の井ホテル奈良 | 奈良市二条町3丁目9-1 |
| 漆 | 元興寺(塔跡) | 奈良市芝新屋町12, **토·일만 설치** |

**간고지 스탬프는 평일·공휴일에는 壱 헤이조궁터 역사공원으로 이동 설치됩니다.** 각 스탬프 운영시간은 시설 영업시간에 따릅니다. 출처: [시내 랠리 공식 공지·지도](https://zutomayo.net/news/651/).

### 평성경 가을 산가쿠 페스타와 전시

| 항목 | 안내 |
|---|---|
| 동시 행사 | **平城京 秋の散楽フェスタ 2026**, 10/9~10/11 |
| 장소 | **朱雀門ひろば** — 스자쿠문 광장 |
| 구성 | 음식·공연·체험·불꽃 행사 등. 공연장 라이브와 별도 운영 |
| 즛토마요 연계 | 포토스팟·스탬프, 간사이 만박 공연 의상·바이크 전시, 장식 견당사선, 카드 코너 예정 |
| 상세 | [산가쿠 페스타 공식 사이트](https://naratenpyosaii.hp.peraichi.com/) |

불꽃 시간과 즛토마요 본공연 종료 시각을 같은 일정으로 단정하지 않았습니다. 출처: [공연 공식 동시행사 소개](https://zutomayo.net/bunka-denrai/).

## 당일 준비 체크리스트

| 준비 | 체크 | 이유 |
|---|---|---|
| 공연 티켓·입장 방식 확인 | ☐ | 자기 블록·정리번호·동행자 입장 조건 |
| PREMIUM MY PAGE 로그인 | ☐ | Premium 구역·회원 한정 상품 인증 |
| 체험 종이 티켓 발권 | ☐ | 사전 추첨 참가자는 편의점 사전 발권 |
| 체험 집합 시각 저장 | ☐ | 집합과 체험 시작은 다를 수 있음 |
| 굿즈 수령 QR·수령 시간 저장 | ☐ | QR 미제시 시 수령 불가 안내 |
| MART 입장 예약·LINE 확인 | ☐ | 10/10·10/11은 종일 예약제 |
| 여권 등 연령 확인 신분증 | ☐ | 주류 구매·수령 시 필요 |
| 500엔 동전·현금 | ☐ | 가챠, 현금 결제 상황 대비 |
| 전자머니 사전 충전 | ☐ | 현장 충전 불가 |
| 우비·판초 | ☐ | 우산 사용 금지 |
| 걷기 편한 신발·겉옷·보조배터리 | ☐ | 야외·장시간 대기용 개인 준비 제안 |
| 음량이 부담되면 귀마개 | ☐ | 공식 공통 가이드 권장 |
| 쇼핑 물량·짐 보관 계획 | ☐ | 클로크 중간 출납 불가 |
| 마지막 전철·숙소 귀가 경로 | ☐ | 규제 퇴장·역 혼잡 예상, 실제 운행표는 별도 확인 |

### 공연일 동선 예시 — 개인 계획용

| 시간 | 제안 |
|---|---|
| 9:30~ | 필요한 경우 당일 체험 참가권 구매 |
| 10:00~12:00 | 굿즈 지정 시간 수령·체험·가챠 |
| 12:00~14:30 | 점심·사이드스테이지·포토스팟 |
| 14:30~15:30 | 화장실·클로크·관람 구역 이동 |
| 15:30~ | 자기 블록 입장 안내에 따라 입장 |
| 17:30~ | 본공연 |
| 종연 후 | 규제 퇴장·짐 회수·귀가 |

이 표는 **공식 일정표가 아닌 동선 예시**입니다. 투어버스는 13:00경 도착이라 오전 체험과 맞지 않을 수 있고, 팝업 예약을 추가하면 공연장 왕복 이동시간을 따로 잡아야 합니다.

## 추가 확인이 필요한 정보

| 항목 | 문서 작성 시 처리 |
|---|---|
| 체험 시간대·추첨 결과·결제·발권 마감 | 접수 사이트 상세 확인 필요. 임의 추정하지 않음 |
| 체험 신청의 해외 전화번호·계정 조건 | 기존 공연 해외 선행·리세일 조건을 그대로 적용하지 않음 |
| 종연 후 역행 버스 요금·승차장 | 별도 운행 예정까지만 확인 |
| 명장 시리즈 추첨 접수 | 일부 가격·수량 공개, 접수 방법·기간은 후속 공지 확인 |
| Henley Neck 한정 색상 | 기존 프리오더 Nerd Blue / 최신 팝업 Ice Blue로 표기 차이. 최신 팝업 기준으로 정리 |
| 굿즈 사이즈·회원 전용·구매 개수 제한 | 상품별 주문 화면 확인 |
| STAND 개별 품목 | 소품 일부 판매, 공식 이미지 목록 확인. MART 전체 목록과 같지 않음 |
| 각 부스 결제·세부 운영시간 | 회장 굿즈 결제 안내를 모든 푸드·체험에 일괄 적용하지 않음 |
| 현장 재고·예약 잔여석 | 조회 시점·판매 시작에 따라 변동, 이 문서로 보장하지 않음 |
| 날씨·취소·지도 변경 | 출발 전 공식 페이지·공지 재확인 |

## 공식 링크 모음

| 목적 | 공식 링크 |
|---|---|
| 공연 전체·주의사항·교통·지도 | [文禍伝雷 특설 페이지](https://zutomayo.net/bunka-denrai/) |
| 체험·푸드·사이드스테이지 | [MATSURI AREA](https://zutomayo.net/special/bunka-denrai/matsuri-area/) |
| 체험 사전 추첨 신청 | [티켓피아 참가권 접수](https://w.pia.jp/t/zutomayo-lzl-bunkadenrai/) |
| 굿즈 현장 수령·판매·결제 | [현장 네트오더 안내](https://zutomayo.net/bunka_denrai_Item_netorder/) |
| 현장 수령 상품 주문 | [ZUTOMAYO MART for LIVE](https://zutomayo.net/martforlive/) — 회원 로그인 / 비회원 진입 선택 |
| 일반 굿즈 스토어 | [ZUTOMAYO MART](https://zutomayomart.net/) |
| 기존 프리오더·후일 재고 판매 계획 | [프리오더 안내](https://zutomayo.net/bunka_denrai_Item_order/) |
| 팝업·역 매점·상품 목록 | [나라 MART & STAND](https://zutomayo.net/mart_nara202610/) |
| 팝업 입장 예약 | [일반 예약](https://0101event.eventos.tokyo/web/portal/784/event/8393/module/ticket/289837) |
| 공식 리세일 전체 | [10/2 리세일 공지](https://zutomayo.net/news/654/) |
| Premium 업그레이드 조건 | [회원 업그레이드 공지](https://zutomayo.net/news/644/) |
| 투어버스·신청 연결 | [한큐교통사 버스 공지](https://zutomayo.net/news/645/) |
| 시내 스탬프 랠리 | [나라 회유 스탬프 공지](https://zutomayo.net/news/651/) |
| 초회 마도서 복각 판매 | [복각 공지](https://zutomayo.net/news/652/) |
| 라이브 공통 규칙 | [라이브 가이드라인](https://zutomayo.net/live_guideline/) |
| 티켓 FAQ | [티켓피아 공연 FAQ](https://w.pia.jp/t/zutomayo-lzl-faq/) |
| 공연 문의 | 쿄도 인포메이션 **0570-200-888**, 평일 12:00~17:00 |
| 팝업 문의 | **070-8709-4696**, 11:00~19:00. 재고 전화 문의는 자제 요청 |
| 새 공지 | [ZUTOMAYO NEWS](https://zutomayo.net/news/) |

---

이 README는 GitHub에서 바로 읽을 수 있는 표·목차·접기 형식으로 작성했습니다. 공식 원문 전체를 번역한 문서가 아니라 관람·구매에 필요한 사실을 한국어로 재구성한 자료입니다.
