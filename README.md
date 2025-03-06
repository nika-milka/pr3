# Установка
1. Клонируйте репозиторий на свой локальный компьютер:
   
   ```git clone  https://github.com/nika-milka/pr3.git```

2. Перейдите в директорию проекта:

   ``` cd pr3 ```
3.  Устоновите Node.js
   
  Для macOS введите в комадную строку

``` brew install node ```
   
  Для Linux введите в комадную строку

``` sudo apt install nodejs npm ```
   
  Для Windows скачайте с официального сайта и устоновите через мастер устоновки 
 
 После скачивания проверьте скачали вы или нет. Вбив в командную строку 

 ``` node -v ```
   
 ``` npm -v ```

4. Инициализируйте новый проект Node.js

   ``` npm init -y```

5. Установите все зависимости:
   
   ``` npm install express body-parser ```

   ``` npm install swagger-ui-express swagger-jsdoc ``` 


# Запуск 
1. Панель пользователя

   ``` node server.js ```

   Сервер интернет-магазина запущен на http://localhost:3000
   
2. Панель администратора 

   ``` node admin-server.js ```
   
   Сервер запущен на http://localhost:8080
   
   Swagger UI доступен по адресу http://localhost:8080/api-docs
