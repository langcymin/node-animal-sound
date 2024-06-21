const express = require('express')
var cors = require('cors')
const app = express()
const port =3000

app.use(cors())// cors 이슈를 해결하는 단 한 줄

app.get('/', function (req, res) { //라우팅 및 콜백함수. /하나만 있으면 root임.
  res.send('Hello World')
})

app.get('/sound/:name', function (req, res) {  //라우팅에 name key를 만들어 주고, key 별로 다른 라우팅을 호출할 수 있도록 함.
    const {name} = req.params //바로 name key값에 dog를 넣을 수 있음.
    console.log(name)

    if(name=="dog"){
        res.json({'sound':'멍멍'})
    } else if(name=="cat"){
        res.json({'sound':'야옹'})
    } else if(name =="pig"){
        res.json({'sound':'꿀꿀'})
    } else {
        res.json({'sound':'알 수 없음'})
    }




  })


app.listen(port)