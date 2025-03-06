const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Указываем путь к статическим файлам
app.use(express.static(path.join(__dirname)));

// Запуск сервера
app.listen(port, () => {
    console.log(`Сервер интернет-магазина запущен на http://localhost:${port}`);
});