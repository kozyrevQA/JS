let item_1;
item_1 = 5;
console.log(item_1);

let item_2;
item_2 = 3;
console.log(item_2);

let item_3;
item_3 = item_1 + item_2;
console.log(item_3);

let item_4;
item_4 = "Yolochka";
console.log(item_4);

console.log(item_3 + item_4);

console.log(item_3 * item_4);

let item_5;
item_5 = item_3;

let item_6, item_6_type;
item_6 = 15;
// впоследствии выяснилось, что присваивать переменной item_6_type необходимо не ТИП переменной item_6, 
// а ЗНАЧЕНИЕ типа в виде строки (небольшая путаница в терминологии - присваивание и приведение):) 
// поэтому данный кусок кода закомменитрован
//
// if(typeof(item_6) === "boolean") {
// item_6_type = Boolean(item_6_type);
// } 
// else if (typeof(item_6) === "string") {
//   item_6_type = String(item_6_type);
// } else {item_6_type = Number(item_6_type);}
item_6_type = typeof item_6;
console.log("item_6 ==",  item_6, "item_6_type ==", item_6_type);

let item_7 = String(item_6);
let item_7_type;
item_7_type = typeof item_7;
console.log("item_7 ==",  item_7,  "item_7_type ==",  item_7_type);

let age_1 = 10;
let age_2 = 18;
let age_3 = 60;
if(age_1 < age_2) {
  console.log("You don’t have access cause your age is " + age_1 + ". It’s less then");
} else if(age_1 >= age_2 && age_1 < age_3) {
  console.log("Welcome  !");
} else if(age_1 > age_3) {
  console.log("Keep calm and look Culture channel");
} else {console.log("Technical work");}