document.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            } else {
                entry.target.classList.remove('is-visible');
            }
        });
    }, {
        threshold: 0.1 // Adjust if needed to trigger earlier or later
    });

    document.querySelectorAll('.section, .header, .nav-item, .btn, .footer').forEach((element) => {
        observer.observe(element);
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const mobileBtn = document.querySelector('.mobile-btn');
    const navMenu = document.querySelector('.nav');

    mobileBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
});
