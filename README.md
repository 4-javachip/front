# Front

## 📚 프로젝트 개요
신세계 I&C 스파로스 아카데미 6기
* [스타벅스 앱](https://play.google.com/store/apps/details?id=com.starbucks.co&hl=ko&pli=1)의 
온라인 스토어 리빌딩 프로젝트 입니다.
* 단순 기능 복제가 아닌, DDD + Layered Architecture 기반의 체계적 설계와 대용량 데이터 처리 경험을 통해, 
MSA 및 CQRS 도입 필요성을 학습하는 것을 목표로 진행되었습니다.
* 라이브러리 사용을 최소한으로 하여 외부 의존성을 줄인 네이티브 개발을 목표로 하였습니다.
* 아토믹 디자인 원칙을 기반으로 하여 체계적이고 재사용 가능한 컴포넌트 아키텍처를 구축하였습니다.
* 프로젝트 전체의 readme를 원하시면 [이곳](https://github.com/4-javachip)으로 이동하세요.

### 주요 기능
- 회원가입/로그인/소셜 로그인
- 상품/상품옵션/이벤트/기획전
- 베스트 상품
- 주문/결제
- 최근 본 상품
- 댓글
- 배송지 관리
- 찜

&nbsp;
## 기술 스택

| 카테고리| 스택 | 사용 목표 |
|:------|:------|:------|
|**Programming Languages**| ![Typescript](https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=Typescript&logoColor=white) | 코드 안정성 및 유지보수성 향상을 위함 |
|**Frameworks**| ![React](https://img.shields.io/badge/React-06B6D4?style=flat-square&logo=React&logoColor=white) ![Next.js](https://img.shields.io/badge/next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white)| 컴포넌트 기반 SSR 및 SSG, SEO 최적화 |
|**CSS Framework**| ![Tailwind CSS](https://img.shields.io/badge/tailwindcss-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)| 유틸리티 클래스 CSS 프레임워크를 통한 개발 최적화 |
|**State Management**| ![Context API](https://img.shields.io/badge/Context--Api-000000?style=flat-square&logo=react)| 네이티브 리액트를 이용한 전역 상태 관리 |
|**library**| ![Shadcn UI](https://img.shields.io/badge/shadcn/ui-000000?style=flat-square&logo=shadcn/ui&logoColor=white)  ![Zod](https://img.shields.io/badge/zod-3E67B1?style=flat-square&logo=zod&logoColor=white) | UI 컴포넌트 라이브러리와 유효성 검증 라이브러리를 통한 개발 속도 향상 |
|**Authentication**| ![NextAuth](https://img.shields.io/badge/NextAuth-000000?style=flat-square&logo=nextdotjs&logoColor=white)| OAuth, Credentials 기능 제공 및 토큰 관리를 통한 보안성 향상 |

&nbsp;
## 역할 분담
### 👨‍💻 Front-end
#### 윤채영
| 페이지 | 구현 목록 | 설명 |
|:------|:------|:------|
| **Auth** | 로그인/회원가입<br>소셜 로그인(OAuth) 및 회원가입<br>이메일 인증<br>비밀번호 재설정 | - NextAuth를 이용하여 인증 기능을 구현했습니다.<br>- 인증 Form을 zod를 이용한 Stepper 형식으로 구현하여 유효성 검사를 구현하였습니다.  |
| **Main** | 이벤트 배너 슬라이드<br>상품 캐러셀<br>기획전 페이지<br>베스트 페이지 | - 메인 페이지에 노출되는 이벤트 배너와 상품 캐러셀 구현 및 기획전과 카테고리에 따른 베스트 페이지를 담당하였습니다. |
| **Product** | 검색<br>상품 리스트<br>상품 상세<br>리뷰 페이지 | - 상품 검색 기능을 구현하고, 라이브러리에 의존하지 않고 무한 스크롤 기능을 직접 개발하여 공통 Hook으로 분리하고 재사용성을 높였습니다.<br>- Next.js Parallel Routes를 활용하여 상품 상세 페이지와 리뷰 페이지를 병렬 렌더링하여 초기 로딩 속도를 최적화하고 사용자 경험(UX)을 향상시켰습니다. |
| **Order** | 리뷰 작성 | - 주문 완료 후 작성 가능한 리뷰 기능을 구현하였습니다. |

&nbsp;
#### 박수현
| 페이지 | 구현 목록 | 설명 |
|:------|:------|:------|
| **Mypage**  | 배송지 관리<br>배송지 약관<br>배송지 추가<br>배송지 수정 | - 사용자 배송지 관리 기능 제공.<br>- 배송지 추가, 수정 및 배송지 약관 페이지를 통해 사용자가 개인 정보를 업데이트할 수 있습니다. |
| **Cart**    | 장바구니                                          | - 사용자가 장바구니에 담은 상품을 확인하고 수정할 수 있는 기능을 제공합니다. |
| **Order**   | 주문<br>주문 내역<br>주문 내역 상세                | - 사용자가 주문을 진행하고, 주문 내역 및 상세 정보를 확인할 수 있도록 구현.<br>- 주문 상태 추적 및 상세 정보 제공. |
| **Payment** | 결제 요청<br>결제 성공<br>결제 실패                | - 결제 요청을 처리하고, 결제 성공 및 실패 상태에 대한 피드백을 사용자에게 제공합니다. |
| **Menu**    | 메뉴                                              | - 사이트의 메뉴를 표시하고, 사용자가 메뉴 항목을 탐색할 수 있는 기능을 제공합니다. |


&nbsp;
### 폴더 구조

```bash
📦src
 ┣ 📂actions              # api 페칭 액션
 ┣ 📂app
 ┃ ┣ 📂(orderpayment)     # 주문 및 결제 관련 페이지
 ┃ ┃ ┣ 📂order
 ┃ ┃ ┗ 📂payment
 ┃ ┣ 📂(review)           # 리뷰 작성 및 리뷰 목록
 ┃ ┃ ┣ 📂addReview
 ┃ ┃ ┗ 📂reviews
 ┃ ┣ 📂(shipping)         # 배송지 추가 및 배송지 목록
 ┃ ┃ ┣ 📂addshipping
 ┃ ┃ ┗ 📂shippingaddresses
 ┃ ┣ 📂(shop)
 ┃ ┃ ┣ 📂(main)           # 메인 페이지
 ┃ ┃ ┣ 📂product          # 상품 상세 페이지
 ┃ ┃ ┗ 📂products         # 전체 상품 목록
 ┃ ┣ 📂api                # API 핸들러 
 ┃ ┣ 📂auth               # 회원가입, 로그인, 비밀번호 재설정, 약관 동의 등
 ┃ ┣ 📂cart               # 장바구니 페이지
 ┃ ┣ 📂cartAddressSelect  # 장바구니 주소 선택
 ┃ ┣ 📂lib                # 라이브러리
 ┃ ┣ 📂order-list         # 주문 목록
 ┃ ┣ 📂shippingaddressagreement # 배송지 약관 동의
 ┃ ┣ 📂wishlist           # 찜 목록
 ┣ 📂components
 ┃ ┣ 📂layouts            # 레이아웃 (헤더, 푸터)
 ┃ ┣ 📂modals             # 모달 
 ┃ ┣ 📂pages              # 페이지별 컴포넌트
 ┃ ┃ ┣ 📂auth
 ┃ ┃ ┣ 📂best
 ┃ ┃ ┣ 📂cart
 ┃ ┃ ┣ 📂event
 ┃ ┃ ┣ 📂main
 ┃ ┃ ┣ 📂menu
 ┃ ┃ ┣ 📂mypage 
 ┃ ┃ ┣ 📂order
 ┃ ┃ ┣ 📂orderlist      
 ┃ ┃ ┣ 📂payment-fail     
 ┃ ┃ ┣ 📂payment-success  
 ┃ ┃ ┣ 📂productDetail   
 ┃ ┃ ┣ 📂products         
 ┃ ┃ ┣ 📂ShippingAddress 
 ┃ ┃ ┗ 📂shippingaddress-agreement 
 ┃ ┗ 📂ui                 # 공통 UI 컴포넌트
 ┃ ┃ ┣ 📂accordions
 ┃ ┃ ┣ 📂buttons
 ┃ ┃ ┣ 📂carousels
 ┃ ┃ ┣ 📂CartItem
 ┃ ┃ ┣ 📂CartSelectAddressList
 ┃ ┃ ┣ 📂dialogs
 ┃ ┃ ┣ 📂dropdown
 ┃ ┃ ┣ 📂icons
 ┃ ┃ ┣ 📂inputs
 ┃ ┃ ┣ 📂loaders
 ┃ ┃ ┣ 📂orderItem
 ┃ ┃ ┣ 📂payment
 ┃ ┃ ┣ 📂products
 ┃ ┃ ┣ 📂skeletons
 ┃ ┃ ┗ 📂texts
 ┣ 📂config
 ┣ 📂constants
 ┣ 📂context              # Context API
 ┣ 📂data                 # initial/dummy 데이터
 ┣ 📂hooks
 ┣ 📂lib
 ┣ 📂provider
 ┣ 📂schemas              # zod 스키마 
 ┗ 📂types

```

&nbsp;
## ⚙️ 프로젝트 실행 방법
프론트엔드 프로젝트를 실행하기 전 아래 항목들을 실행해주세요.
- NodeJs 설치가 선행되어야 합니다.
- NextAuth 소셜 로그인 API 이용을 위한 구글, 카카오의 클라이언트 ID와 시크릿 키를 발급받아야 합니다. ([구글 공식 문서](https://developers.google.com/identity/protocols/oauth2?hl=ko)/[카카오 공식 문서](https://developers.kakao.com/docs/latest/ko/kakaologin/rest-api))

### 환경변수(.env)
```bash
NEXTAUTH_URL              # next auth 설정을 위한 사이트 url (로컬 환경 기준: http://localhost:3100)
NEXTAUTH_SECRET           # next auth 시크릿 키
BASE_API_URL              # 백엔드 서버 주소
GOOGLE_CLIENT_ID          # 구글 OAuth Client id
GOOGLE_CLIENT_SECRET      # 구글 OAuth Secret key
KAKAO_CLIENT_ID           # 카카오 OAuth Client id
KAKAO_CLIENT_SECRET       # 카카오 OAuth Secret key
QR_SIGNIN_KEY             # QR 로그인을 위한 키
QR_SIGNIN_ACCESS_TOKEN    # QR 로그인 계정 Access token 값
```



&nbsp;
## 📦 Getting Started
1. 프로젝트 클론
```bash
git clone https://github.com/4-javachip/front.git
```
2. 프로젝트 디렉토리로 이동
```bash
cd front
```
3. pnpm 설치
```bash
pnpm install
```
4. 빌드 및 실행
```bash
pnpm run build
pnpm run start
```

5. 앱 확인
* 앱이 정상적으로 실행되면 로컬 주소를 통해 앱을 확인할 수 있습니다.
* http://localhost:3100









