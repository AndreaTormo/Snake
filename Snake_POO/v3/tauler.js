//Tauler 
export class Tauler{
    constructor(mida){
        this.mida = mida;
    }
    crea(){
        for (let fila = 0; fila < this.mida; fila++){
        const files = document.createElement("tr");
    
        for(let columna = 0; columna < this.mida; columna++){
            const columnes = document.createElement("td");
            columnes.id = fila + "-" + columna;
            files.appendChild(columnes);
        }
            document.getElementById("tauler_snake").appendChild(files);             
        }   
    }
}
