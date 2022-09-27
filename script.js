let pathPrefix = "./Notes/4-"
let C = new Audio(pathPrefix + "c.wav")
let Cs = new Audio(pathPrefix + "cs.wav")
let D = new Audio(pathPrefix + "d.wav")
let Ds = new Audio(pathPrefix + "ds.wav")
let E = new Audio(pathPrefix + "e.wav")
let F = new Audio(pathPrefix + "f.wav")
let Fs = new Audio(pathPrefix + "fs.wav")
let G = new Audio(pathPrefix + "g.wav")
let Gs = new Audio(pathPrefix + "gs.wav")
let A = new Audio(pathPrefix + "a.wav")
let As = new Audio(pathPrefix + "as.wav")
let B = new Audio(pathPrefix + "b.wav")

let darkTheme = document.querySelector('.link')
let darkIcon = document.querySelector('.icon')

let info_card = document.querySelector('.infoCard')
let info_btn = document.querySelector('.infoCall')

let infCl=0
info_card.addEventListener('click', infoOut )

let octave=document.querySelectorAll('.oct')

const whiteBinds = {
    "A": 0,
    "S": 1,
    "D": 2,
    "F": 3,
    "G": 4,
    "H": 5,
    "J": 6,
    "a": 0,
    "s": 1,
    "d": 2,
    "f": 3,
    "g": 4,
    "h": 5,
    "j": 6
}

const blackBinds = {
    "W": 0,
    "E": 1,
    "T": 2,
    "Y": 3,
    "U": 4,
    "w": 0,
    "e": 1,
    "t": 2,
    "y": 3,
    "u": 4
}

let whiteKeys = [C, D, E, F, G, A, B]
for (let i = 0; i < whiteKeys.length; i++) {
    whiteKeys[i].volume = 0.4
}

let blackKeys = [Cs, Ds, Fs, Gs, As]
for (let i = 0; i < blackKeys.length; i++) {
    blackKeys[i].volume = 0.4
}

let white = document.querySelectorAll('.white_keys')
let black = document.querySelectorAll('.black_keys')


for (let i = 0; i < white.length; i++) {
    white[i].addEventListener('click', function () {
        audioReset(whiteKeys[i])
        whiteKeys[i].play()
    })
}

for (let i = 0; i < black.length; i++) {
    black[i].addEventListener('click', function () {
        audioReset(blackKeys[i])
        blackKeys[i].play()
    })
}

document.body.addEventListener("keydown", ew => {
    white[whiteBinds[ew.key]].style.background = "radial-gradient(circle at 18.7% 37.8%, rgb(250, 250, 250) 0%, rgb(225, 234, 238) 90%)"
    white[whiteBinds[ew.key]].style.boxShadow = "inset -0.5px 3px 5px 2px black"
    audioReset(whiteKeys[whiteBinds[ew.key]])
    whiteKeys[whiteBinds[ew.key]].play()
})

document.body.addEventListener("keyup", ew => {
    white[whiteBinds[ew.key]].style = ""
})

document.body.addEventListener("keydown", eb => {
    black[blackBinds[eb.key]].style.boxShadow = "1px 1px 10px black"
    audioReset(blackKeys[blackBinds[eb.key]])
    blackKeys[blackBinds[eb.key]].play()
})

document.body.addEventListener("keyup", eb => {
    black[blackBinds[eb.key]].style = ""
})

document.body.addEventListener("keydown", e=>{
    console.log(e)
    if(e.key>=1 && e.key<=4){
        octave[e.key-1].style.scale="1.1"
        octChange(e.key)
    }
    else if(e.key=="i" || e.key=="I"){
        if(infCl==0)
            infoCall()
        else
            infoOut()
    }
    else if(e.ctrlKey==true && (e.key=="b" || e.key=="B") )
        toggle()
})

document.body.addEventListener("keyup", e=>{
    octave[e.key-1].style.scale=""
})

function audioReset(a) {
    if (a.paused) {
        a.play();
    } else {
        a.pause();
        a.currentTime = 0
    }
}

function toggle() {
    if (darkTheme.getAttribute('href') == 'style.css') {
        darkTheme.href = 'styledark.css'
        darkIcon.src = "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-dark-lighting-flaticons-lineal-color-flat-icons-2.png"
    }
    else {
        darkTheme.href = 'style.css'
        darkIcon.src = "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-light-lighting-flaticons-lineal-color-flat-icons-6.png"
    }
}

function infoCall() {
    reset = setTimeout(function () {
        info_card.style.left = ""
        info_btn.style.left = ""
    }, 10000)
    info_card.style.left = "0%"
    info_btn.style.left = "-100%"
    infCl=1
}

function infoOut() {
    info_card.style.left = ""
    info_btn.style.left = ""
    clearTimeout(reset)
    infCl=0
}

function octChange(o) {
    pathPrefix = "./Notes/" + o + "-"
    console.log(C)
    C = new Audio(pathPrefix + "c.wav")
    Cs = new Audio(pathPrefix + "cs.wav")
    D = new Audio(pathPrefix + "d.wav")
    Ds = new Audio(pathPrefix + "ds.wav")
    E = new Audio(pathPrefix + "e.wav")
    F = new Audio(pathPrefix + "f.wav")
    Fs = new Audio(pathPrefix + "fs.wav")
    G = new Audio(pathPrefix + "g.wav")
    Gs = new Audio(pathPrefix + "gs.wav")
    A = new Audio(pathPrefix + "a.wav")
    As = new Audio(pathPrefix + "as.wav")
    B = new Audio(pathPrefix + "b.wav")
    console.log(C)
    whiteKeys = [C, D, E, F, G, A, B]
    for (let i = 0; i < whiteKeys.length; i++) {
        whiteKeys[i].volume = 0.4
    }

    blackKeys = [Cs, Ds, Fs, Gs, As]
    for (let i = 0; i < blackKeys.length; i++) {
        blackKeys[i].volume = 0.4
    }
}
