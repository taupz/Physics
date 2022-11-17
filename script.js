console.log("caca");

var conteneur = document.getElementById('cacaID');
var cacaImg = document.createElement('caca')
cacaImg.src = "image/caca.png"
conteneur.append(cacaImg)

const cacaPos = {
    x: 0,
    y: 0
}

const mouse = {
    x: 0,
    y: 0
}

document.addEventListener('mousemove', (e = MouseEvent) => {
    mouse.x = e.clientX
    mouse.y = e.clientY
})

const caca = () => {
    cacaPos.x = lerp(cacaPos.x, mouse.x, 0.05)
    cacaPos.y = lerp(cacaPos.y, mouse.x, 0.05)

    cacaImg.style.transform = 'translate3d${cacaPos.x}px, ${cacaPos.y}px, 0)'
    requestAnimationFrame(caca)
}