const mysql = require('mysql');

// MySQLに接続するための設定を定義
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: ''
});

// MySQLに接続する
connection.connect(function (err) {
    if (err) {
        console.error('MySQLに接続できませんでした: ' + err.stack);
        return;
    }
    console.log('MySQLに接続しました。接続ID: ' + connection.threadId);
});

// connection close
connection.end(function (err) {
    if (err) {
        console.error('MySQLとの接続を切断できませんでした: ' + err.stack);
        return;
    }
    console.log('MySQLとの接続を切断しました。');
});