const express = require('express')
const app = express()
const port = 3000

app.get("/", (req, res) => {   // localhost:3000 을 열었을때 res.sendfile 내부의 파일이 띄워진다.
  res.sendFile(__dirname + "/html/eventindex.html");
});
//__dirname은 현재 디렉토리경로까지를 가져와준다.

app.use(express.static('html')) //html 아래에 있는 css,js파일들을 불러온다.

app.listen(port, () => {
  console.log(`Start MiddleNote ${port}`)
})
//bulid in이라는 모듈이 있다.