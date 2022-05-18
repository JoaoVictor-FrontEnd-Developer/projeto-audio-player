let music = document.getElementById("audio");
let faixa = document.getElementsByTagName("source")[0]; //musica que está sendo tocada
let icone = document.getElementsByTagName("i")[1];
let bgMusicContainer = document.querySelector(".music-container");
let bgPhoto = document.querySelector(".photo");
let title = document.getElementById("titulo");
let actor = document.getElementById("actor");

let index = 0;
function play() {
    if (index == 0) {
        music.play();
        icone.setAttribute("class", "fa-solid fa-circle-pause");
        index = 1;
    }

    else if (index == 1) {
        music.pause();
        icone.setAttribute("class", "fa-solid fa-circle-play");
        index = 0;
    }
}

let prox = 1;
function next() {
    prox += 1;

    if (prox == 2) {
        music.currentTime = 0;
        music.pause();
        music.setAttribute("src", "assets/musica" + prox + ".mp3");
        music.play();
        icone.setAttribute("class", "fa-solid fa-circle-pause");
        index = 1;
        bgMusicContainer.style.background = "url(assets/foto" + prox + ".jpg)center center/cover rgba(255, 255, 255, 0.39)";
        bgPhoto.style.background = "url(assets/foto" + prox + ".jpg)center center/cover";
        title.innerHTML = "Psicanalista";
        actor.innerHTML = "Matheus Fonseca";
    }

    else if (prox == 3) {
        music.currentTime = 0;
        music.pause();
        music.setAttribute("src", "assets/musica" + prox + ".mp3");
        music.play();
        icone.setAttribute("class", "fa-solid fa-circle-pause");
        index = 1;
        bgMusicContainer.style.background = "url(assets/foto" + prox + ".jpg)center center/cover rgba(255, 255, 255, 0.39)";
        bgPhoto.style.background = "url(assets/foto" + prox + ".jpg)center center/cover";
        title.innerHTML = "Poesia pra ela";
        actor.innerHTML = "João Napoli";
    }

    else {
        prox -= 1;
    }

}


function back() {
    let anterior = prox;
    anterior -= 1;

    if (anterior == 1) {
        music.pause();
        music.setAttribute("src", "assets/musica" + anterior + ".mp3");
        music.play();
        icone.setAttribute("class", "fa-solid fa-circle-pause");
        index = 1;
        bgMusicContainer.style.background = "url(assets/foto" + anterior + ".jpg)center center/cover rgba(255, 255, 255, 0.39)";
        bgPhoto.style.background = "url(assets/foto" + anterior + ".jpg)center center/cover";
        title.innerHTML = "Girassol";
        actor.innerHTML = "Whindersson Nunes";
    }

    else if (anterior == 2) {
        music.currentTime = 0;
        music.pause();
        music.setAttribute("src", "assets/musica" + anterior + ".mp3");
        music.play();
        icone.setAttribute("class", "fa-solid fa-circle-pause");
        index = 1;
        bgMusicContainer.style.background = "url(assets/foto" + anterior + ".jpg)center center/cover rgba(255, 255, 255, 0.39)";
        bgPhoto.style.background = "url(assets/foto" + anterior + ".jpg)center center/cover";
        title.innerHTML = "Psicanalista";
        actor.innerHTML = "Matheus Fonseca";
    }

    else {
        anterior += 1;
    }

    prox = anterior;
}







