document.addEventListener('DOMContentLoaded', () => {
    // Dark / Light Mode
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




    // Language Switcher
    const toggleLangBtn = document.getElementById('toggleLang');
    let isArabic = true;

    const texts = {
        ar: {
            title:"محمد الهندي - مصمم ويب",
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
            proj7Title: "Links-Gaza روابط قطاع غزة",
            proj7Desc: "جميع الروابط التي تلزم سكان قطاع غزة",
            formNamePlaceholder: "أدخل اسمك",
            formEmailPlaceholder: "example@email.com",
            formMessagePlaceholder: "اكتب رسالتك هنا...",
            viewProj: "عرض المشروع",
            langBtn: "English"

        },
        en: {
            title:"Mohammed Elhindi - Web Design",
            heroName: "Mohammed Hisham Ismail El-Hindi",
            heroDesc: "Hello friends, I am a Front-end Web Developer working with HTML5, CSS3, Bootstrap5, JavaScript.",
            heroDesc2: "Welcome to my humble page, hope you like it.",
            navAbout: "About Me",
            navPortfolio: "My Projects",
            navSkills: "My Skills",
            navContact: "Contact",
            portfolioTitle: "My Projects",
            skillsTitle: "My Skills",
            contactTitle: "Contact Me",
            footerText: "© 2025 Mohammed H. El-Hindi. All rights reserved.",
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
            proj7Title: "Links-Gaza",
            proj7Desc: "All links required by the residents of the Gaza Strip",
            formNamePlaceholder: "Enter your name",
            formEmailPlaceholder: "example@email.com",
            formMessagePlaceholder: "Write your message here...",
            viewProj: "View Project",
            langBtn: "عربي"
        }
    };

    function updateLanguage(lang) {
        document.getElementById('title').textContent = texts[lang].title;
        document.getElementById('heroName').textContent = texts[lang].heroName;
        document.getElementById('heroDesc').textContent = texts[lang].heroDesc;
        document.getElementById('heroDesc2').textContent = texts[lang].heroDesc2;

        document.querySelector('[href="#about"]').textContent = texts[lang].navAbout;
        document.querySelector('[href="#portfolio"]').textContent = texts[lang].navPortfolio;
        document.querySelector('[href="#skills"]').textContent = texts[lang].navSkills;
        document.querySelector('[href="#contact"]').textContent = texts[lang].navContact;

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
        document.getElementById('proj7Title').textContent = texts[lang].proj7Title;
        document.getElementById('proj7Desc').textContent = texts[lang].proj7Desc;
        const viewProjDivs = document.getElementsByClassName('viewProj');
        for (let i = 0; i < viewProjDivs.length; i++) {
            const link = viewProjDivs[i].querySelector('a'); // اختار الرابط جوّا الـ div
            if (link) {
                link.textContent = texts[isArabic ? 'ar' : 'en'].viewProj;
            }
        }


        document.getElementById('skillsTitle').textContent = texts[lang].skillsTitle;

        document.getElementById('contactTitle').textContent = texts[lang].contactTitle;
        document.getElementById('name').placeholder = texts[lang].formNamePlaceholder;
        document.getElementById('email').placeholder = texts[lang].formEmailPlaceholder;
        document.getElementById('message').placeholder = texts[lang].formMessagePlaceholder;

        document.getElementById('footerText').textContent = texts[lang].footerText;

        toggleLangBtn.textContent = texts[lang].langBtn;
    }

    toggleLangBtn.addEventListener('click', () => {
        isArabic = !isArabic;
        const lang = isArabic ? 'ar' : 'en';
        updateLanguage(lang);
        localStorage.setItem('lang', lang);
    });

    if (localStorage.getItem('lang')) {
        const lang = localStorage.getItem('lang');
        isArabic = (lang === 'ar');
        updateLanguage(lang);
    }





    // Typed.js effect
    const typed = new Typed('#typing', {
        strings: ["مطور واجهات ويب", "مصمم تجربة مستخدم", "Front-End Developer"],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true
    });

    // Animate progress bars on scroll
    const progressBars = document.querySelectorAll('.skill-progress .progress-bar');
    const skillsSection = document.getElementById('skills');

    function fillProgressBars() {
        const sectionPos = skillsSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.2;
        if (sectionPos < screenPos) {
            progressBars.forEach(bar => {
                bar.style.width = bar.getAttribute('data-percentage') + '%';
            });
            window.removeEventListener('scroll', fillProgressBars);
        }
    }

    fillProgressBars();
    window.addEventListener('scroll', fillProgressBars);

    // Contact Form
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const data = {
            name: document.getElementById('name').value,
            _replyto: document.getElementById('email').value,
            message: document.getElementById('message').value
        };
        try {
            const response = await fetch('https://formspree.io/f/xblzkrlz', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
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

const projects = [
    { img: "img/portfolio.webp", link: "https://mohammed-hindi.github.io/my-portfolio/", keyTitle: "proj1Title", keyDesc: "proj1Desc" },
    { img: "img/landingpage.webp", link: "https://mohammed-hindi.github.io/landing_page/", keyTitle: "proj2Title", keyDesc: "proj2Desc" },
    { img: "img/dashboard (2).webp", link: "https://mohammed-hindi.github.io/dashboard/", keyTitle: "proj3Title", keyDesc: "proj3Desc" },
    { img: "img/onlinemedicine.webp", link: "https://mohammed-hindi.github.io/online-medicine/", keyTitle: "proj4Title", keyDesc: "proj4Desc" },
    { img: "img/shopmaster.webp", link: "https://mohammed-hindi.github.io/shop-master/", keyTitle: "proj5Title", keyDesc: "proj5Desc" },
    { img: "img/dailytracker.webp", link: "https://mohammed-hindi.github.io/daily-tracker/", keyTitle: "proj6Title", keyDesc: "proj6Desc" },
    { img: "img/links-gaza.webp", link: "https://mohammed-hindi.github.io/links-gaza/", keyTitle: "proj7Title", keyDesc: "proj7Desc" }
];

function renderProjects(lang) {
    const portfolioContainer = document.querySelector("#portfolio .row");
    const template = document.querySelector(".portfolio-template");

    // إزالة الكاردات القديمة (باستثناء النموذج)
    portfolioContainer.querySelectorAll(".generated-card")?.forEach(c => c.remove());

    projects.forEach(project => {
        const clone = template.cloneNode(true);
        clone.classList.remove("portfolio-template");
        clone.classList.add("generated-card");
        clone.style.display = ""; // إظهار الكارد

        // تحديث الصورة، العنوان، الوصف، والرابط
        clone.querySelector("img").src = project.img;
        clone.querySelector("img").alt = texts[lang][project.keyTitle];
        clone.querySelector(".card-title").textContent = texts[lang][project.keyTitle];
        clone.querySelector(".card-text").textContent = texts[lang][project.keyDesc];
        clone.querySelector(".overlay a").href = project.link;
        clone.querySelector(".overlay a").textContent = texts[lang].viewProj;

        portfolioContainer.appendChild(clone);
    });
}

// تحديث اللغة للبورتفوليو
function updateLanguage(lang) {
    document.getElementById('heroName').textContent = texts[lang].heroName;
    document.getElementById('heroDesc').textContent = texts[lang].heroDesc;
    document.getElementById('heroDesc2').textContent = texts[lang].heroDesc2;
    document.querySelector('[href="#about"]').textContent = texts[lang].navAbout;
    document.querySelector('[href="#portfolio"]').textContent = texts[lang].navPortfolio;
    document.querySelector('[href="#skills"]').textContent = texts[lang].navSkills;
    document.querySelector('[href="#contact"]').textContent = texts[lang].navContact;
    document.getElementById('portfolioTitle').textContent = texts[lang].portfolioTitle;
    document.getElementById('skillsTitle').textContent = texts[lang].skillsTitle;
    document.getElementById('contactTitle').textContent = texts[lang].contactTitle;
    document.getElementById('name').placeholder = texts[lang].formNamePlaceholder;
    document.getElementById('email').placeholder = texts[lang].formEmailPlaceholder;
    document.getElementById('message').placeholder = texts[lang].formMessagePlaceholder;
    document.getElementById('footerText').textContent = texts[lang].footerText;
    toggleLangBtn.textContent = texts[lang].langBtn;

    renderProjects(lang); // توليد مشاريع البورتفوليو حسب اللغة
}

// أول مرة تحميل الصفحة
const initialLang = isArabic ? 'ar' : 'en';
renderProjects(initialLang);
