const attacks = require("./attacks.json");

let crearPersonaje = function(nombre){

    let personaje ={
        name: `${nombre}`,
        class: "",
        firstAttack: "",
        secondAttack: "",
        health: Math.floor(Math.random() * 101) + 100,
        speed: Math.floor(Math.random() * 10) + 1
   } 

   asignarClase(personaje);
   asignarAtaques(personaje);

   return personaje;
}

const asignarClase = function(personaje){
    const clases = ["MAGICIAN", "KNIGHT", "WARRIOR", "FAIRY"];
    personaje.class = clases[Math.floor(Math.random() * clases.length)];
}

const asignarAtaques = function(personaje) {
    if(personaje.class == "MAGICIAN" || personaje.class == "FAIRY"){
        const ataquesMagicos = attacks.filter(attack => attack.type == "MAGIC");
        personaje.firstAttack = ataquesMagicos[Math.floor(Math.random() * ataquesMagicos.length)]
        personaje.secondAttack = ataquesMagicos[Math.floor(Math.random() * ataquesMagicos.length)]
    }else{
        const ataquesFisicos = attacks.filter(attack => attack.type == "PHYSICAL");
        personaje.firstAttack = ataquesFisicos[Math.floor(Math.random() * ataquesFisicos.length)]
        personaje.secondAttack = ataquesFisicos[Math.floor(Math.random() * ataquesFisicos.length)]
    }
  }

module.exports = crearPersonaje;