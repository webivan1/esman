# Javascript ES6 + PHP Yii2

<p>Простая сборка проекта для удобной организации кода на современном javascript.</p>
<p>Больше не потребуется весь функционал проекта клиентской части держать в одном файле.
	<br /> Теперь ваш клиентский код будет разбит на части как MVC.
	<br /> Неплохой пример именно с Yii2 где много клиентских скриптов подгружаются в зависимости от widgets и др.
	функционала.
	<br /> Написан маленький функционал роутера, который позволяет работать сайт через history api 
	<br /> <b>В плане seo сайт никак не пострадает, наши view отрабатывают как на сервере, так и на клиенте!</b> 
</p>

<h3>Установка</h3>

<p>Поставить node.js - <a target="blank" href="https://nodejs.org/en/">nodejs.org/en</a></p>
<p>Локальный сервер - <a target="blank" href="http://open-server.ru/download/">open-server.ru</a></p>

<div>
  git clone https://github.com/webivan1/esman.git ./ <br />
  cd backend <br />
  php composer.phar self-update <br />
  php composer.phar update <br />
  cd ../frontend <br />
  npm install <br />
  npm webpack --watch
  <hr />
  Создать каталог assets в папке public <br />
  <i>http://{mysite}</i>
</div>

<p>Для prodaction версии js используйте комманду - <b>npm run build</b> вместо - webpack --watch</p>

<hr />

<p>Пример: <a href="http://esman.btmax.ru" target="_blank">esman</a></p>
