
    // Animação nas imagens dos serviços
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'scale(1.1)';
            card.style.transition = 'transform 0.3s ease';
        });

        card.addEventListener('mouseout', () => {
            card.style.transform = 'scale(1)';
        });
    });

    // Validação de Formulário de Agendamento
    function validarAgendamento() {
        const nome = document.getElementById('nome').value;
        const telefone = document.getElementById('telefone').value;
        const data = document.getElementById('data').value;
        const horario = document.getElementById('horario').value;
        
        if (!nome || !telefone || !data) {
            alert("Por favor, preencha todos os campos.");
            return false;
        }
        alert("Agendamento confirmado!");
        return true;
    }
