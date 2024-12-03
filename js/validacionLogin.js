document.querySelector('.btn-ingresar').addEventListener('click', function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe directamente

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validaciones básicas
    if (email === '' || password === '') {
        Swal.fire({
            icon: 'warning',
            title: 'Campos vacíos',
            text: 'Por favor, completa todos los campos antes de continuar.',
            confirmButtonText: 'Aceptar',
        });
        return;
    }

    // Validar un correo específico y contraseña
    if (email === 'admin@maskot.com' && password === '12345') {
        Swal.fire({
            icon: 'success',
            title: 'Inicio de sesión exitoso',
            text: 'Bienvenido Administrador.',
            confirmButtonText: 'Ingresar',
        }).then(() => {
            // Redirigir a otra página
            window.location.href = 'Administrador/DashboardAdmin.html'; // Cambia por tu página de destino
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Credenciales incorrectas',
            text: 'El correo o la contraseña no son válidos. Inténtalo nuevamente.',
            confirmButtonText: 'Reintentar',
        });
    }
});

