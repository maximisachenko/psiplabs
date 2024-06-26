function calculateFormula() {
    var t = parseFloat(prompt("Введите значение t:"));
    var resultOutput = document.getElementById('resultOutput');
    resultOutput.innerHTML = '';

    if (isNaN(t)) {
        alert("Пожалуйста, введите числовое значение.");
        return;
    }

    try {
        var numerator = -t + Math.sqrt(7 + t);
        var denominator = 8 - Math.abs(t);

        if (denominator === 0) {
            throw new Error("Деление на ноль невозможно.");
        }

        var f = numerator / denominator;

        if (isNaN(f) || !isFinite(f)) {
            throw new Error("Ошибка в расчёте.");
        }

        resultOutput.innerHTML = "Результат расчёта: f = " + f.toFixed(2);
    } catch (error) {
        alert("Ошибка: " + error.message);
    }
}

function calculateStringOperations() {
    var s1 = "Я люблю Беларусь";
    var s2 = "Я учусь в Политехническом колледже";
    var n = 7;

    var outputDiv = document.getElementById('stringOutput');
    outputDiv.innerHTML = '';

    // 1. Определить длину строки S1
    var s1Length = s1.length;
    var p1 = document.createElement('p');
    p1.textContent = "Длина строки S1: " + s1Length;
    outputDiv.appendChild(p1);

    // 2. Выделить n-ый символ в строке S1 и определить ASCII-код этого символа
    if (n >= 0 && n < s1.length) {
        var nthCharacter = s1.charAt(n);
        var asciiCode = s1.charCodeAt(n);
        var p2 = document.createElement('p');
        p2.textContent = "n-ый символ в строке S1: " + nthCharacter + ", ASCII-код: " + asciiCode;
        outputDiv.appendChild(p2);
    } else {
        var p2Error = document.createElement('p');
        p2Error.textContent = "Ошибка: указанный индекс выходит за границы строки S1";
        outputDiv.appendChild(p2Error);
    }

    // 3. Заменить в строке S2 все встречающиеся буквы "о" на "а"
    var replacedS2 = s2.replace(/о/g, 'а');
    var p3 = document.createElement('p');
    p3.textContent = "Изменённая строка S2: " + replacedS2;
    outputDiv.appendChild(p3);
}