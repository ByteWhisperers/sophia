// Donation form functionality - VERSÃO CORRIGIDA

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM carregado, iniciando donation-form.js');
    
    // Amount selection functionality
    const amountButtons = document.querySelectorAll('.amount-btn');
    const customAmountInput = document.getElementById('custom-amount-input');
    const donationButton = document.querySelector('.cta-button-donation');
    let selectedAmount = 0;

    console.log('Elementos encontrados:');
    console.log('- Botões de valor:', amountButtons.length);
    console.log('- Input customizado:', customAmountInput ? 'encontrado' : 'não encontrado');
    console.log('- Botão de doação:', donationButton ? 'encontrado' : 'não encontrado');

    // Handle amount button clicks
    amountButtons.forEach(button => {
        button.addEventListener('click', function() {
            console.log('Clique no botão de valor:', this.dataset.amount);
            
            // Remove active class from all buttons
            amountButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get selected amount
            selectedAmount = parseInt(this.dataset.amount);
            console.log('Valor selecionado:', selectedAmount);
            
            // Clear custom amount input
            if (customAmountInput) {
                customAmountInput.value = '';
            }
            
            // Update donation button text
            updateDonationButton();
            
            // Scroll to donation button and add pulse animation
            scrollToDonationButton();
        });
    });

    // Handle custom amount input
    if (customAmountInput) {
        customAmountInput.addEventListener('input', function() {
            console.log('Input customizado:', this.value);
            
            // Remove active class from all amount buttons
            amountButtons.forEach(btn => btn.classList.remove('active'));
            
            // Get custom amount
            selectedAmount = parseInt(this.value) || 0;
            console.log('Valor customizado selecionado:', selectedAmount);
            
            // Update donation button text
            updateDonationButton();
            
            // If amount is valid, scroll to donation button and add pulse
            if (selectedAmount > 0) {
                scrollToDonationButton();
            }
        });
    }

    // Update donation button text with selected amount
    function updateDonationButton() {
        console.log('Atualizando botão de doação, valor:', selectedAmount);
        if (donationButton && selectedAmount > 0) {
            donationButton.innerHTML = `<i class="fas fa-heart"></i> DOAR R$ ${selectedAmount} PARA SOPHIA!`;
            console.log('Texto do botão atualizado para:', donationButton.innerHTML);
        } else if (donationButton) {
            donationButton.innerHTML = `<i class="fas fa-heart"></i> QUERO DOAR E AJUDAR A SOPHIA!`;
            console.log('Texto do botão resetado');
        }
    }

    // Scroll to donation button and add pulse animation
    function scrollToDonationButton() {
        if (donationButton) {
            // Scroll to the donation button
            donationButton.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
            
            // Add pulse animation after a short delay
            setTimeout(() => {
                donationButton.classList.add('pulse-animation');
                
                // Remove pulse animation after 6 seconds (3 pulses)
                setTimeout(() => {
                    donationButton.classList.remove('pulse-animation');
                }, 6000);
            }, 500);
        }
    }

    // Handle donation button click
    if (donationButton) {
        console.log('Adicionando event listener ao botão de doação');
        donationButton.addEventListener('click', function(e) {
            console.log('CLIQUE NO BOTÃO DE DOAÇÃO DETECTADO!');
            console.log('Valor selecionado:', selectedAmount);
            
            e.preventDefault();
            
            if (selectedAmount > 0) {
                console.log('Redirecionando para:', `pagamento.html?amount=${selectedAmount}`);
                // Redirect to payment page with selected amount
                window.location.href = `pagamento.html?amount=${selectedAmount}`;
            } else {
                console.log('Nenhum valor selecionado, mostrando alerta');
                // Show alert if no amount selected
                alert('Por favor, selecione um valor para doação.');
            }
        });
        console.log('Event listener adicionado com sucesso');
    } else {
        console.error('ERRO: Botão de doação não encontrado!');
    }

    // Newsletter checkbox functionality
    const newsletterCheckbox = document.getElementById('newsletter');
    if (newsletterCheckbox) {
        newsletterCheckbox.addEventListener('change', function() {
            if (this.checked) {
                console.log('User opted in for newsletter updates');
            }
        });
    }
    
    console.log('Inicialização do donation-form.js concluída');
});

