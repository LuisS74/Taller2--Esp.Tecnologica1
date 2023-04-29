const crearPersonaje = require("./Personaje.js")
const inicCombat = require("./combate.js")

let batalla = function () {
    const personaje1 = crearPersonaje("Juan");
    const personaje2 = crearPersonaje("Pedro");

    let atacante, defensor;

    if (personaje1.speed >= personaje2.speed) {
        atacante = personaje1;
        defensor = personaje2;
    } else {
        atacante = personaje2;
        defensor = personaje1;
    }

    let turno = 0;
    let logs = "";
    let fallo1 = 0;
    let fallo2 = 0;

    logs += ("—---------------------------------------------------------------\n### INICIO ###\n\n")
    logs += `${atacante.name} | ${atacante.class} | ${atacante.health} de vida vs ${defensor.name} | ${defensor.class} | ${personaje2.health} de vida\n\n`
    while (defensor.health > 0 && atacante.health > 0) {
        turno++
        logs += `Turno ${turno}\n\n`;
        let dmgArr = inicCombat(atacante);
        let dmg1 = dmgArr[0];
        if(dmg1 == 0){
            fallo1++
        }
        logs += dmgArr[1];
        defensor.health = (defensor.health - dmg1);
        logs += `${defensor.name} recibe ${dmg1} de daño\nLa vida restante de ${defensor.name} queda en: ${defensor.health}\n\n`;

        if (defensor.health <= 0) {
            logs += `${defensor.name} no puede continuar.\n`;
            logs += ("\n### Resumen ###\n\n")
            logs += `${atacante.name} gana la batalla!\n`
            logs += `${atacante.name} falló ${fallo1} veces su ataque\n`
            logs += `${defensor.name} falló ${fallo2} veces su ataque\n`
            break;
        }

        dmgArr = inicCombat(defensor);
        let dmg2 = dmgArr[0];
        if(dmg2 == 0){
            fallo2++
        }
        logs += dmgArr[1];

        atacante.health = (atacante.health - dmg2);
        logs += `${atacante.name} recibe ${dmg2} de daño\nLa vida restante de ${atacante.name} queda en: ${atacante.health}\n\n`;

        if (atacante.health <= 0) {
            logs += `${atacante.name} no puede continuar.\n`;
            logs += ("\n### Resumen ###\n\n")
            logs += `${defensor.name} gana la batalla!\n`
            logs += `${atacante.name} falló ${fallo1} veces su ataque\n`
            logs += `${defensor.name} falló ${fallo2} veces su ataque\n`
            break;
        }
    }

    return logs;
}


function generateFileLog(logs, filename) {
    const fs = require("fs");

    fs.writeFile(filename, logs, (err) => {
        if (err) throw err;
    });
}

let fightLogs = function () {
    logs = batalla()
    return logs;
}

generateFileLog(fightLogs(), "logs_batalla.txt")
