const NIVELLS = [
    { punts: 0, velocitat: 300 },
    { punts: 5, velocitat: 275 },
    { punts: 10, velocitat: 250 },
    { punts: 15, velocitat: 225 },
    { punts: 20, velocitat: 200 },
    { punts: 30, velocitat: 180 },
    { punts: 40, velocitat: 160 },
    { punts: 50, velocitat: 140 },
    { punts: 65, velocitat: 120 },
    { punts: 80, velocitat: 100 }
];

export class Nivell {
    constructor() {
        this.index = 0;
    }

    get numero() {
        return this.index + 1;
    }

    get velocitat() {
        return NIVELLS[this.index].velocitat;
    }

    potPujar(punts) {
        const seguent = NIVELLS[this.index + 1];
        return seguent !== undefined && punts >= seguent.punts;
    }

    puja() {
        if (this.index < NIVELLS.length - 1) {
            this.index++;
        }
    }

    reinicia() {
        this.index = 0;
    }
}
