//import "./index.css";
import Cliente from "./clases/Cliente.js";
import Impuesto from "./clases/Impuesto.js";


let impuesto1 = new Impuesto(100000, 2000);
let cliente1 = new Cliente('Juan', impuesto1);
console.log(cliente1.calcularImpuesto());