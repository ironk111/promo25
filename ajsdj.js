
//ejercicio no entregable 24/09
class Pc {
    constructor(ram, mother, monitor) {
     this.ram = ram;
     this.mother = mother;
     this.monitor = monitor;
    }
    random() {
     return Math.random() * 100;
    }
   }

   function showTable(obj) {
    console.table(obj);
   }

   function createInstancePc() {
    let ram = prompt("Ingresa RAM");
    let mother = prompt("Ingresa Mother");
    let monitor = prompt("Ingresa Monitor");

    const myPc = new Pc(ram, mother, monitor);

    showTable(myPc);
   }

   createInstancePc();