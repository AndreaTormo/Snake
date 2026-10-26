//Poma podrida
export class PomaPodrida{
    constructor(){
        this.posicioPoma = null;
    }
    apareix(n, cos){ //apareix la poma podrida
        let celda; 
        do{
            let fila_poma = Math.floor(Math.random() * n);
            let columna_poma = Math.floor(Math.random() * n);
            celda = document.getElementById(`${fila_poma}-${columna_poma}`);
    }while(cos.includes(celda));
        this.posicioPoma = celda;
        this.posicioPoma.classList.add("poma_podrida");
    }
    menjada(){ //quan la serp se la menja
        this.posicioPoma.classList.remove("poma_podrida");
    }
}
