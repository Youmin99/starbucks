import express from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'
import { options } from './swagger/config.js'// index.js



const app = express()
app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));


app.get('/users', (req, res) => {
  // 1. 데이터를 조회하는 로직 => DB에 접속해서 데이터 꺼내오기
	const result = [
       // 회원 1명 데이터 객체 예시
{ 
	email : "aaa@gmail.com", 
	name : "철수",
	phone : "010-1234-5678",
	personal : "220110-2222222",
	prefer : "https://naver.com"
},// 회원 1명 데이터 객체 예시
{ 
	email : "aaa@gmail.com", 
	name : "철수",
	phone : "010-1234-5678",
	personal : "220110-2222222",
	prefer : "https://naver.com"
},// 회원 1명 데이터 객체 예시
{ 
	email : "aaa@gmail.com", 
	name : "철수",
	phone : "010-1234-5678",
	personal : "220110-2222222",
	prefer : "https://naver.com"
}]

  // 2. 꺼내온 결과 응답 주기
  res.send(result);
});

app.post('/boards', (req, res) => {
  // 1. 브라우저에서 보내준 데이터 확인하기
	console.log(req)
  console.log("=========================")
  console.log(req.body) // 추가
	
	// 2. DB에 접속 후, 데이터를 저장 => 데이터 저장했다고 가정

  // 3. DB에 저장된 결과를 브라우저에 응답(response) 주기
  res.send("게시물 등록에 성공하였습니다.")
});



app.listen(3000, () => {
  console.log("백엔드 API 서버가 켜졌어요!!!");
  console.log(`http://localhost:3000/`)
});