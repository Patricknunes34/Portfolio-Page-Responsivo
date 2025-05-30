// Initialize Lucide icons
lucide.createIcons();

// Filter functionality
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');

        // Update active button
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Filter projects
        document.querySelectorAll('.project-card').forEach(card => {
            if (filter === 'todos' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
                setTimeout(() => card.classList.add('visible'), 10);
            } else {
                card.classList.remove('visible');
                setTimeout(() => card.style.display = 'none', 300);
            }
        });
    });
});

// Code snippet toggle functionality
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        const codeId = button.getAttribute('data-link');
        if (codeId) {
            const codeBlock = document.getElementById(codeId);
            const allCodeBlocks = button.closest('.code-section').querySelectorAll('pre');
            
            allCodeBlocks.forEach(block => {
                if (block.id === codeId) {
                    block.style.display = block.style.display === 'none' ? 'block' : 'none';
                } else {
                    block.style.display = 'none';
                }
            });
        }
    });
});

// Initialize project cards as visible
document.querySelectorAll('.project-card').forEach(card => {
    card.classList.add('visible');
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const verProjetosBtn = document.getElementById('verProjetosBtn');
    if (verProjetosBtn) {
        verProjetosBtn.addEventListener('click', function() {
            window.open('https://github.com/Patricknunes34?tab=repositories', '_blank');
''        });
    }
});