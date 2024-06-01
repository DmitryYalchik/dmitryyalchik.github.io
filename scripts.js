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


function addToast(message) {
    const toastContainer = document.getElementById('toastContainer');

    // Create toast element
    const toast = document.createElement('div');
    toast.className = 'toast align-items-center text-bg-success border-0';
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'assertive');
    toast.setAttribute('aria-atomic', 'true');
    toast.setAttribute('data-bs-autohide', 'true');
    toast.setAttribute('data-bs-delay', '5000');

    // Create toast inner HTML
    toast.innerHTML = `
    <div class="toast-header">
    <img src="Assets/success.svg" style="width: 24px; height: 24px;" class="rounded me-2" alt="Success" >
    <strong class="me-auto">Успех</strong>
    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Закрыть"></button>
  </div>
  <div class="toast-body">
    ${message}
  </div>
    `;

    // Append toast to container
    toastContainer.appendChild(toast);

    // Initialize and show toast
    const bsToast = new bootstrap.Toast(toast);
    bsToast.show();

    // Remove toast from DOM after it is hidden
    toast.addEventListener('hidden.bs.toast', () => {
        toast.remove();
    });
}


document.getElementById("submitBtn").addEventListener("click", function(){
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://api.telegram.org/bot"+ document.getElementById("botTokenInput").value + "/sendMessage?chat_id=" + document.getElementById("tgidInput").value + "&text=" + document.getElementById("textTextArea").value, true);
    console.log("https://api.telegram.org/bot"+ document.getElementById("botTokenInput").value + "/sendMessage?chat_id=" + document.getElementById("tgidInput").value + "&text=" + document.getElementById("textTextArea").value);
    xhttp.send();
    addToast("Сообщение успешно отправлено пользователю " + document.getElementById("tgidInput").value);

    document.getElementById("tgidInput").value = "";
    document.getElementById("tgidInput").value = "";
    });

// Проверяем валидность формы при загрузке страницы
document.addEventListener('DOMContentLoaded', checkFormValidity);

// Проверяем валидность формы при каждом изменении в форме
form.addEventListener('input', checkFormValidity);