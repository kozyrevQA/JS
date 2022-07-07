//  4***:
//  Преобразовать задание 3* таким образом, чтобы возраст вводился используя функцию prompt 
//  в привязанной верстке (index.html)

let age_2 = 18;
let age_3 = 60;

const div = document.getElementById("run-scr");  //  обращаемся к div'у в html
const buttonClear = document.querySelector("#btn-clear"); //  Подключаемся к кнопке Очистить
buttonClear.addEventListener("click", function(event) {div.innerHTML=("")});  //  Исполняем код, если нажата Очистить
const buttonRun = document.querySelector("#btn-run"); //  Подключаемся к кнопке Проверить возраст
buttonRun.addEventListener("click", function(event) { //  Исполняем код, если Проверить возраст нажата
  
  const age = prompt("Введите ваш возраст");  //  запрашиваем у пользователя значение возраста и кладем его в age
  const checkAge = function(age) {
    try { // готовимся к перехвату исключения
      if(typeof age === "string" && age.trim().length == 0 /*защищаемся от пробелов и пустых строк в вводе*/) {
        throw err;  //  кидаем исключение, если в age передана пустая строка, либо пробелы
      }
    
      let checkAgeLogic = function(age) { // основную логику перенес во вложенную функцию
        if(!Number.isNaN(age)) {    // Чтобы NaN не просочился
          if(age < age_2) {
            div.innerHTML+=/*выводим сообщение прямо в наш div*/("You don’t have access cause your age is " + age + ". It’s less then<br>");
          } else if(age >= age_2 && age < age_3) {
            div.innerHTML+=("Welcome  !<br>");
          } else if(age > age_3) {
            div.innerHTML+=("Keep calm and look Culture channel<br>");
          } else {div.innerHTML+=("Technical work<br>");}
        } else throw err; // Если всё же NaN пройдет, то бросаем исключение      
      }

      switch (typeof age) { //  конструкция switch..case, на мой взгляд, в этом месте гораздо нагляднее чем if
        case "string":
          checkAgeLogic(Number(age.trim()));  // передаем приведенное к number значение, предварительно обрезав пробелы, на случай, если пользователь случайно их добавил
          break;

        case "number":
          checkAgeLogic(age);
          break;
    
        default:        // на случай любых ненужных нам типов данных
          throw err;    // бросаем исключение
      }
    } catch (err) {
      console.log("ERROR: The value you entered could not be processed! You entered:", age, "typeof=", typeof age, "Please enter a number")
      alert("ERROR: The value you entered could not be processed!");  //  
    }
  }
  checkAge(age);  //  запускаем функцию проверки возраста
});




//buttonRun.addEventListener("click", age);