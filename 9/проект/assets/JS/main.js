function executeOperators() {
    var result = "";

    // if
    var x = Math.floor(Math.random() * 10);
    if (x < 5) {
        result += "x меньше 5, это мало.<br>";
    } else {
        result += "x больше или равно 5, это много.<br>";
    }

    // switch
    var color = "красный";
    switch (color) {
        case "красный":
            result += "Вы выбрали жёлтый цвет.<br>";
            break;
        case "синий":
            result += "Вы выбрали пурпурный цвет.<br>";
            break;
        default:
            result += "Вы выбрали странный цвет.<br>";
    }

    // for
    for (var i = 0; i < 5; i++) {
        result += "Повторение номер " + (i + 1) + ".<br>";
    }

    // while
    var n = 0;
    while (n < 3) {
        result += "n сейчас равно " + n + ".<br>";
        n++;
    }

    // do..while
    var m = 0;
    do {
        result += "Значение m: " + m + ".<br>";
        m++;
    } while (m < 2);

    // break
    for (var j = 0; j < 10; j++) {
        if (j === 5) {
            break;
        }
        result += "Текущее значение j: " + j + ".<br>";
    }

    // continue
    for (var k = 0; k < 5; k++) {
        if (k === 2) {
            continue;
        }
        result += "k равно " + k + ", продолжаем.<br>";
    }

    // return
    function multiply(a, b) {
        return a * b;
    }
    var product = multiply(3, 4);
    result += "3 умножить на 4 будет " + product + ".<br>";

    var resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = result;
}

document.getElementById('submitButton').addEventListener('click', function (event) {
    event.preventDefault(); // Предотвращаем стандартное поведение кнопки submit
    alert('Ошибка: данные не отправлены. Повторите попытку позже.');
});
