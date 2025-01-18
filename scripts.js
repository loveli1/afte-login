// Login Modal Functions
function showLoginModal() {
    document.getElementById('loginModal').classList.remove('hidden');
}

function closeLoginModal() {
    document.getElementById('loginModal').classList.add('hidden');
}

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Verifying credentials...');
    // Add your login logic here
});

// Close modal when clicking outside
document.getElementById('loginModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeLoginModal();
    }
});

// Animation for social stats
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    });

    document.querySelectorAll('.service-card, .social-stats-card, .work-item').forEach((el) => {
        observer.observe(el);
    });
});
