# 🐍 Snake

Joc del clàssic **Snake** desenvolupat amb **HTML, CSS i JavaScript** (sense llibreries de joc ni frameworks). El projecte mostra l'evolució del joc en dues parts:

1. **JavaScript clàssic** (`Snake/`): 5 versions on el joc va creixent pas a pas, tot en un únic fitxer `snake.js`.
2. **JavaScript amb POO** (`Snake_POO/`): 3 versions on el joc s'ha refet amb **classes i mòduls ES6**, repartint la lògica en fitxers.

---

## 📁 Estructura del projecte

```
Snake/
├── Snake/                      # JavaScript clàssic (un sol fitxer per versió)
│   ├── Versió_1/
│   ├── Versió_2/
│   ├── Versió_3/
│   ├── Versió_4/
│   └── Versió_5/
│       ├── snake.html
│       ├── snake.css
│       └── snake.js
│
└── Snake_POO/                  # JavaScript amb Programació Orientada a Objectes
    ├── v1/
    ├── v2/
    └── v3/                     # Versió més completa
        ├── snake.html
        ├── snake.css
        ├── joc.js              # Punt d'entrada: lògica principal del joc
        ├── tauler.js           # Classe Tauler
        ├── serp.js             # Classe Serp
        ├── poma.js             # Classe Poma
        ├── poma_podrida.js     # Classe PomaPodrida
        ├── historial.js        # Classe Historial
        └── nivells.js          # Classe Nivell
```

---

## 🕹️ Com jugar

| Tecla | Acció |
|-------|-------|
| `W` | Amunt |
| `S` | Avall |
| `A` | Esquerra |
| `D` | Dreta |

- La serp es mou sola; tu només canvies la direcció.
- No es pot anar en direcció contrària a la que portes.
- Fes clic a **"Tornar a començar"** per reiniciar la partida.
---

## 📈 Evolució de les versions

### JavaScript clàssic (`Snake/`)

| Versió | Novetats |
|--------|----------|
| **1** | Tauler de 6x6 i serp que es mou en totes les direccions. |
| **2** | Tauler més gran (10x10). Apareix una poma, la serp se la pot menjar i hi ha un contador de punts. |
| **3** | La serp creix cada vegada que es menja una poma. |
| **4** | Si la serp xoca amb ella mateixa, s'acaba el joc. Botó per tornar a començar. |
| **5** | La serp es mou soles de manera automàtica. |

### JavaScript amb POO (`Snake_POO/`)

| Versió | Novetats |
|--------|----------|
| **v1** | Joc complet separat en classes: `Tauler`, `Serp` i `Poma`. Es perd en xocar contra les parets o contra la mateixa serp. |
| **v2** | Afegeix l'**historial de partides** (`localStorage`) i la **poma podrida**, que resta 2 punts; si els punts arriben a 0, es perd. |
| **v3** | Afegeix **nivells**: cada cert nombre de punts es puja de nivell i el joc va més ràpid. També mostra el nivell als missatges i a l'historial, i hi ha **condició de victòria** (omplir tot el tauler). |

---

## 🧩 Classes (Snake_POO/v3)

| Classe | Fitxer | Responsabilitat |
|--------|--------|-----------------|
| `Tauler` | `tauler.js` | Crea la taula HTML del tauler (10x10) amb una cel·la per posició (`fila-columna`). |
| `Serp` | `serp.js` | Posició, direcció, longitud i cos de la serp. Gestiona el moviment, el creixement i les col·lisions (parets i cos). |
| `Poma` | `poma.js` | Apareix en una cel·la aleatòria lliure i desapareix quan la serp se la menja. |
| `PomaPodrida` | `poma_podrida.js` | Igual que la poma, però resta 2 punts en menjar-se-la. |
| `Historial` | `historial.js` | Guarda i mostra les partides (punts, nivell, resultat i data) al `localStorage`. |
| `Nivell` | `nivells.js` | Controla el nivell actual i la velocitat segons els punts aconseguits. |

`joc.js` és el fitxer principal: crea els objectes, executa el bucle del joc amb `setInterval`, gestiona el teclat i connecta la lògica amb el DOM.

---

## 🎮 Regles del joc (v3)

- 🍎 **Poma**: +1 punt i la serp creix una cel·la.
- 🤢 **Poma podrida**: −2 punts (mai per sota de 0). Si et quedes amb 0 punts, **perds**.
- 🧱 **Parets o cos**: si xoques, **game over**.
- 🏆 **Victòria**: si la serp ocupa tot el tauler.
- 🏁 **Nivells**: a més punts, més velocitat.

| Nivell | Punts necessaris | Velocitat (ms per moviment) |
|:------:|:----------------:|:---------------------------:|
| 1 | 0 | 300 |
| 2 | 5 | 275 |
| 3 | 10 | 250 |
| 4 | 15 | 225 |
| 5 | 20 | 200 |
| 6 | 30 | 180 |
| 7 | 40 | 160 |
| 8 | 50 | 140 |
| 9 | 65 | 120 |
| 10 | 80 | 100 |

---

## 🛠️ Tecnologies

- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**: classes, mòduls (`import` / `export`), `localStorage`
- **[SweetAlert2](https://sweetalert2.github.io/)**: finestres i notificacions (només a la versió POO)

---

## 👤 Autor

Projecte realitzat com a pràctica de JavaScript.
