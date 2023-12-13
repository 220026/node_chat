// Express の作成
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended:true}));
// publicフォルダを、Web公開
app.use(express.static(__dirname + '/public'));

// HTTPサーバの作成
const { createServar } = require('node:http');
const server = createServar(app);


