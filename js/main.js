// Main JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initScrollAnimations();
    initProgressBar();
    initCounters();
    initSmoothScroll();
    initFixedDonationButton();
    initScrollIndicator();
    initHeaderScroll();
});

// Smooth scroll to sections
function scrollToSection(sectionId) {
    if (sectionId === 'donation') {
        // Check if we're on the main page
        if (window.location.pathname.includes('pagamento.html')) {
            // If on payment page, go back to main page
            window.location.href = 'index.html#donation';
            return;
        }
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const elementPosition = element.offsetTop - headerHeight - 20;
        
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
}

// Initialize smooth scroll for all anchor links
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                
                // Trigger counter animation if it's a stat number
                if (entry.target.classList.contains('stat-number')) {
                    animateCounter(entry.target);
                }
            }
        });
    }, observerOptions);

    // Observe elements with scroll animation classes
    const animatedElements = document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right');
    animatedElements.forEach(el => observer.observe(el));

    // Add scroll animation classes to elements
    addScrollAnimationClasses();
}

function addScrollAnimationClasses() {
    // Story section
    const storyText = document.querySelector('.story-text');
    const storyImage = document.querySelector('.story-image');
    if (storyText) storyText.classList.add('scroll-animate-left');
    if (storyImage) storyImage.classList.add('scroll-animate-right');

    // Problem cards
    const problemCards = document.querySelectorAll('.problem-card');
    problemCards.forEach((card, index) => {
        card.classList.add('scroll-animate');
        card.style.animationDelay = `${index * 0.1}s`;
    });

    // Desire section
    const desireText = document.querySelector('.desire-text');
    const impactChart = document.querySelector('.impact-chart');
    if (desireText) desireText.classList.add('scroll-animate-left');
    if (impactChart) impactChart.classList.add('scroll-animate-right');

    // Testimonials
    const testimonials = document.querySelectorAll('.testimonial');
    testimonials.forEach((testimonial, index) => {
        testimonial.classList.add('scroll-animate');
        testimonial.style.animationDelay = `${index * 0.2}s`;
    });
}

// Progress bar animation
function initProgressBar() {
    const progressFill = document.getElementById('progress-fill');
    const progressPercentage = document.getElementById('progress-percentage');
    
    // Simulate progress (in real implementation, this would come from backend)
    const currentAmount = 12500; // Example current amount
    const targetAmount = 50000;
    const percentage = Math.min((currentAmount / targetAmount) * 100, 100);
    
    setTimeout(() => {
        if (progressFill) {
            progressFill.style.width = `${percentage}%`;
        }
        if (progressPercentage) {
            animateNumber(progressPercentage, 0, percentage, 2000, 1);
        }
    }, 1500);
}

// Counter animations
function initCounters() {
    // Update stats with example data
    updateStats();
}

function updateStats() {
    // Example data (in real implementation, this would come from backend)
    const stats = {
        donors: 247,
        raised: 12500
    };
    
    setTimeout(() => {
        const donorsElement = document.getElementById('donors-count');
        const raisedElement = document.getElementById('raised-amount');
        
        if (donorsElement) {
            animateNumber(donorsElement, 0, stats.donors, 2000);
        }
        if (raisedElement) {
            animateNumber(raisedElement, 0, stats.raised, 2000);
        }
    }, 1000);
}

function animateCounter(element) {
    const target = parseInt(element.textContent.replace(/\D/g, ''));
    if (target > 0) {
        animateNumber(element, 0, target, 2000);
    }
}

function animateNumber(element, start, end, duration, decimals = 0) {
    const startTime = performance.now();
    const difference = end - start;
    
    function updateNumber(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function (ease-out)
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = start + (difference * easeOut);
        
        if (decimals > 0) {
            element.textContent = current.toFixed(decimals);
        } else {
            element.textContent = Math.floor(current).toLocaleString('pt-BR');
        }
        
        if (progress < 1) {
            requestAnimationFrame(updateNumber);
        } else {
            if (decimals > 0) {
                element.textContent = end.toFixed(decimals);
            } else {
                element.textContent = end.toLocaleString('pt-BR');
            }
        }
    }
    
    requestAnimationFrame(updateNumber);
}

// Fixed donation button
function initFixedDonationButton() {
    const fixedBtn = document.getElementById('fixed-donation-btn');
    const donationSection = document.getElementById('donation');
    
    if (!fixedBtn || !donationSection) return;
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                fixedBtn.classList.remove('visible');
            } else {
                fixedBtn.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    
    observer.observe(donationSection);
}

// Scroll indicator
function initScrollIndicator() {
    const scrollIndicator = document.createElement('div');
    scrollIndicator.className = 'scroll-indicator';
    document.body.appendChild(scrollIndicator);
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        scrollIndicator.style.width = `${scrollPercent}%`;
    });
}

// Header scroll effect
function initHeaderScroll() {
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Format currency
function formatCurrency(value) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value);
}

// Validate email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '16px 24px',
        borderRadius: '8px',
        color: 'white',
        fontWeight: '600',
        zIndex: '10000',
        transform: 'translateX(100%)',
        transition: 'transform 0.3s ease-out'
    });
    
    // Set background color based on type
    switch (type) {
        case 'success':
            notification.style.backgroundColor = '#28a745';
            break;
        case 'error':
            notification.style.backgroundColor = '#dc3545';
            break;
        case 'warning':
            notification.style.backgroundColor = '#ffc107';
            notification.style.color = '#212529';
            break;
        default:
            notification.style.backgroundColor = '#17a2b8';
    }
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Export functions for use in other files
window.scrollToSection = scrollToSection;
window.formatCurrency = formatCurrency;
window.isValidEmail = isValidEmail;
window.showNotification = showNotification;

