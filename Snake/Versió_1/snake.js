//Versió 1
// Només tenim la serp que es meneja cap a tots els costats

//Fem el tauler del snake
const tauler_snake = document.getElementById("tauler_snake");
const n = 6;   
for (let fila = 0; fila < n; fila++) {
    const files = document.createElement("tr");
    
    for(let columna = 0; columna < n; columna++){
        const columnes = document.createElement("td");
        columnes.id = fila + "-" + columna;
        files.appendChild(columnes);
    }
       tauler_snake.appendChild(files);             
}

// Triem on volem que comence la serp
let fila = 0; //és on comença la serp en el 0-0 , on ho hem declarat abans
let columna = 0;
let celda_actual = document.getElementById(`${fila}-${columna}`); 
    celda_actual.classList.add("serp");


//Moviment de la serp cap amunt amb W
document.addEventListener("keydown", function (e){
    if(e.key === "w" || e.key === "ArrowUp"){
        if(fila > 0){
            celda_actual.classList.remove("serp");
            fila = fila - 1;
            let celda_nova = document.getElementById(`${fila}-${columna}`);
            celda_nova.classList.add("serp");
            celda_actual = celda_nova;
        }
    }
});

//Moviment de la serp cap avall amb S
document.addEventListener("keydown", function (e){
    if(e.key === "s" || e.key === "ArrowDown"){
        if(fila < n - 1){
            celda_actual.classList.remove("serp");
            fila = fila + 1;
            let celda_nova = document.getElementById(`${fila}-${columna}`);
            celda_nova.classList.add("serp");
            celda_actual = celda_nova;
        }
    }
});

//Moviment de la serp cap a la dreta amb D
document.addEventListener("keydown", function (e){
    if(e.key === "d" || e.key === "ArrowRight"){
        if(columna < n - 1){
            celda_actual.classList.remove("serp");
            columna = columna + 1;
            let celda_nova = document.getElementById(`${fila}-${columna}`);
            celda_nova.classList.add("serp");
            celda_actual = celda_nova;
        }
    }
});

//Moviment de la serp cap a l'esquerra amb A
document.addEventListener("keydown", function (e){
    if(e.key === "a" || e.key === "ArrowLeft"){
        if(columna > 0){
            celda_actual.classList.remove("serp");
            columna = columna - 1;
            let celda_nova = document.getElementById(`${fila}-${columna}`);
            celda_nova.classList.add("serp");
            celda_actual = celda_nova;
        }
    }
});
