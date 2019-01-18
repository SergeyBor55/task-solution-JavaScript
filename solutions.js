/**
 * Created by сергей on 03.07.2018.
 */

<script>
//Конвертер валют
var a = +prompt("Введите сумму в рублях");
var b = 62;
var c = 70;
var dollar = (a / b).toFixed(2);
var euro = (a / c).toFixed(2);
alert(dollar + " в $ и \n" + euro + " в евро");
</script>


<script>
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
</script>


<script>
//Расчёт % от вклада в банк
var contribution = +prompt('Введите сумму вклада');
var percent = +prompt('Введите процент');
var i = 1;
while (i <= 5) {
    contribution = contribution + (contribution / 100 * percent)
    alert('Ваша прибыль за ' + i + ' год ' + contribution.toFixed(2))
    i++
}
</script>


<script>
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
</script>
