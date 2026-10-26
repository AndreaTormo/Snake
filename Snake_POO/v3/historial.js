//Historial
export class Historial{
    constructor(){
        this.clau = "snake_historial";
        this.partides = this.carrega();
    }
    carrega(){ //llegim el historial guardat
        const dades = localStorage.getItem(this.clau);
        return dades ? JSON.parse(dades) : [];
    }
    guarda(){ //guardem al localStorage
        localStorage.setItem(this.clau, JSON.stringify(this.partides));
    }
    afegir(punts, resultat, nivell = 1){ //afegim una partida amb els punts, el resultat i la data
        this.partides.push({ punts: punts, resultat: resultat, nivell: nivell, data: new Date().toLocaleString() });
        this.guarda();
    }
    mostrar(){ //pintem la llista d'historial al DOM
        const llista = document.getElementById("llista_historial");
        if (!llista) return;
        llista.innerHTML = "";
        this.partides.forEach((p, i) => {
            const li = document.createElement("li");
            li.textContent = `Partida ${i + 1}: ${p.punts} punts - Nivell ${p.nivell ?? 1} - ${p.resultat} - ${p.data}`;
            llista.appendChild(li);
        });
    }
}
