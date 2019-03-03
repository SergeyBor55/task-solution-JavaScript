/**
 * Created by сергей on 03.07.2018.
 */
/*Объект salaries с зп сотрудников.
1. Напишите функцию проверки на пустоту объекта.
2. Напишите код, который выведет сумму всех зарплат, если объект пустой, то результат должен быть 0.
3. Напишите код, который выведет имя сотрудника с максимальной зп, если объект пуст то пусть выведет «нет сотрудников»
4. Еапишите функцию которая будет добавлять сумму премии к сумме зп сотрудника по его имени в объекте*/

var salaries = {
  "Игорь": 40000,
  "Мария": 35000,
  "Дмитрий": 55000 
};

function isEmptyObj(obj) {
  for (var key in obj){
      return false;
  }
  return true;
}

function sumSalary(obj) {
  var sum = 0;
  for (var key in obj){
      sum += obj[key];
  }
  return sum;
}

function maxSalary(obj) {
	if(isEmpty(obj)) {
		return 'Нет сотрудников';
	} else {
		var maxSalary = 0;
		var name = '';
		for(var key in obj) {
			if(maxSalary < obj[key]) {
				maxSalary = obj[key];
				name = key;
			}
		}
	}
	return name;
}

function addTheAwardToTheEmployee(obj, name, sum) {
	
	if(!name || typeof name !== "string") { 
	    return 'Функция addTheAwardToTheEmployee ожидает вторым параметром строку с "именем" значение';
	}
    else if(!sum || typeof sum !== "number") { 
	    return 'Функция addTheAwardToTheEmployee ожидает третим параметром числовое значение суммы';
	}
    else if(typeof obj !== "object" || isEmptyObj(obj)) {
		return 'Функция addTheAwardToTheEmployee ожидает первым параметром объект и непустой';
    }
	
	for (var key in obj){
      if(name == key) {
		 obj[key] += sum;
		 return obj[key];
	  }   
  }
  return 'Нет сотрудника с таким именем';	
}
//alert(addTheAwardToTheEmployee(salaries, 'Дмитрий', 3000));



//Игра в загадки
var a = 0;
alert('Пивет! Давай поиграем в загадки');
var answer1 = prompt('Зимой и летом одним цветом?');
answer1 = answer1.toLowerCase();
if ('ёлка' == answer1) {
    a++;
    var answer2 = prompt('Правильно! Поехали дальше) Висит груша, нельзя скушать?');
} else {
    var answer2 = prompt('Неверно! Поехали дальше) Висит груша, нельзя скушать?');
}
answer2 = answer2.toLowerCase();
if ('лампочка' == answer2) {
    a++;
    alert('Правильно! Игра окончена. Правильных ответов: ' + a);
} else {
    alert('Неверно! Игра окончена. Правильных ответов: ' + a);
}



/*Создайте функцию filterRange(arr, a, b), которая принимает массив чисел arr и возвращает новый массив,
который содержит только числа из arr из диапазона от a до b.*/
var arr = [5, 4, 3, 8, 0];

function filterRange(arr, a, b) {
    var arr1 = [];
    for(var i =0; i <= arr.length; i++) {
        if(a <= arr[i] && arr[i] <= b)  arr1.push(arr[i]);
    }
    return arr1;
}
var filtered = filterRange(arr, 3, 5);
alert( filtered );



//Расчёт % от вклада в банк
var contribution = +prompt('Введите сумму вклада');
var percent = +prompt('Введите процент');
var i = 1;
while (i <= 5) {
    contribution = contribution + (contribution / 100 * percent)
    alert('Ваша прибыль за ' + i + ' год ' + contribution.toFixed(2))
    i++
}



 /*Есть объект salaries с зарплатами. Напишите код, который выведет имя сотрудника, у которого самая большая зарплата.
 "use strict";*/

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
 alert(name || 'нет сотрудников');



//Угадайте число
var answer = parseInt(Math.random() * 100);
var playerNum = 1;
while (true) {
    var userAnswer = prompt("Игрок " + playerNum + "Угадайте число от 0 до 100");
    userAnswer = parseInt(userAnswer);
    if (userAnswer > answer) {
        alert("Ваш ответ слишком большой.");
    } else if (userAnswer < answer) {
        alert("Ваш ответ слишком маленький.");
    } else if (userAnswer == answer) {
        alert("Вы угадали. Выйграл игрок " + playerNum);
    } else {
        alert("Необходимо ввести число!");
    }

    if (playerNum == 1) {
        playerNum = 2;
    } else {
        playerNum = 2;
    }
}



//Cоздайте функцию isEmpty(obj), которая возвращает true, если в объекте нет свойств и false – если хоть одно свойство есть.
 function isEmpty(obj) {
 var count = 0;
 for(key in schedule) {
 count++;
 }
 return count ? false : true;
 }
 var schedule = {};
 schedule.name = 'vity';
 alert( isEmpty(schedule) );



//Конвертер валют
var a = +prompt("Введите сумму в рублях");
var b = 62;
var c = 70;
var dollar = (a / b).toFixed(2);
var euro = (a / c).toFixed(2);
alert(dollar + " в $ и \n" + euro + " в евро");
