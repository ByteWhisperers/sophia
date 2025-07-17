// Donation form functionality

document.addEventListener('DOMContentLoaded', function() {
    // Amount selection functionality
    const amountButtons = document.querySelectorAll('.amount-btn');
    const customAmountInput = document.getElementById('custom-amount-input');
    const donationButton = document.querySelector('.cta-button-donation');
    let selectedAmount = 0;

    // Handle amount button clicks
    amountButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            amountButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get selected amount
            selectedAmount = parseInt(this.dataset.amount);
            
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
            // Remove active class from all amount buttons
            amountButtons.forEach(btn => btn.classList.remove('active'));
            
            // Get custom amount
            selectedAmount = parseInt(this.value) || 0;
            
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
        if (donationButton && selectedAmount > 0) {
            donationButton.innerHTML = `<i class="fas fa-heart"></i> DOAR R$ ${selectedAmount} PARA SOPHIA!`;
        } else if (donationButton) {
            donationButton.innerHTML = `<i class="fas fa-heart"></i> QUERO DOAR E AJUDAR A SOPHIA!`;
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
        donationButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (selectedAmount > 0) {
                // Redirect to payment page with selected amount
                window.location.href = `pagamento.html?amount=${selectedAmount}`;
            } else {
                // Show alert if no amount selected
                alert('Por favor, selecione um valor para doação.');
            }
        });
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
});

