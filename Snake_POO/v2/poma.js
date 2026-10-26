//Poma
export class Poma{
    constructor(){
        this.posicioPoma = null;
    }
    apareix(n, cos){ //apareix la poma 
        let celda; 
        do{
            let fila_poma = Math.floor(Math.random() * n);
            let columna_poma = Math.floor(Math.random() * n);
            celda = document.getElementById(`${fila_poma}-${columna_poma}`);
    }while(cos.includes(celda));
        this.posicioPoma = celda;
        this.posicioPoma.classList.add("poma");
    }
    menjada(){ //quan la serp se la menja
        this.posicioPoma.classList.remove("poma");
    }
}
