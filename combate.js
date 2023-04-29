let inicCombat = function (player) {
    let rand = (Math.floor(Math.random() * 2));
    let logs = "";
    let atkUso, dmgTotal;
    if (rand == 0) {
        atkUso = player.firstAttack;
    } else {
        atkUso = player.secondAttack;
    }

    logs += `¡${player.name} ataca con ${atkUso.name}!\n`;

    dmgTotal = calcDano(atkUso);

    if (dmgTotal > 0) {
        logs += "¡Da en el blanco!\n";
    } else {
        logs += "¡Pero falló!\n";
    }

    logs += `Causa ${dmgTotal} de daño\n`;

    return [dmgTotal, logs];
}


let calcDano = function (atk) {
    let hitRate = (Math.floor(Math.random() * 100));
    if (atk.accuracy >= hitRate) {
        return atk.damage;
    } else {
        return 0;
    }
}

module.exports = inicCombat;