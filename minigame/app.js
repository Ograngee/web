// 引入 Express 框架
const express = require('express');
// 引入 path 模块
const path = require('path');

// 创建 Express 应用程序实例
const app = express();
// 设置端口号
const PORT = process.env.PORT || 3000;

// 设置静态文件目录
app.use(express.static(path.join(__dirname, 'public')));

// 设置路由，当访问根目录时发送 index.html 文件
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 启动服务器，监听指定端口
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
