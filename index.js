let currentQuadro = 1;

document.querySelectorAll('.btn, .btn-delete, .btn-enter').forEach(button => {
    button.addEventListener('click', () => {
        const buttonValue = button.textContent;


        const quadrado = document.getElementById(`quadrado-vazio${currentQuadro === 1 ? '' : '-' + currentQuadro}`);

        if (quadrado) {
            quadrado.textContent = buttonValue; 
            currentQuadro++; 
        }
        });
    });