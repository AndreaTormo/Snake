// Versió 4
// La serp va creixen a mesura que es va menjant les pomes
// Si la serp xoca amb ella mateixa, s'acaba el joc
// He afegit un botó per a tornar a començar


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
    celda_actual.classList.add("cap_serp");
let cos = [celda_actual]; //el cos de la serp
let longitud = 1;
let game_over = false; //Per a que s'acabe el joc

//Moviment de la serp cap amunt amb W
document.addEventListener("keydown", function (e){
    if(game_over){
        e.stopImmediatePropagation();
    }

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
    if(game_over){
        e.stopImmediatePropagation();
    }

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
    if(game_over){
        e.stopImmediatePropagation();
    }

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
    if(game_over){
        e.stopImmediatePropagation();
    }

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
function menjarPoma(){
    cos.forEach(function(celda){
        celda.classList.remove("cap_serp");  
    });
    let i = cos.indexOf(celda_actual); //Per a saber si la serp s'ha menjat la cola
    if(i !== -1){ //Per a que si es xoca contra alguna part del cos, que es pare el joc
        game_over = true;
        
        cos.forEach(function(celda){ 
            celda.classList.add("serp");
        });
        celda_actual.classList.add("cap_serp");

        setTimeout(function(){
            alert("Game over! Puntos: " + contador);
        }, 50);
        return;
    }

    cos.push(celda_actual);                  
    if(celda_actual === celda_poma){
        celda_poma.classList.remove("poma");
        contador++;
        element_contador.textContent = contador;
        longitud++;
        posarPoma();
    }
    while(cos.length > longitud){
        let cola = cos.shift();
        cola.classList.remove("serp");
    }
    cos.forEach(function(celda){
        celda.classList.add("serp");          
    });

    celda_actual.classList.add("cap_serp");   
}

    function reiniciarJoc(){
        // Tornar a crear el tauler del snake
        document.querySelectorAll("#tauler_snake td").forEach(function(celda){
            celda.classList.remove("serp", "cap_serp", "poma");
        });

        // Tornar-ho tot a la posició inicial
        fila = 0;
        columna = 0;
        celda_actual = document.getElementById("0-0");
        celda_actual.classList.add("serp", "cap_serp");

        // Tornem a resetejar la serp
        cos = [celda_actual];
        longitud = 1;

        // Tornem els punts a 0
        contador = 0;
        element_contador.textContent = contador;

        // Reactivem el joc
        game_over = false;

        // Col·loquem una poma nova
        posarPoma();
    }

    document.getElementById("reiniciar").addEventListener("click", reiniciarJoc);

//Crear contador punts
let contador = 0;
const element_contador = document.getElementById("contador");
