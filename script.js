
function startJourney() {
    document.querySelector('.earth-scene').style.display = 'none';
    document.querySelector('.moon-scene').style.display = 'flex';
}
function navigateTo(page) {
    window.location.href = page;
}
function togglePlanet(phase) {
    document.getElementById(phase).classList.toggle('active');
}
