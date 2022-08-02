// express 라이브러리 첨부
const express = require('express');

// 라이브러리 객체 생성
const server = express();

// html안에 적힌 데이터들을 해석 도와줌
const bodyParser = require('body-parser');
server.use(bodyParser.urlencoded({ extended: true }));

// listen(서버띄울 포트번호, 띄운후 실행할 코드) => 8080 port로 서버만들어서 function()코드를 실행해주세요
server.listen(8080, function () {

    console.log('server listening on port 8080');

});

// =================================================================

// 누군가가 /pet 으로 방문을 하면 pet 관련된 안내문을 띄워주자
// 함수 안에 함수 => 콜백함수
// .get('경로', function (요청내용 , 응답할 방법) {})
server.get('/pet', function (req, res) {
    res.send('펫용품 쇼핑 할 수 있는 페이지입니다')
})

// 누군가가 /beauty 로 방문을 하면 뷰티 관련 안내문 띄워주자
server.get('/beauty', function (req, res) {
    res.send('뷰티용품 쇼핑 페이지예욤!')
})

// =================================================================

// 파일 보여주기

server.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html',)
})

server.get('/write', function (req, res) {
    res.sendFile(__dirname + '/write.html',)
})

// 어떤 사람이 /add 경로로 post 요청을 하면... ??? 를 해주세요

// post 요청으로 서버에 데이터 전송하고 싶으면
// 1. body-parser 핋요
// 2. form데이터 경우 input들에 name 쓰기 => 서버에서 input을 구분하기 위해 name = "이름" 쓰는것

server.post('/add', function (req, res) {
    res.send('전송 완료')
    console.log(req.body);
})