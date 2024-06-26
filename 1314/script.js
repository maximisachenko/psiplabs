document.addEventListener('DOMContentLoaded', function () {
    const nameElement = document.getElementById('name');
    const birthdateElement = document.getElementById('birthdate');

    // ������� ��� ��������� ���������� � ���� � ������� HTML-���������
    function getDocumentInfo() {
        const date = new Date();
        const size = document.documentElement.outerHTML.length;
        return `����: ${date.toLocaleString()}, ������: ${size} ����`;
    }

    // ������� ��� ������������� ������ ����������
    function displayDocumentInfo() {
        const infoContainer = document.getElementById('info');
        const info = getDocumentInfo();
        const infoElement = document.createElement('div');
        infoElement.textContent = info;
        infoContainer.appendChild(infoElement);
    }

    // ������������� �������� ��� ������ ���������� ������ 5 ������
    setInterval(displayDocumentInfo, 5000);

    // ���������� ������� ��� �������� �������� ��� ������
    nameElement.addEventListener('click', function () {
        nameElement.remove();
    });

    // ���������� ������� ��� ��������� ������ �������� ��� ������
    birthdateElement.addEventListener('click', function () {
        birthdateElement.style.color = 'red';
        birthdateElement.style.backgroundColor = 'yellow';
        birthdateElement.style.fontWeight = 'bold';
        birthdateElement.style.fontFamily = 'Arial';
        birthdateElement.style.fontSize = '14px';
        birthdateElement.style.border = '2px solid blue';
    });

    // ��������, �������� �� cookie
    const cookiesEnabled = navigator.cookieEnabled;
    alert(`Cookies ��������: ${cookiesEnabled}`);

    // �������� �������� ���� �������� ����� 2 �������
    setTimeout(function () {
        window.close();
    }, 50000);
});
