function executeOperators() {
    var result = "";

    // if
    var x = Math.floor(Math.random() * 10);
    if (x < 5) {
        result += "x ������ 5, ��� ����.<br>";
    } else {
        result += "x ������ ��� ����� 5, ��� �����.<br>";
    }

    // switch
    var color = "�������";
    switch (color) {
        case "�������":
            result += "�� ������� ����� ����.<br>";
            break;
        case "�����":
            result += "�� ������� ��������� ����.<br>";
            break;
        default:
            result += "�� ������� �������� ����.<br>";
    }

    // for
    for (var i = 0; i < 5; i++) {
        result += "���������� ����� " + (i + 1) + ".<br>";
    }

    // while
    var n = 0;
    while (n < 3) {
        result += "n ������ ����� " + n + ".<br>";
        n++;
    }

    // do..while
    var m = 0;
    do {
        result += "�������� m: " + m + ".<br>";
        m++;
    } while (m < 2);

    // break
    for (var j = 0; j < 10; j++) {
        if (j === 5) {
            break;
        }
        result += "������� �������� j: " + j + ".<br>";
    }

    // continue
    for (var k = 0; k < 5; k++) {
        if (k === 2) {
            continue;
        }
        result += "k ����� " + k + ", ����������.<br>";
    }

    // return
    function multiply(a, b) {
        return a * b;
    }
    var product = multiply(3, 4);
    result += "3 �������� �� 4 ����� " + product + ".<br>";

    var resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = result;
}

document.getElementById('submitButton').addEventListener('click', function (event) {
    event.preventDefault(); // ������������� ����������� ��������� ������ submit
    alert('������: ������ �� ����������. ��������� ������� �����.');
});
