const form = document.getElementById('mainForm');
const submitBtn = document.getElementById('submitBtn');
const textArea = document.getElementById('textTextArea');

// Функция для проверки валидности формы
function checkFormValidity() {
    if (form.checkValidity()) {
        submitBtn.disabled = false; // Если форма валидна, активируем кнопку
    } else {
        submitBtn.disabled = true;  // Иначе, отключаем кнопку
    }
}

document.getElementById("submitBtn").addEventListener("click", function(){
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://api.telegram.org/bot"+ document.getElementById("botTokenInput").value + "/sendMessage?chat_id=" + document.getElementById("tgidInput").value + "&text=" + document.getElementById("textTextArea").value, true);
    console.log("https://api.telegram.org/bot"+ document.getElementById("botTokenInput").value + "/sendMessage?chat_id=" + document.getElementById("tgidInput").value + "&text=" + document.getElementById("textTextArea").value);
    xhttp.send();
    });

// Проверяем валидность формы при загрузке страницы
document.addEventListener('DOMContentLoaded', checkFormValidity);

// Проверяем валидность формы при каждом изменении в форме
form.addEventListener('input', checkFormValidity);