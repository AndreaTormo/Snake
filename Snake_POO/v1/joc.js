// JOC - VERSIÓ 1
     // Joc normal del snake que aun es menja una poma la serp creix; 
     // Si xoca contra les parets o contra ella mateixa es perd el joc; 

import { Tauler } from "./tauler.js";
import { Serp } from "./serp.js";
import { Poma } from "./poma.js";

const tauler = new Tauler(10);
    tauler.crea();

const snake = new Serp(tauler);
    snake.apareix();

const poma = new Poma();
    poma.apareix(tauler.mida, snake.cos); //hem d'agafar les propietats que ja existeixen;

let id; 

function tic() {
    snake.moviment();
    if(snake.comprovarForaTauler() || snake.comprovarXocCos()){
        clearInterval(id);
        Swal.fire({
                title: "Game over!",
                text: "Points: " + snake.punts,
                icon: "error"
        });
        return;
    } 
    if(snake.celda_actual === poma.posicioPoma){
        poma.menjada();
        poma.apareix(tauler.mida, snake.cos);
        snake.longitud ++;
        snake.punts ++;
        document.getElementById("contador").textContent = snake.punts;
    }
    snake.actualitzaCos();
    snake.pinta();
};


function inicia(){
    clearInterval(id);
    id = setInterval(tic, 300);
}

function reinicia(){ //netegem totes les classes; 
    document.querySelectorAll("td").forEach(celda => {
    celda.classList.remove("serp", "cap_serp", "poma");
    });
    snake.reinicia();//reiniciem joc amb la serp, la poma i tot a 0;
    poma.apareix(tauler.mida, snake.cos);
    document.getElementById("contador").textContent = snake.punts;
    inicia(); 
}

document.getElementById("reiniciar").addEventListener("click", reinicia);

const contraria = { w: "s", s: "w", a: "d", d: "a" };

document.addEventListener("keydown", (e) => {
    const tecla = e.key.toLowerCase();
    if(["w", "a", "s", "d"].includes(tecla) && snake.direccio !== contraria[tecla]){
        snake.direccio = tecla;
    }
});

inicia();

