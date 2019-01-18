/**
 * Created by сергей on 05.07.2018.
 */

/*
 // Вычислить сумму чисел до данного через рекурсию
 function sumTo(n) {
 if (n != 1) {
 return n + sumTo(n - 1);
 } return 1;
 }
 alert(sumTo(5));*/



/*
 // Вычислить сумму чисел до данного через цикл.
 function sumTo(n){
 var sum=0;
 for(i=1;1<=n;n--){
 sum+=n
 }
 return sum;
 }
 alert(sumTo(4));*/



/*
 // Вычислить сумму чисел до данного арифметической прогрессии.
 function sumTo(n) {
 return n*(n+1)/2;
 }
 alert(sumTo(3));*/



/*
 // Факториа́л числа
 function factorial(n) {
 if(n!=1){
 return n*factorial(n-1);
 }
 return n;
 }
 alert(factorial(3));*/



/*
 //Метка для выхода из нескольких уровней цикла
 outer:
 for (var i = 5; i < 10; i++) {

 for (var j = 0; j < i; j++) {
 alert('helli');
 break outer;
 }
 var x = prompt('rrr');
 }*/



/*
 // Формула Генерации случайного целого числа между min и max, включая min,max
 function randomInteger(min, max) {
 var rand = min - 0.5 + Math.random() * (max - min + 1);
 rand = Math.round(rand);
 return rand;
 }
 alert( randomInteger(5, 10))*/



/*
 //Как получить дробную часть числа?
 function getDecimal(num) {
 var str = "" + num;
 var zeroPos = str.indexOf(".");
 if (zeroPos == -1) return 0;
 str = str.slice(zeroPos);
 return +str;
 }

 alert( getDecimal(12.5) ); // 0.5
 alert( getDecimal(1.2) ); // 0.2*/



/*var str = "Ослик Иа-Иа посмотрел на виадук"; // ищем в этой строке
 var target = "Иа"; // цель поиска

 var pos = 0;
 while (true) {
 var foundPos = str.indexOf(target, pos);
 if (foundPos == -1) break;

 alert( foundPos ); // нашли на этой позиции
 pos = foundPos + 1; // продолжить поиск со следующей
 }*/


/*
 //Проверьте вхождения строк в строку
 function checkSpam(str) {
 var str = str.toLowerCase();
 if(str.indexOf('viagra') > -1 || str.indexOf('xxx') > -1) {
 return true;
 } else {
 return false;
 }
 }

 alert( checkSpam('XXX iagra') );*/



/*
 // обрезание строки до заданной длины и добавление ...
 function truncate(str, maxlength) {
 if(str.length > maxlength) {
 return str.slice(0, maxlength - 3) + '...';
 }
 return str;
 }

 alert(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));*/



/*
 // функция делает первую букву заглавной
 function ucFirst(str) {
 return str.charAt(0).toUpperCase() + str.slice(1);
 }
 alert(ucFirst(''));*/


/*
 //Создайте функцию isEmpty(obj), которая возвращает true, если в объекте нет свойств и false – если хоть одно свойство есть.
 function isEmpty(obj) {
 var count = 0;
 for(key in schedule) {
 count++;
 }
 return count ? false : true;
 }
 var schedule = {};
 schedule.name = 'vity';
 alert( isEmpty(schedule) ); */


/*
 //Есть объект salaries с зарплатами. Напишите код, который выведет сумму всех зарплат.
 "use strict";

 var salaries = {
 "Вася": 100,
 "Петя": 300,
 "Даша": 250
 };

 function sumSalary(salaries) {
 var sum = 0;
 for(var name in salaries) {
 sum += salaries[name];
 }
 return sum;
 }
 alert( sumSalary(salaries));*/


/*
 //Есть объект salaries с зарплатами. Напишите код, который выведет имя сотрудника, у которого самая большая зарплата.
 "use strict";

 var salaries = {
 "Вася": 100,
 "Петя": 300,
 "Даша": 250
 };

 var maxSalary = 0;
 var name = '';
 for (var key in salaries) {
 if (maxSalary < salaries[key]) {
 maxSalary = salaries[key];
 name = key;
 }
 }
 alert(name || 'нет сотрудников');*/



/*
 //Создайте функцию multiplyNumeric, которая получает объект и умножает все численные свойства на 2. Например:
 var menu = {
 width: 200,
 height: 300,
 title: "My menu"
 };

 function isNumeric(n) {
 return !isNaN(parseFloat(n)) && isFinite(n)
 }

 function multiplyNumeric(menu) {
 for(var key in menu) {
 if(isNumeric(menu[key])) {
 menu[key] *= 2;
 }
 }
 }
 multiplyNumeric(menu);

 alert("menu width=" + menu.width + " height=" + menu.height + " title=" + menu.title);*/



/*Создайте калькулятор для введённых значений

Напишите код, который:

Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.
    Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт «Отмена».
При этом ноль 0 не должен заканчивать ввод, это разрешённое число.
    Выводит сумму всех значений массива*/
/*
var arr = [];
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}


while(true) {
    var number = prompt('Введите число', 0);

    if( isNumeric(number) ) {
        arr[arr.length] = +number;
    } else {
        break;
    }
}
var sum = 0;
for(var i = 0; i < arr.length; i++){
    sum += arr[i];
}
alert(sum);*/


/*
//Создайте функцию find(arr, value), которая ищет в массиве значение и возвращает его номер, если найдено, или -1, если не найдено.
arr = ["test", 2, 1.5, false];

alert( find(arr, "test") ); // 0
alert( find(arr, 2) ); // 1
alert(find(arr, 1.5)); // 2

alert(find(arr, 0));

function find(arr, value) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] === value) {
            return i;
        }
    }
    return -1;
}*/




/*Создайте функцию filterRange(arr, a, b), которая принимает массив чисел arr и возвращает новый массив,
который содержит только числа из arr из диапазона от a до b.*/
/*var arr = [5, 4, 3, 8, 0];

function filterRange(arr, a, b) {
    var arr1 = [];
    for(var i =0; i <= arr.length; i++) {
        if(a <= arr[i] && arr[i] <= b)  arr1.push(arr[i]);
    }
    return arr1;
}
var filtered = filterRange(arr, 3, 5);
alert( filtered );*/



