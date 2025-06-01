document.addEventListener('DOMContentLoaded', () => {

    // CÁLCULO E ATUALIZAÇÃO DA IDADE AUTOMÁTICA
    const dataNascimento = new Date('2004-05-16'); // SUA DATA DE NASCIMENTO AQUI!
    const hoje = new Date();

    let idade = hoje.getFullYear() - dataNascimento.getFullYear();
    const mes = hoje.getMonth() - dataNascimento.getMonth();

    if (mes < 0 || (mes === 0 && hoje.getDate() < dataNascimento.getDate())) {
        idade--;
    }

    const elementoIdade = document.getElementById('idade-automatica');
    if (elementoIdade) {
        elementoIdade.textContent = idade;
    }


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

    // Botões de código abrem o link diretamente
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', () => {
            const externalLink = button.getAttribute('data-link');
            if (externalLink) {
                window.open(externalLink, '_blank');
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

    // Lógica do botão "Ver Projetos"
    const verProjetosBtn = document.getElementById('verProjetosBtn');
    if (verProjetosBtn) {
        verProjetosBtn.addEventListener('click', function() {
            window.open('https://github.com/Patricknunes34?tab=repositories', '_blank');
        });
    }
});
