const logoGroup = document.querySelector('.navbar__logo-group');

logoGroup.addEventListener('mouseenter', () => {
    const navbarLogo = document.querySelector('.navbar__logo');
    const navbarLogoText = document.querySelector('.navbar__logo-text');

    navbarLogo.classList.add('navbar__logo--hover');
    navbarLogoText.classList.add('navbar__logo-text--hover');
});

logoGroup.addEventListener('mouseleave', () => {
    const navbarLogo = document.querySelector('.navbar__logo');
    const navbarLogoText = document.querySelector('.navbar__logo-text');

    navbarLogo.classList.remove('navbar__logo--hover');
    navbarLogoText.classList.remove('navbar__logo-text--hover');
});