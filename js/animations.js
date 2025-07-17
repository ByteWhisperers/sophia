// Advanced animations and interactions
document.addEventListener('DOMContentLoaded', function() {
    initAdvancedAnimations();
    initParallaxEffects();
    initHoverEffects();
    initTypingAnimation();
});

function initAdvancedAnimations() {
    // Stagger animations for cards
    staggerCardAnimations();
    
    // Chart bar animations
    animateChartBars();
    
    // Floating elements
    initFloatingElements();
    
    // Pulse animations for important elements
    initPulseAnimations();
}

function staggerCardAnimations() {
    const cards = document.querySelectorAll('.problem-card, .testimonial');
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const cards = entry.target.parentElement.querySelectorAll('.problem-card, .testimonial');
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, index * 150);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    // Observe the parent containers
    const problemGrid = document.querySelector('.problem-grid');
    const testimonialsContainer = document.querySelector('.testimonials');
    
    if (problemGrid) {
        // Set initial state for problem cards
        const problemCards = problemGrid.querySelectorAll('.problem-card');
        problemCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'all 0.6s ease-out';
        });
        observer.observe(problemGrid);
    }
    
    if (testimonialsContainer) {
        // Set initial state for testimonials
        const testimonials = testimonialsContainer.querySelectorAll('.testimonial');
        testimonials.forEach(testimonial => {
            testimonial.style.opacity = '0';
            testimonial.style.transform = 'translateY(30px)';
            testimonial.style.transition = 'all 0.6s ease-out';
        });
        observer.observe(testimonialsContainer);
    }
}

function animateChartBars() {
    const chartBars = document.querySelectorAll('.chart-bar');
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bars = entry.target.querySelectorAll('.chart-bar');
                bars.forEach((bar, index) => {
                    setTimeout(() => {
                        bar.style.width = bar.style.getPropertyValue('--percentage') || '0%';
                    }, index * 200);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    const chartContainer = document.querySelector('.chart-container');
    if (chartContainer) {
        // Set initial state
        chartBars.forEach(bar => {
            const targetWidth = bar.style.getPropertyValue('--percentage') || '0%';
            bar.style.setProperty('--target-width', targetWidth);
            bar.style.width = '0%';
            bar.style.transition = 'width 1s ease-out';
        });
        observer.observe(chartContainer);
    }
}

function initFloatingElements() {
    const floatingElements = document.querySelectorAll('.hero-stats .stat-item, .fixed-donation-btn');
    
    floatingElements.forEach((element, index) => {
        element.style.animation = `float 3s ease-in-out infinite`;
        element.style.animationDelay = `${index * 0.5}s`;
    });
}

function initPulseAnimations() {
    // Pulse animation for CTA buttons
    const ctaButtons = document.querySelectorAll('.cta-button-primary, .cta-button-donation');
    
    ctaButtons.forEach(button => {
        setInterval(() => {
            if (!button.matches(':hover') && !button.disabled) {
                button.style.animation = 'pulse 0.6s ease-in-out';
                setTimeout(() => {
                    button.style.animation = '';
                }, 600);
            }
        }, 5000);
    });
}

function initParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.hero-background');
    
    if (parallaxElements.length === 0) return;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        parallaxElements.forEach(element => {
            element.style.transform = `translateY(${rate}px)`;
        });
    }
    
    // Use throttled scroll for better performance
    window.addEventListener('scroll', throttle(updateParallax, 16));
}

function initHoverEffects() {
    // Enhanced hover effects for cards
    const cards = document.querySelectorAll('.problem-card, .testimonial, .amount-btn');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '';
        });
    });
    
    // Magnetic effect for buttons
    const magneticButtons = document.querySelectorAll('.cta-button-primary, .cta-button-donation');
    
    magneticButtons.forEach(button => {
        button.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            this.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
}

function initTypingAnimation() {
    const typingElements = document.querySelectorAll('.typing-text');
    
    typingElements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        element.classList.add('typing-animation');
        
        let i = 0;
        const typeInterval = setInterval(() => {
            element.textContent += text.charAt(i);
            i++;
            
            if (i >= text.length) {
                clearInterval(typeInterval);
                element.classList.remove('typing-animation');
            }
        }, 100);
    });
}

// Advanced scroll effects
function initAdvancedScrollEffects() {
    // Reveal text on scroll
    const textElements = document.querySelectorAll('p, h1, h2, h3');
    
    const textObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    textElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease-out';
        textObserver.observe(element);
    });
}

// Mouse trail effect
function initMouseTrail() {
    const trail = [];
    const trailLength = 10;
    
    for (let i = 0; i < trailLength; i++) {
        const dot = document.createElement('div');
        dot.className = 'trail-dot';
        dot.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: rgba(74, 144, 226, ${1 - i / trailLength});
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: all 0.1s ease-out;
        `;
        document.body.appendChild(dot);
        trail.push(dot);
    }
    
    document.addEventListener('mousemove', function(e) {
        trail.forEach((dot, index) => {
            setTimeout(() => {
                dot.style.left = e.clientX + 'px';
                dot.style.top = e.clientY + 'px';
            }, index * 20);
        });
    });
}

// Particle effect for hero section
function initParticleEffect() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle-container';
    particleContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
    `;
    
    hero.appendChild(particleContainer);
    
    // Create particles
    for (let i = 0; i < 50; i++) {
        createParticle(particleContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const size = Math.random() * 4 + 2;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const duration = Math.random() * 20 + 10;
    
    particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: rgba(255, 255, 255, 0.6);
        border-radius: 50%;
        left: ${x}%;
        top: ${y}%;
        animation: float ${duration}s ease-in-out infinite;
    `;
    
    container.appendChild(particle);
    
    // Remove and recreate particle after animation
    setTimeout(() => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
            createParticle(container);
        }
    }, duration * 1000);
}

// Intersection Observer for performance
function createPerformantObserver(callback, options = {}) {
    const defaultOptions = {
        threshold: 0.1,
        rootMargin: '50px'
    };
    
    return new IntersectionObserver(callback, { ...defaultOptions, ...options });
}

// Utility function for easing animations
function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
}

function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

// Export functions
window.initAdvancedAnimations = initAdvancedAnimations;
window.initParticleEffect = initParticleEffect;
window.initMouseTrail = initMouseTrail;

