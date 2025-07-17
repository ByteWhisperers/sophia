// Payment Page JavaScript

// Copy PIX key function
function copyPixKey() {
    const pixKeyInput = document.getElementById('pix-key');
    const copyButton = document.querySelector('.copy-button');
    
    // Select and copy the text
    pixKeyInput.select();
    pixKeyInput.setSelectionRange(0, 99999); // For mobile devices
    
    try {
        document.execCommand('copy');
        
        // Update button text temporarily
        const originalHTML = copyButton.innerHTML;
        copyButton.innerHTML = '<i class="fas fa-check"></i> Copiado!';
        copyButton.style.background = '#28a745';
        
        setTimeout(() => {
            copyButton.innerHTML = originalHTML;
            copyButton.style.background = '#ffc107';
        }, 2000);
        
        // Show success message
        showNotification('Chave PIX copiada com sucesso!', 'success');
        
    } catch (err) {
        console.error('Erro ao copiar: ', err);
        showNotification('Erro ao copiar. Tente novamente.', 'error');
    }
}

// Show notification function
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#17a2b8'};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
        max-width: 300px;
        font-weight: 500;
    `;
    
    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 10px;
        }
    `;
    document.head.appendChild(style);
    
    // Add to page
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideIn 0.3s ease-out reverse';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Payment option selection
function selectPaymentOption(option) {
    // Remove active class from all options
    document.querySelectorAll('.payment-option').forEach(opt => {
        opt.classList.remove('active');
    });
    
    // Add active class to selected option
    document.getElementById(option + '-option').classList.add('active');
}

// Get donation amount from URL parameters
function getDonationAmount() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('amount') || '0';
}

// Update page with donation amount
function updateDonationAmount() {
    const amount = getDonationAmount();
    if (amount && amount !== '0') {
        // Update title to include amount
        const titleElement = document.querySelector('.payment-section-title h2');
        if (titleElement) {
            titleElement.textContent = `Finalize sua doação de R$ ${parseFloat(amount).toFixed(2).replace('.', ',')}`;
        }
        
        // Update Mercado Pago link with amount (if needed)
        const cardButton = document.querySelector('.card-payment-button');
        if (cardButton) {
            const currentHref = cardButton.getAttribute('href');
            // You can modify the Mercado Pago link to include the amount if their API supports it
            // cardButton.setAttribute('href', currentHref + '?amount=' + amount);
        }
    }
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    updateDonationAmount();
    
    // Add click handlers for payment options
    document.getElementById('pix-option').addEventListener('click', () => selectPaymentOption('pix'));
    document.getElementById('card-option').addEventListener('click', () => selectPaymentOption('card'));
    
    // Track payment method selection
    document.querySelectorAll('.payment-option').forEach(option => {
        option.addEventListener('click', function() {
            const method = this.id.replace('-option', '');
            console.log('Payment method selected:', method);
            
            // You can add analytics tracking here
            // gtag('event', 'payment_method_selected', {
            //     'method': method,
            //     'amount': getDonationAmount()
            // });
        });
    });
    
    // Track external link clicks
    document.querySelector('.card-payment-button').addEventListener('click', function() {
        console.log('Redirecting to Mercado Pago');
        
        // You can add analytics tracking here
        // gtag('event', 'payment_redirect', {
        //     'method': 'credit_card',
        //     'amount': getDonationAmount()
        // });
    });
});

// Add keyboard support for copy function
document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'c') {
        const pixKeyInput = document.getElementById('pix-key');
        if (document.activeElement === pixKeyInput) {
            setTimeout(() => {
                showNotification('Chave PIX copiada!', 'success');
            }, 100);
        }
    }
});

// Auto-select PIX key when clicked
document.getElementById('pix-key').addEventListener('click', function() {
    this.select();
});

// Add smooth scrolling for better UX
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

