document.addEventListener('DOMContentLoaded', () => {
    // ==========================
    // Dark / Light Mode
    // ==========================
    const toggleModeBtn = document.getElementById('toggleMode');
    const body = document.body;

    toggleModeBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        body.classList.toggle('light-mode');
        toggleModeBtn.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
        localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
        updateDarkModeColors();
    });

    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
        toggleModeBtn.textContent = '☀️';
        updateDarkModeColors();
    } else {
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
        toggleModeBtn.textContent = '🌙';
    }

    function updateDarkModeColors() {
        const form = document.getElementById('contactForm');
        const cards = document.querySelectorAll('.portfolio-card');
        const footer = document.getElementById('footerText');

        if (body.classList.contains('dark-mode')) {
            if (form) {
                form.classList.remove('bg-light', 'text-dark');
                form.classList.add('bg-dark', 'text-light');
                form.querySelectorAll('input, textarea').forEach(input => {
                    input.classList.add('bg-secondary', 'text-light');
                });
            }
            cards.forEach(card => card.classList.add('bg-dark', 'text-light'));
            if (footer) {
                footer.classList.add('bg-dark', 'text-light');
                footer.classList.remove('bg-light', 'text-dark');
            }
        } else {
            if (form) {
                form.classList.remove('bg-dark', 'text-light');
                form.classList.add('bg-light', 'text-dark');
                form.querySelectorAll('input, textarea').forEach(input => {
                    input.classList.remove('bg-secondary', 'text-light');
                });
            }
            cards.forEach(card => card.classList.remove('bg-dark', 'text-light'));
            if (footer) {
                footer.classList.remove('bg-dark', 'text-light');
                footer.classList.add('bg-light', 'text-dark');
            }
        }
    }

    // ==========================
    // Language Switcher
    // ==========================
    const toggleLangBtn = document.getElementById('toggleLang');
    let isArabic = true;

    const texts = {
        ar: {
            heroName: "محمد هشام اسماعيل الهندي",
            heroDesc: "مرحبا احبابي,أنا محمد هشام اسماعيل الهندي مصمم واجهات امامية Front-end للمواقع الالكترونية اعمل باستخدام HTML5 , CSS3 , BOOTSTRAP5 , JAVASCRIPT",
            heroDesc2: "اتشرف بكم في صفحتي المتواضعة واتمنى ان تنال اعجابكم.",
            navAbout: "عني",
            navPortfolio: "مشاريعي",
            navSkills: "مهاراتي",
            navContact: "تواصل",
            portfolioTitle: "مشاريعي",
            skillsTitle: "مهاراتي",
            contactTitle: "تواصل معي",
            footerText: "© 2025 محمد الهندي. جميع الحقوق محفوظة.",
            proj1Title: "Portfolio موقع شخصي",
            proj1Desc: "موقع شخصي لعرض البورتفوليو والمهارات.",
            proj2Title: "صفحة هبوط Landing Page",
            proj2Desc: "صفحة هبوط لمنتج Lenovo Legion 5",
            proj3Title: "لوحة تحكم Dashboard",
            proj3Desc: "لوحة تحكم إدارية لإدارة المنتجات والطلبات.",
            proj4Title: "موقع Online-Medicine",
            proj4Desc: "موقع يتيح للزوار حجز مواعيد لدى عيادة",
            proj5Title: "موقع Shop Master",
            proj5Desc: "متجر الكتروني بسيط لبيع الاجهزة الالكترونية",
            proj6Title: "تطبيق ويب Daily Tracker",
            proj6Desc: "يتيح للزوار باضافة المهام اليومية لديهم",
            formNamePlaceholder: "أدخل اسمك",
            formEmailPlaceholder: "example@email.com",
            formMessagePlaceholder: "اكتب رسالتك هنا...",
            langBtn: "English"
        },
        en: {
            heroName: "Mohammed Hisham Ismail Al-Hindi",
            heroDesc: "Hello friends, I am a Front-end Web Developer working with HTML5, CSS3, Bootstrap5, JavaScript.",
            heroDesc2: "Welcome to my humble page, hope you like it.",
            navAbout: "About Me",
            navPortfolio: "My Projects",
            navSkills: "My Skills",
            navContact: "Contact",
            portfolioTitle: "My Projects",
            skillsTitle: "My Skills",
            contactTitle: "Contact Me",
            footerText: "© 2025 Mohammed H. Al-Hindi. All rights reserved.",
            proj1Title: "Portfolio Personal Website",
            proj1Desc: "Personal website to showcase portfolio and skills.",
            proj2Title: "Landing Page",
            proj2Desc: "Landing page for Lenovo Legion 5 product",
            proj3Title: "Dashboard",
            proj3Desc: "Admin dashboard to manage products and orders.",
            proj4Title: "Online-Medicine Website",
            proj4Desc: "Website allowing visitors to book clinic appointments",
            proj5Title: "Shop Master Website",
            proj5Desc: "Simple online store to sell electronic devices",
            proj6Title: "Daily Tracker Web App",
            proj6Desc: "Allows visitors to add their daily tasks",
            formNamePlaceholder: "Enter your name",
            formEmailPlaceholder: "example@email.com",
            formMessagePlaceholder: "Write your message here...",
            langBtn: "عربي"
        }
    };

    function updateLanguage(lang) {
        document.getElementById('heroName').textContent = texts[lang].heroName;
        document.getElementById('heroDesc').textContent = texts[lang].heroDesc;
        document.getElementById('heroDesc2').textContent = texts[lang].heroDesc2;

        // Navbar
        document.querySelector('[href="#about"]').textContent = texts[lang].navAbout;
        document.querySelector('[href="#portfolio"]').textContent = texts[lang].navPortfolio;
        document.querySelector('[href="#skills"]').textContent = texts[lang].navSkills;
        document.querySelector('[href="#contact"]').textContent = texts[lang].navContact;

        // Portfolio
        document.getElementById('portfolioTitle').textContent = texts[lang].portfolioTitle;
        document.getElementById('proj1Title').textContent = texts[lang].proj1Title;
        document.getElementById('proj1Desc').textContent = texts[lang].proj1Desc;
        document.getElementById('proj2Title').textContent = texts[lang].proj2Title;
        document.getElementById('proj2Desc').textContent = texts[lang].proj2Desc;
        document.getElementById('proj3Title').textContent = texts[lang].proj3Title;
        document.getElementById('proj3Desc').textContent = texts[lang].proj3Desc;
        document.getElementById('proj4Title').textContent = texts[lang].proj4Title;
        document.getElementById('proj4Desc').textContent = texts[lang].proj4Desc;
        document.getElementById('proj5Title').textContent = texts[lang].proj5Title;
        document.getElementById('proj5Desc').textContent = texts[lang].proj5Desc;
        document.getElementById('proj6Title').textContent = texts[lang].proj6Title;
        document.getElementById('proj6Desc').textContent = texts[lang].proj6Desc;

        // Skills
        document.getElementById('skillsTitle').textContent = texts[lang].skillsTitle;

        // Contact Form
        document.getElementById('contactTitle').textContent = texts[lang].contactTitle;
        document.getElementById('name').placeholder = texts[lang].formNamePlaceholder;
        document.getElementById('email').placeholder = texts[lang].formEmailPlaceholder;
        document.getElementById('message').placeholder = texts[lang].formMessagePlaceholder;

        // Footer
        document.getElementById('footerText').textContent = texts[lang].footerText;

        // Button
        toggleLangBtn.textContent = texts[lang].langBtn;
    }

    toggleLangBtn.addEventListener('click', () => {
        isArabic = !isArabic;
        const lang = isArabic ? 'ar' : 'en';
        updateLanguage(lang);
    });

    if (localStorage.getItem('lang')) {
        const lang = localStorage.getItem('lang');
        isArabic = (lang === 'ar');
        updateLanguage(lang);
    }

    // ==========================
    // Typed.js effect
    // ==========================
    const typed = new Typed('#typing', {
        strings: ["مطور واجهات ويب", "مصمم تجربة مستخدم", "Front-End Developer"],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true
    });

    // ==========================
    // Animate progress bars on scroll
    // ==========================
    const progressBars = document.querySelectorAll('.skill-progress .progress-bar');
    const skillsSection = document.getElementById('skills');

    window.addEventListener('scroll', () => {
        const sectionPos = skillsSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.2;
        if (sectionPos < screenPos) {
            progressBars.forEach(bar => {
                bar.style.width = bar.getAttribute('data-percentage') + '%';
            });
        }
    });
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', async (e) => {
        e.preventDefault(); // يمنع إعادة تحميل الصفحة

        const data = {
            name: document.getElementById('name').value,
            _replyto: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        try {
            const response = await fetch('https://formspree.io/f/xblzkrlz', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                alert('تم الإرسال بنجاح!');
                form.reset();
            } else {
                alert('حدث خطأ، حاول مرة أخرى.');
            }
        } catch (error) {
            alert('حدث خطأ، حاول مرة أخرى.');
        }
    });
});
