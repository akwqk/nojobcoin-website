
function enterWebsite() {
    document.body.classList.add('fade-out');
    setTimeout(() => {
        window.location.href = 'main.html';
    }, 1000);
}
function navigateTo(page) {
    window.location.href = page;
}
