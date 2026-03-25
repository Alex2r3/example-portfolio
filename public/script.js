// ===== Portafolio JS =====
document.addEventListener('DOMContentLoaded', () => {
    // Active nav on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY + 120;
        sections.forEach(s => {
            if (scrollY >= s.offsetTop && scrollY < s.offsetTop + s.offsetHeight) {
                navLinks.forEach(l => { l.classList.toggle('active', l.getAttribute('href') === '#' + s.id); });
            }
        });
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => { e.preventDefault(); document.querySelector(a.getAttribute('href'))?.scrollIntoView({behavior:'smooth'}); });
    });

    // Skill bars
    const bars = document.querySelectorAll('.skill-bar-fill');
    if (bars.length) {
        const obs = new IntersectionObserver(entries => {
            entries.forEach(e => { if (e.isIntersecting) { e.target.style.width = e.target.dataset.w + '%'; obs.unobserve(e.target); } });
        }, { threshold: 0.5 });
        bars.forEach(b => obs.observe(b));
    }

    // Counters
    document.querySelectorAll('[data-count]').forEach(el => {
        const obs = new IntersectionObserver(entries => {
            entries.forEach(e => {
                if (!e.isIntersecting) return;
                const t = +el.dataset.count; let c = 0; const s = t / 60;
                const tick = () => { c += s; if (c < t) { el.textContent = Math.ceil(c); requestAnimationFrame(tick); } else el.textContent = t; };
                tick(); obs.unobserve(el);
            });
        }, { threshold: 0.5 });
        obs.observe(el);
    });

    // Contact form
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            btn.disabled = true;
            btn.innerHTML = '<i class="bi bi-arrow-repeat"></i> Enviando...';
            setTimeout(() => { window.location.href = '/confirmacion.html'; }, 2000);
        });
    }
});
