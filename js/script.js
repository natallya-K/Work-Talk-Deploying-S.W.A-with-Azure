// Chart.js visualization for 'Our Work' section
window.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('dataChart')) {
        // Load Chart.js from CDN if not present
        if (typeof window.Chart === 'undefined') {
            var script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
            script.onload = function() { drawChart(); };
            document.head.appendChild(script);
        } else {
            drawChart();
        }
    }
    function drawChart() {
        var ctx = document.getElementById('dataChart').getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
                datasets: [{
                    label: 'Business Growth (%)',
                    data: [10, 25, 40, 55, 70, 90],
                    borderColor: '#2d3e50',
                    backgroundColor: 'rgba(44,62,80,0.08)',
                    pointBackgroundColor: '#ffd700',
                    pointBorderColor: '#2d3e50',
                    pointRadius: 5,
                    fill: true,
                    tension: 0.3
                }]
            },
            options: {
                plugins: {
                    legend: { display: true, position: 'top' }
                },
                scales: {
                    y: { beginAtZero: true, max: 100 }
                }
            }
        });
    }
});
// Smooth scroll for navigation links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            e.preventDefault();
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Contact form confirmation
const contactForm = document.querySelector('section#contact form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}
