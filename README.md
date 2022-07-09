<h1>
  JavaScript
</h1>

<p>
  Репозиторий посвящен выполению работ по JS
</p>

<br>

<h2>
  Домашняя работа №1
</h2>

<p>
  Результат работы находится в файле <a href="https://github.com/kozyrevQA/JS/blob/main/JS_HW_1.js">JS_HW_1.js</a>
</p>

<details>
  <summary>Список заданий:</summary>
  <ol>
    <li>Создать переменную <code>item_1</code></li>
    <li>Присвоить переменной <code>item_1</code> значение <code>5</code></li>
    <li>Вывести в консоль <code>item_1</code></li>
    <li>Создать переменную <code>item_2</code></li>
    <li>Присвоить переменной <code>item_2</code> значение <code>3</code></li>
    <li>Вывести в консоль <code>item_2</code></li>
    <li>Создать переменную <code>item_3</code></li>
    <li>Присвоить переменной <code>item_3</code> сумму <code>item_1</code> и <code>item_2</code></li>
    <li>Вывести в консоль <code>item_3</code></li>
    <li>Создать переменную <code>item_4</code></li>
    <li>Присвоить переменной <code>item_4</code> строку <code>Yolochka</code></li>
    <li>Вывести в консоль <code>item_4</code></li>
    <li>Вывести в консоль сумму <code>item_3</code> и <code>item_4</code></li>
    <li>Вывести в консоль произведение <code>item_3</code> и <code>item_4</code></li>
    <li>Создать переменную <code>item_5</code></li>
    <li>Присвоить переменной <code>item_5</code> переменную <code>item_3</code></li>
    <li>Создать переменную <code>item_6</code></li>
    <li>Создать переменную <code>item_6_type</code></li>
    <li>Присвоить переменной <code>item_6</code> значение <code>15</code></li>
    <li>Присвоить переменной <code>item_6_type</code> тип переменной <code>item_6</code></li>
    <li>Вывести в консоль тип данных <code>item_6</code> в виде <code>"item_6 == "  item_6,  "item_6_type == "  item_6_type</code></li>
    <li>Создать переменную <code>item_7</code> и в ней преобразовать <code>item_6</code> в String</li>
    <li>Создать переменную <code>item_7_type</code></li>
    <li>Присвоить переменной <code>item_7_type</code> тип переменной <code>item_7</code></li>
    <li>Вывести в консоль тип данных <code>item_7</code> в виде <code>"item_7 == "  item_7,  "item_7_type == "  item_7_type</code></li>
    <li>Создать переменную <code>age_1</code> и присвоить ей значение <code>10</code></li>
    <li>Создать переменную <code>age_2</code> и присвоить ей значение <code>18</code></li>
    <li>Создать переменную <code>age_3</code> и присвоить ей значение <code>60</code></li>
    <li>Создать <code>if</code> в котором будете проверять значение переменной <code>age_1</code></li>
    <li>Если <code>age_1 < age_2</code>, вывести в консоль: <code>“You don’t have access cause your age is ” + age_1 + “ It’s less then ”</code></li>
    <li>Если <code>age_1 >=  age_2</code> и <code>age_1 <  age_3</code>, вывести в консоль" <code>“Welcome  !”</code></li>
    <li>Если <code>age_1  > age_3</code>, вывести в консоль" <code>“Keep calm and look Culture channel”</code></li>
    <li>Иначе вывести в консоль: <code>“Technical work”</code></li>
  </ol> 
</details>
______________________________
<br>
<details>
  <summary>Задания со звёздочками</summary>
  <ul>
    <li>
    <details><summary>Задание 1*</summary>
      Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.<br>
      Пример:<br>
      <code> 
      const checkAge = function(age) {<br>
      Ваши преобразования
      <br>}</code><br>
      Вывести в консоль результат работы функции с возрастами 17, 18, 61
    </details>
    Результат выполнения находится в файле <a href="https://github.com/kozyrevQA/JS/blob/main/JS_HW_1_1Star.js">JS_HW_1_1Star.js</a>
    </li>
    <li>
    <details><summary>Задание 2**</summary>
    Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. 
    И если он не <code>Number</code> - кидалась ошибка.
    </details>
    Результат выполнения находится в файле <a href="https://github.com/kozyrevQA/JS/blob/main/JS_HW_1_2Star.js">JS_HW_1_2Star.js</a>
    </li>
    <li>
    <details><summary>Задание 3***</summary>
    Преобразовать 2* таким образом, чтобы значение <code>'2'</code> (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, 
    преобразовываясь в <code>number</code>
    </details>
    Результат выполнения задания находится в файле <a href="https://github.com/kozyrevQA/JS/blob/main/JS_HW_1_3Star.js">JS_HW_1_3Star.js</a>
    </li>
    <li>
    <details><summary>Задание 4****</summary>
    Преобразовать задание 3* таким образом, чтобы возраст вводился используя функцию <code>prompt</code> 
    в привязанной верстке (index.html)<br><br>
    <i>Пошёл чуть дальше и немного оформил HTML при помощи CSS, скрипт прикрутил к кнопке, добавил еще одну кнопку для очистки области вывода</i>
    </details>
    Результат выполения задания находится в файлах <a href="https://github.com/kozyrevQA/JS/blob/main/index.html">index.html</a> и <a href="https://github.com/kozyrevQA/JS/blob/main/JS_HW_1_4Star.js">JS_HW_1_4Star.js</a>
    </li>
  </ul>
</details>
