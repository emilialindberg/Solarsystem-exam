 

document.getElementById("sun").addEventListener('click', () => {
    let color = getBackgroundColorById("sun")
    loadPlanet(0, color)
});

document.getElementById("mercery").addEventListener('click', () => {
    let color = getBackgroundColorById("mercery")
    loadPlanet(1, color)
});

document.getElementById("venus").addEventListener('click', () => {
    let color = getBackgroundColorById("venus")
    loadPlanet(2, color)
});

document.getElementById("earth").addEventListener('click', () => {
    let color = getBackgroundColorById("earth")
    loadPlanet(3, color)
});

document.getElementById("mars").addEventListener('click', () => {
    let color = getBackgroundColorById("mars")
    loadPlanet(4, color)
});

document.getElementById("jupiter").addEventListener('click', () => {
    let color = getBackgroundColorById("jupiter")
    loadPlanet(5, color)
});

document.getElementById("saturn").addEventListener('click', () => {
    let color = getBackgroundColorById("saturn")
    loadPlanet(6, color)
});

document.getElementById("uranus").addEventListener('click', () => {
    let color = getBackgroundColorById("uranus")
    loadPlanet(7, color)
});

document.getElementById("neptune").addEventListener('click', () => {
    let color = getBackgroundColorById("neptune")
    loadPlanet(8, color)
});

document.getElementById("back").addEventListener('click', () => {
    back()
});

