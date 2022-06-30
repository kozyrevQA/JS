//  Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. 
//  И если он не Number - кидалась ошибка.

//let age_1 = 10;   в данной переменной нет необходимости
let age_2 = 18;
let age_3 = 60;

const checkAge = function(age) {
  try { /* готовимся к перехвату исключения */
    if(typeof age == "number" /* Проверяем тип переменной age и если он == number:*/) {
      if(age < age_2) {
        console.log("You don’t have access cause your age is " + age + ". It’s less then");
      } else if(age >= age_2 && age < age_3) {
        console.log("Welcome  !");
      } else if(age > age_3) {
        console.log("Keep calm and look Culture channel");
      } else {console.log("Technical work");}
    } else throw error; /* если тип переменной age != number бросаем исключение error */
  } catch (error) { /* ловим исключение */
    console.log("Error: Not a number!") /* сообщаем об ошибке в консоль */
    return; /* выходим из функции и продолжаем работу программы */
  }  
}

checkAge(17);
checkAge(18);
checkAge("20"); /* пытаемся передать в функцию число в виде строки */
checkAge(61);