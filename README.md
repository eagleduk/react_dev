### React Personal Dev

1. Covid List Page

## https://rapidapi.com 의 API 이용..

2. Lotto List Page... (fail)

## https://www.dhlottery.co.kr 의 API 이용..

3. React CRUD
   참조 사이트
   https://appdividend.com/2018/11/11/react-crud-example-mern-stack-tutorial/#React_CRUD_Example

bootstrap 설치
yarn add bootstrap || npm install bootstrap --save

react-router-dom 설치
yarn add react-router-dom || npm install react-router-dom --save

\*\* import {} from '' 시에
as 로 alias?? 를 지정할수 있다. DB 처럼..

\*\*MongoDB 설치
https://www.mongodb.com/
\*\*\*MongoDB 에 대한 기본 설치및 설정 방법
https://velopert.com/436

\*\*폴더 생성 후 Package.json 파일을 생성하고,
npm init -y 하여 Package.json 파일을 초기화.
그리고 해당 폴더에서 yarn, npm 명령어를 하면 해당 폴더해서 실행.

\*\* express, body-parser, cors, mongoose add
yarn add express body-parser cors mongoose || npm install express body-parser cors mongoose --save

\*\* nodemon add
npm install nodemon --save-dev

\*\* node server start
node ./{server js 파일}

api/business.model.js => 아무래도 DB 테이블 정의인듯.
\*\*\* model에서 스키마를 정할때, mongoDB는 자동으로 복수화를 하여 저장한다. 복수형을 쓰지 않으려면, collection : {테이블 이름} 으로 지정해주어야 한다.
api/business.route.js => Url에 따른 controller 쯤?

4. Google Firebase
   : Google이 제공하는 클라우드 Database 정도..??
   npm install -g firebase-tools

\*\*\* constructor 에서 super(props) 꼭꼭 빼먹으면 안된다...

\*\*\* yarn add trim , yarn add lodash

firebase config
var firebaseConfig = {
apiKey: "{api-key}",
authDomain: "{project-id}.firebaseapp.com",
databaseURL: "https://{project-id}.firebaseio.com",
projectId: "{project-id}",
storageBucket: "{project-id}.appspot.com",
messagingSenderId: "{sender-id}",
appId: "{app-id}",
measurementId: "G-{measurement-id}",
};

firebase Database에 데이터를 전송할때 Key,Value 형태로 보내면 칼럼이랑 자동으로 추가 된다..
실시간으로 적용된다... firebase에서 삭제하면 리스트에서 자동으로 삭제된다..

\*\* Router 에서 props를 전달하는 방법----
<Route path={} component={}> 에서
<Route path={} render={() => {<{컴포넌트명} {파라미터명}={파라미터값}>}}>

5. Higher Order Components Tutorial

같은 value key값을 받는 Component를 함수화 하여서 관리하는 듯한...
해당 Component 와 데이터를 넘겨서 처리하는 방법..
