const express = require('express');
const app = new express();

//可以直接使用ejs 默认照views
app.set('view engine', 'ejs');

app.listen(3000,'127.0.0.1');