//Versió 2
// El tauler és més gran per a que hi haja més espai. 
// Implementem la poma i la serp se la pot menjar  
// Tenim un contador que compta les vegades que ens mengem la poma i aquesta poma apareix en altre lloc


//Fem el tauler del snake
const tauler_snake = document.getElementById("tauler_snake");
const n = 10;   
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
let cos = [celda_actual]; //el cos de la serp


//Moviment de la serp cap amunt amb W
document.addEventListener("keydown", function (e){
    if(e.key === "w" || e.key === "ArrowUp"){
        if(fila > 0){
            celda_actual.classList.remove("serp");
            fila = fila - 1;
            let celda_nova = document.getElementById(`${fila}-${columna}`);
            celda_nova.classList.add("serp");
            celda_actual = celda_nova;
            menjarPoma();
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
            menjarPoma();
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
            menjarPoma();
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
            menjarPoma();
        }
    }
});

//Crear poma
let celda_poma; 
function posarPoma() {
    let celda; 
    do{
        let fila_poma = Math.floor(Math.random() * n);
        let columna_poma = Math.floor(Math.random() * n);
        celda = document.getElementById(`${fila_poma}-${columna_poma}`);
    }while(cos.includes(celda));
        celda_poma = celda;
        celda_poma.classList.add("poma");
}
posarPoma();

//Comprovem si la serp s'ha menjat la poma
let celda_menjarPoma;
function menjarPoma(){
    if(celda_actual === celda_poma){
        celda_poma.classList.remove("poma");
        contador++; 
        element_contador.textContent = contador;
        posarPoma();
    }
}

//Crear contador punts
let contador = 0;
const element_contador = document.getElementById("contador");
