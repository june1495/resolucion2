function Persona(nombre, peso, altura) {
  this.nombre = nombre;
  this.peso = peso;
  this.altura = altura;
  this.saludar = () => {
    return `Hola me llamo ${this.nombre}`;
  };
  this.bmi = () => {
    return this.peso / (this.altura * this.altura);
  };
}
// const pedro = new Persona("Pedro", 72, 1.5);
// console.log(pedro.saludar("Maria")); // "Hola Maria, me llamo Pedro"
// console.log(pedro.bmi()); // 32
function Auto() {
  this.velocidad = 0;
  this.acelerar = (e) => {
    this.velocidad += e;
  };
  this.frenar = (e) => {
    this.velocidad -= e;
    if (this.velocidad <= 0) {
      return 0;
    } else return this.velocidad;
  };
}
const a1 = new Auto();
console.log(a1.velocidad); // 0

a1.acelerar(1);
a1.acelerar(2);
console.log(a1.velocidad);
a1.frenar(2);
console.log(a1.velocidad); // 2

a1.frenar(2);
// la velocidad quedaría en -1, así que se deja en 0
a1.velocidad; // 0

String.prototype.palindrome = function () {
  let reg = /[\W_]/g;
  let lowerStr = this.toLowerCase().replace(reg, "");
  let reverseStr = lowerStr.split("").reverse().join("");
  return lowerStr === reverseStr;
};
console.log("anita lava la tina".palindrome());
// Ejercicio 4
// ¿Para qué sirve el Object.create y cómo se relaciona con lo que vimos hoy?
// 4. Crea un nuevo objeto utilizando un objeto existente como el prototipo, seria una forma adicional de crear objetos
