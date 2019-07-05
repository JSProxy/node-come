const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const crypto = require('crypto');  //加密模块
const  child = require('child_process');// 子线程模块


// 编码解析
let urlencodedParser = bodyParser.urlencoded({
    extended: false
})
const app = express();
app.use(urlencodedParser);
app.use(cookieParser());
app.use(multer({
    dest: '/tmp/' // 
}).array('image')) // 和input name = image
app.use(express.static('public'))


app.get('/index.html', (req, res) => {

    res.sendFile(__dirname + '/' + 'public/index.html');
})

app.get('/get_from', (req, res) => {
    console.log(res.cookies);

    res.end(JSON.stringify({
        name: req.query.name,
        age: req.query.age
    }))
})

app.post('/post_from', (req, res) => {
    res.end(JSON.stringify({
        name: req.body.name,
        age: req.body.age
    }))
})

app.post('/up_load', (req, res) => {

    console.log(req) //上传文件的信息
    //保存图片的位子
    let file_path = __dirname + '/images/' + req.files[0].originalname

    fs.readFile(req.files[0].path, (error, data) => {
        fs.writeFile(file_path, data, (error) => 
        {
            if (error) {
                console.log(error);
            } else 
            {
                let response = {
                    message: 'File uploaded successfully',
                    filename: req.files[0].originalname
                };
                console.log(response);
                res.end(JSON.stringify(response));
            }
        })
    })
})
const server = app.listen(3000, () => {

    let host = server.address().address
    let port = server.address().port
    console.log(`server run in  ${host}:${port}`);
})