//Serp
export class Serp{
    constructor(tauler){
        this.mida = tauler.mida; 
        this.fila = 0;
        this.columna = 0;
        this.longitud = 1;
        this.direccio = null;
        this.cos = [];
        this.celda_actual = null;
        this.punts = 0;  
    }
    
    apareix(){
        this.celda_actual = document.getElementById(`${this.fila}-${this.columna}`);
        this.celda_actual.classList.add("serp");
        this.celda_actual.classList.add("cap_serp");
        this.cos = [this.celda_actual];
    }

    reinicia(){
        this.fila = 0;
        this.columna = 0;
        this.longitud = 1;
        this.direccio = null;
        this.punts = 0; 
        this.apareix();

    }
    
    moviment() {
        if (this.direccio === "s"){
            this.fila = this.fila + 1;          
        } else if (this.direccio === "w"){
            this.fila = this.fila - 1;         
        } else if (this.direccio === "d"){
            this.columna = this.columna + 1;
        } else if (this.direccio === "a"){
            this.columna = this.columna - 1;
        }

        let celda_nova = document.getElementById(`${this.fila}-${this.columna}`);
        this.celda_actual = celda_nova; 
    }

    comprovarForaTauler(){
        return this.fila < 0 || this.fila >= this.mida || this.columna < 0 || this.columna >= this.mida; 
    }

    comprovarXocCos(){
        return this.cos.includes(this.celda_actual) && this.direccio !== null; 
    }

    actualitzaCos(){
        this.cos.push(this.celda_actual);
        while(this.cos.length > this.longitud){
        let cola = this.cos.shift();
        cola.classList.remove("serp");
        cola.classList.remove("cap_serp");
        }
    }

    pinta(){
        for(const celda of this.cos){
            celda.classList.remove("cap_serp");
            celda.classList.add("serp");
        }
        this.celda_actual.classList.add("cap_serp");
    }

}

