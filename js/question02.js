document.addEventListener('DOMContentLoaded', () => {
    const bodyImage = document.getElementById('body-image');
    const buttons = document.querySelectorAll('.option__button');
    const buttonOpen = document.getElementById('enviar');
    const modal = document.querySelector('dialog');
    const closeModal = document.querySelector('.close');
    const modalMessage = document.querySelector('.modal__message');
    const nextQuestionButton = document.getElementById('next-question');

    // Mapeamento dos valores dos botões para as imagens
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

            // Remover a classe 'selected' de todos os botões
            buttons.forEach(button => button.classList.remove('selected'));

            // Adicionar a classe 'selected' ao botão clicado
            event.target.classList.add('selected');
        }
    }

    const correctAnswer = 'head';  // A resposta correta

    function showResult() {
        if (selectedPart === correctAnswer) {
            modalMessage.textContent = 'Resposta correta! Parabéns pelo empenho e vamos para a próxima.';
            nextQuestionButton.style.display = 'block'; // Exibir o botão "Próxima Pergunta"
        } else {
            modalMessage.textContent = 'Hmmm, não é bem isso. Que tal revisar esse tema e tentar novamente?';
            nextQuestionButton.style.display = 'none'; // Ocultar o botão "Próxima Pergunta" se a resposta estiver errada
        }
        modal.showModal();
    }

    buttons.forEach(button => {
        button.addEventListener('click', updateImage);
    });

    buttonOpen.onclick = () => {
        // Apenas abrir o modal se uma resposta foi selecionada
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
