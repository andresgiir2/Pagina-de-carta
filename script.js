document.addEventListener('DOMContentLoaded', function () {
    // Lógica para redirigir desde index.html al login
    const goToLogin = document.getElementById('goToLogin');
    if (goToLogin) {
        goToLogin.addEventListener('click', function () {
            window.location.href = './login/login.html';
        });
    }

    // Lógica para manejar el formulario de login
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Previene el envío del formulario

            const password = document.getElementById('password').value;
            if (password === "06/07/2024") {
                // Redirige a la carta si la contraseña es correcta
                window.location.href = '../carta/carta.html';
            } else {
                alert('Credenciales incorrectas');
            }
        });
    }

    // Lógica para manejar el campo de contraseña con el "ojo"
    const togglePassword = document.getElementById('togglePassword');
    const passwordField = document.getElementById('password');
    if (togglePassword && passwordField) {
        togglePassword.addEventListener('click', function () {
            const type = passwordField.type === 'password' ? 'text' : 'password';
            passwordField.type = type;

            // Cambia el icono según el estado
            this.textContent = type === 'password' ? '👁️' : '🙈';
        });
    }
});



