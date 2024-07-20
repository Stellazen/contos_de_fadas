/// question01.js

document.addEventListener('DOMContentLoaded', () => {
    const bodyImage = document.getElementById('body-image');
    const buttons = document.querySelectorAll('.option__button');
    const buttonOpen = document.getElementById('enviar');
    const modal = document.querySelector('dialog');
    const closeModal = document.querySelector('.close');
    const modalMessage = document.getElementById('modal-message');

    // Mapeamento dos valores dos botões para as imagens
    const imageMap = {
        'arm': '../assets/images/arm.png',
        'leg': '../assets/images/leg.png',
        'neck': '../assets/images/neck0.png'
    };

    function updateImage(event) {
        const selectedPart = event.target.getAttribute('data-part');

        if (selectedPart && imageMap[selectedPart]) {
            bodyImage.src = imageMap[selectedPart];
        }
    }

    let correctAnswer = 'leg';


    function showResult(isCorrect) {
        if (isCorrect) {
            modalMessage.textContent = 'Parabéns, você acertou!';
        } else {
            modalMessage.textContent = 'Tente novamente.';
        }
        resultModal.showModal();
    }
    
    buttons.forEach(button => {
        button.addEventListener('click', updateImage);
    });

    buttonOpen.onclick = () => {
        modal.showModal();
    }
    closeModal.onclick = () => {
        modal.close();
    }
});
