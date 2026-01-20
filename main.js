function runHeaderLogic() {
    const topBar = document.getElementById('top-bar');
    const header = document.getElementById('main-header');
    const navWrapper = document.getElementById('nav-wrapper');
    const logo = document.getElementById('header-logo');

    if (!header) return; // Agar header nahi mila toh wapas jao

    window.onscroll = function() {
        if (window.scrollY > 40) {
            topBar.style.marginTop = '-44px';
            header.style.top = '0px';
            navWrapper.style.paddingTop = '12px';
            navWrapper.style.paddingBottom = '12px';
            logo.style.height = '50px';
        } else {
            topBar.style.marginTop = '0px';
            header.style.top = '44px';
            navWrapper.style.paddingTop = '24px';
            navWrapper.style.paddingBottom = '24px';
            logo.style.height = '90px';
        }
    };

    // Mobile Menu
    document.getElementById('mobile-toggle').onclick = () => document.getElementById('mobile-menu-container').classList.add('active');
    document.getElementById('mobile-close').onclick = () => document.getElementById('mobile-menu-container').classList.remove('active');
    document.getElementById('mobile-about-trigger').onclick = () => document.getElementById('mobile-sub').classList.toggle('open');
}

// Ye important hai: Har 500ms baad check karega jab tak header mil na jaye
const interval = setInterval(() => {
    if (document.getElementById('main-header')) {
        runHeaderLogic();
        clearInterval(interval);
    }
}, 500);