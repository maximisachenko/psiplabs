document.addEventListener('DOMContentLoaded', function () {
    const nameElement = document.getElementById('name');
    const birthdateElement = document.getElementById('birthdate');

    // Функция для получения информации о дате и размере HTML-документа
    function getDocumentInfo() {
        const date = new Date();
        const size = document.documentElement.outerHTML.length;
        return `Дата: ${date.toLocaleString()}, Размер: ${size} байт`;
    }

    // Функция для многократного вывода информации
    function displayDocumentInfo() {
        const infoContainer = document.getElementById('info');
        const info = getDocumentInfo();
        const infoElement = document.createElement('div');
        infoElement.textContent = info;
        infoContainer.appendChild(infoElement);
    }

    // Устанавливаем интервал для вывода информации каждые 5 секунд
    setInterval(displayDocumentInfo, 5000);

    // Обработчик события для удаления элемента при щелчке
    nameElement.addEventListener('click', function () {
        nameElement.remove();
    });

    // Обработчик события для изменения стилей элемента при щелчке
    birthdateElement.addEventListener('click', function () {
        birthdateElement.style.color = 'red';
        birthdateElement.style.backgroundColor = 'yellow';
        birthdateElement.style.fontWeight = 'bold';
        birthdateElement.style.fontFamily = 'Arial';
        birthdateElement.style.fontSize = '14px';
        birthdateElement.style.border = '2px solid blue';
    });

    // Проверка, включены ли cookie
    const cookiesEnabled = navigator.cookieEnabled;
    alert(`Cookies включены: ${cookiesEnabled}`);

    // Закрытие текущего окна браузера через 2 секунды
    setTimeout(function () {
        window.close();
    }, 50000);
});
