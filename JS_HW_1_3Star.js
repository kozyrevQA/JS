//  Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, 
//  преобразовываясь в number

//let age_1 = 10;   в данной переменной нет необходимости
let age_2 = 18;
let age_3 = 60;

const checkAge = function(age) {
  try { // готовимся к перехвату исключения
    if(typeof age === "string" && age.trim().length == 0 /*защищаемся от пробелов и пустых строк в вводе*/) {
      throw err;  //  кидаем исключение, если в age передана пустая строка, либо пробелы
    }
    
    let checkAgeLogic = function(age) { // основную логику перенес во вложенную функцию
      if(!Number.isNaN(age)) {    // Чтобы NaN не просочился
        if(age < age_2) {
          console.log("You don’t have access cause your age is " + age + ". It’s less then");
        } else if(age >= age_2 && age < age_3) {
          console.log("Welcome  !");
        } else if(age > age_3) {
          console.log("Keep calm and look Culture channel");
        } else {console.log("Technical work");}
      } else throw err; // Если всё же NaN пройдет, то бросаем исключение      
    }

    switch (typeof age) {
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
    console.log("ERROR: The value you entered could not be processed!");
  }
}



checkAge(0);    
checkAge(17);
checkAge(18);
checkAge(61);
checkAge(17 + 18);    /* сумма чисел условия не нарушает */
checkAge("17+18")     /* задачи парсить строку на числа и выражения не было, поэтому будет ошибка */
checkAge("20");       /* пытаемся передать в функцию число в виде строки */
checkAge("2O");       /* Пытаемся обмануть систему литерой O */
checkAge();           /* пытаемся передать в функцию пустую переменную */
checkAge(undefined);  /* пытаемся передать в функцию явно неопределенную переменную. */                      
checkAge(NaN);        /* Пытаемся передать в функцию NaN - не число, но имеет тип данных number */
checkAge(true);       /* Boolean в чистом виде */
checkAge("0");
checkAge("два");      /* пытаемся передать в функцию строку */
checkAge(" ");        /* а если пробел? */
checkAge("   ")       /* три пробела */
checkAge("");         /* а если просто пустая строка? */
checkAge("  ")        /* символ табуляции */
checkAge("+");
checkAge(-21);        /* отрицательное значение */