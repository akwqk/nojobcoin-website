
function startJourney() { document.querySelector('.earth-scene').style.display = 'none'; document.querySelector('.space-scene').style.display = 'flex'; }
function continueJourney() { document.querySelector('.space-scene').style.display = 'none'; document.querySelector('.moon-scene').style.display = 'flex'; }
function togglePlanet(planet) { document.getElementById(planet).classList.toggle('active'); }
    