// Obtén el modal (ventana emergente) y los elementos necesarios
const modal = document.getElementById('login-modal'); // Selecciona el elemento del modal por su ID
const buttons = document.querySelectorAll("button[onClick*='login']"); // Selecciona todos los botones con "login" en su atributo onClick
const closeModal = document.querySelector('.modal .close'); // Selecciona el botón de cierre dentro del modal

// Muestra el modal al hacer clic en cualquier botón relacionado con el login
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        modal.style.display = 'flex'; // Cambia el estilo del modal para que se muestre
    });
});

// Cierra el modal al hacer clic en el botón de cierre
closeModal.addEventListener('click', () => {
    modal.style.display = 'none'; // Cambia el estilo del modal para que desaparezca
});

// Cierra el modal al hacer clic fuera del contenido del modal
window.addEventListener('click', (event) => {
    if (event.target === modal) { // Verifica si el clic fue en el área fuera del contenido
        modal.style.display = 'none'; // Oculta el modal
    }
});
