// JOC - VERSIÓ 2
     // Joc normal del snake que aun es menja una poma la serp creix; 
     // Si xoca contra les parets o contra ella mateixa es perd el joc;
     // Historial de partides; 
     // Afegim una poma podrida que si se la menja, li restem 2 punts i si es queda sense punts, perd;
     // Cada 5 punts, pugem de nivell i pugem la velocitat del joc;

import { Tauler } from "./tauler.js";
import { Serp } from "./serp.js";
import { Poma } from "./poma.js";
import { PomaPodrida } from "./poma_podrida.js";
import { Historial } from "./historial.js";
import { Nivell } from "./nivells.js";

const tauler = new Tauler(10);
    tauler.crea();

const snake = new Serp(tauler);
    snake.apareix();

const poma = new Poma();
    poma.apareix(tauler.mida, snake.cos); //hem d'agafar les propietats que ja existeixen;

const pomaPodrida = new PomaPodrida();
    pomaPodrida.apareix(tauler.mida, snake.cos.concat([poma.posicioPoma]));

const historial = new Historial();
    historial.mostrar();

const nivell = new Nivell();

let id; 

function actualitzaNivell(){
    const anterior = nivell.numero;
    while(nivell.potPujar(snake.punts)){
        nivell.puja();
    }
    if(nivell.numero === anterior){
        return;
    }
    inicia();
    document.getElementById("nivell").textContent = nivell.numero;
    Swal.fire({
        toast: true,
        position: "top-end",
        title: "Nivell " + nivell.numero + "!",
        icon: "success",
        timer: 1000,
        showConfirmButton: false
    });
}

function tic() {
    snake.moviment();
    if(snake.comprovarForaTauler() || snake.comprovarXocCos()){
        clearInterval(id);
        Swal.fire({
                title: "Game over!",
                text: "Punts: " + snake.punts + " - Nivell: " + nivell.numero,
                icon: "error"
        });
        historial.afegir(snake.punts, "Game over", nivell.numero);
        historial.mostrar();
        return;
    } 
    if(snake.celda_actual === poma.posicioPoma){
        poma.menjada();
        pomaPodrida.menjada();
        poma.apareix(tauler.mida, snake.cos.concat([snake.celda_actual]));
        pomaPodrida.apareix(tauler.mida, snake.cos.concat([snake.celda_actual, poma.posicioPoma]));
        snake.longitud ++;
        snake.punts ++;
        document.getElementById("contador").textContent = snake.punts;
    }
    if(snake.celda_actual === pomaPodrida.posicioPoma){
        pomaPodrida.menjada();
        snake.punts = Math.max(0, snake.punts - 2);
        document.getElementById("contador").textContent = snake.punts;
        if(snake.punts === 0){
            clearInterval(id);
            Swal.fire({
                    title: "Game over!",
                    text: "Punts: " + snake.punts + " - Nivell: " + nivell.numero,
                    icon: "error"
            });
            historial.afegir(snake.punts, "Game over", nivell.numero);
            historial.mostrar();
            return;
        }
        pomaPodrida.apareix(tauler.mida, snake.cos.concat([snake.celda_actual, poma.posicioPoma]));
    }
    snake.actualitzaCos();
    snake.pinta();
    if(snake.longitud === tauler.mida * tauler.mida){ //serp ompli tot el tauler: victoria
        clearInterval(id);
        historial.afegir(snake.punts, "Victòria", nivell.numero);
        historial.mostrar();
        Swal.fire({
                title: "Has guanyat! 🏆",
                text: "Punts: " + snake.punts + " - Nivell: " + nivell.numero,
                icon: "success"
        });
        return;
    }
    actualitzaNivell();
};


function inicia(){
    clearInterval(id);
    id = setInterval(tic, nivell.velocitat);
}

function reinicia(){ //netegem totes les classes; 
    document.querySelectorAll("td").forEach(celda => {
    celda.classList.remove("serp", "cap_serp", "poma", "poma_podrida");
    });
    snake.reinicia();//reiniciem joc amb la serp, la poma i tot a 0;
    poma.apareix(tauler.mida, snake.cos.concat([pomaPodrida.posicioPoma]));
    pomaPodrida.apareix(tauler.mida, snake.cos.concat([poma.posicioPoma]));
    document.getElementById("contador").textContent = snake.punts;
    nivell.reinicia();
    document.getElementById("nivell").textContent = nivell.numero;
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
