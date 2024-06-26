function calculateFormula() {
    var t = parseFloat(prompt("������� �������� t:"));
    var resultOutput = document.getElementById('resultOutput');
    resultOutput.innerHTML = '';

    if (isNaN(t)) {
        alert("����������, ������� �������� ��������.");
        return;
    }

    try {
        var numerator = -t + Math.sqrt(7 + t);
        var denominator = 8 - Math.abs(t);

        if (denominator === 0) {
            throw new Error("������� �� ���� ����������.");
        }

        var f = numerator / denominator;

        if (isNaN(f) || !isFinite(f)) {
            throw new Error("������ � �������.");
        }

        resultOutput.innerHTML = "��������� �������: f = " + f.toFixed(2);
    } catch (error) {
        alert("������: " + error.message);
    }
}

function calculateStringOperations() {
    var s1 = "� ����� ��������";
    var s2 = "� ����� � ��������������� ��������";
    var n = 7;

    var outputDiv = document.getElementById('stringOutput');
    outputDiv.innerHTML = '';

    // 1. ���������� ����� ������ S1
    var s1Length = s1.length;
    var p1 = document.createElement('p');
    p1.textContent = "����� ������ S1: " + s1Length;
    outputDiv.appendChild(p1);

    // 2. �������� n-�� ������ � ������ S1 � ���������� ASCII-��� ����� �������
    if (n >= 0 && n < s1.length) {
        var nthCharacter = s1.charAt(n);
        var asciiCode = s1.charCodeAt(n);
        var p2 = document.createElement('p');
        p2.textContent = "n-�� ������ � ������ S1: " + nthCharacter + ", ASCII-���: " + asciiCode;
        outputDiv.appendChild(p2);
    } else {
        var p2Error = document.createElement('p');
        p2Error.textContent = "������: ��������� ������ ������� �� ������� ������ S1";
        outputDiv.appendChild(p2Error);
    }

    // 3. �������� � ������ S2 ��� ������������� ����� "�" �� "�"
    var replacedS2 = s2.replace(/�/g, '�');
    var p3 = document.createElement('p');
    p3.textContent = "��������� ������ S2: " + replacedS2;
    outputDiv.appendChild(p3);
}