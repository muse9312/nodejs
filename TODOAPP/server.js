// express 라이브러리 첨부
const express = require('express');
// 라이브러리 객체 생성
const server = express();

// listen(서버띄울 포트번호, 띄운후 실행할 코드) => 8080 port로 서버만들어서 function()코드를 실행해주세요
server.listen(8080, function () {

    console.log('server listening on port 8080');

});

// =================================================================

// 누군가가 /pet 으로 방문을 하면 pet 관련된 안내문을 띄워주자
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

