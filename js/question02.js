document.addEventListener('DOMContentLoaded', () => {
    const bodyImage = document.getElementById('body-image');
    const buttons = document.querySelectorAll('.option__button');
    const buttonOpen = document.getElementById('enviar');
    const modal = document.querySelector('dialog');
    const closeModal = document.querySelector('.close');
    const modalMessage = document.querySelector('.modal__message');
    const nextQuestionButton = document.getElementById('next-question');

    const imageMap = {
        'knee': '../assets/images/question02/joelho.png',
        'hand': '../assets/images/question02/mao.png',
        'head': '../assets/images/question02/cabeca.png'
    };

    let selectedPart = null;

    function updateImage(event) {
        selectedPart = event.target.getAttribute('data-part');

        if (selectedPart && imageMap[selectedPart]) {
            bodyImage.src = imageMap[selectedPart];

            buttons.forEach(button => button.classList.remove('selected'));

            event.target.classList.add('selected');
        }
    }

    const correctAnswer = 'head'; 

    function showResult() {
        if (selectedPart === correctAnswer) {
            modalMessage.textContent = 'Resposta correta! Parabéns pelo empenho e vamos para a próxima.';
            nextQuestionButton.style.display = 'block'; 
        } else {
            modalMessage.textContent = 'Hmmm, não é bem isso. Que tal revisar esse tema e tentar novamente?';
            nextQuestionButton.style.display = 'none'; 
        }
        modal.showModal();
    }

    buttons.forEach(button => {
        button.addEventListener('click', updateImage);
    });

    buttonOpen.onclick = () => {
        if (selectedPart !== null) {
            showResult();
        } else {
            alert('Por favor, selecione uma resposta antes de enviar.');
        }
    };

    closeModal.onclick = () => {
        modal.close();
    };

});
