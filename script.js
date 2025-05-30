document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Trailer modal
    const trailerBtn = document.querySelector('.btn-teaser');
    const modal = document.getElementById('trailerModal');
    const closeModal = document.querySelector('.close-modal');
    
    if (trailerBtn && modal) {
        trailerBtn.addEventListener('click', function(e) {
            e.preventDefault();
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    }
    
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }
    
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Scroll animations
    const animateOnScroll = function() {
        const timelineItems = document.querySelectorAll('.timeline-item');
        const services = document.querySelectorAll('.service-item');
        const galleryItems = document.querySelectorAll('.gallery-item');
        
        timelineItems.forEach((item, index) => {
            const itemTop = item.getBoundingClientRect().top;
            if (itemTop < window.innerHeight - 100) {
                setTimeout(() => {
                    item.style.opacity = '1';
                }, index * 200);
            }
        });
        
        services.forEach((service, index) => {
            const serviceTop = service.getBoundingClientRect().top;
            if (serviceTop < window.innerHeight - 100) {
                setTimeout(() => {
                    service.style.opacity = '1';
                    service.style.transform = 'translateY(0)';
                }, index * 150);
            }
        });
        
        galleryItems.forEach((item, index) => {
            const itemTop = item.getBoundingClientRect().top;
            if (itemTop < window.innerHeight - 100) {
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    };
    
    // Initialize elements with opacity 0 for animation
    const initAnimations = function() {
        const timelineItems = document.querySelectorAll('.timeline-item');
        const services = document.querySelectorAll('.service-item');
        const galleryItems = document.querySelectorAll('.gallery-item');
        
        timelineItems.forEach(item => {
            item.style.opacity = '0';
        });
        
        services.forEach(service => {
            service.style.opacity = '0';
            service.style.transform = 'translateY(20px)';
            service.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        });
        
        galleryItems.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        });
    };
    
    initAnimations();
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);

    // Donation amount buttons
    const amountButtons = document.querySelectorAll('.amount-btn');
    amountButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            amountButtons.forEach(btn => {
                btn.style.borderColor = 'var(--light-gray)';
                btn.style.color = 'var(--ivory)';
            });
            this.style.borderColor = 'var(--gold)';
            this.style.color = 'var(--gold)';
        });
    });

    // Mobile menu toggle (if needed in future)
    // Can be expanded for mobile navigation
});

// Intersection Observer for more performant scroll animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

document.querySelectorAll('.timeline-item, .service-item, .gallery-item').forEach(item => {
    observer.observe(item);
});