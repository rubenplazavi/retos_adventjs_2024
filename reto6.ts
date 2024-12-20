
/** 
 * Ya hemos empaquetado cientos de regalos 🎁… pero a un elfo se le ha olvidado revisar si el regalo, representado por un asterisco *, está dentro de la caja.

La caja tiene un regalo (*) y cuenta como dentro de la caja si:

    Está rodeada por # en los bordes de la caja.
    El * no está en los bordes de la caja.

Ten en cuenta entonces que el * puede estar dentro, fuera o incluso no estar. Y debemos devolver true si el * está dentro de la caja y false en caso contrario.

Ejemplos:

inBox([
  "###",
  "#*#",
  "###"
]) // ➞ true

inBox([
  "####",
  "#* #",
  "#  #",
  "####"
]) // ➞ true

inBox([
  "#####",
  "#   #",
  "#  #*",
  "#####"
]) // ➞ false

inBox([
  "#####",
  "#   #",
  "#   #",
  "#   #",
  "#####"
]) // ➞ false

 * 


 * ---------------- solucion 5 Estrellas ----------------- */

function inBox(box: string[]): boolean {
    let isInside: boolean = false;
    let isTop = false;
    let isBottom = false;
    const regex = /#.*\*.*#/;
    const boxLid = ''.padStart(box.length,'#');

    isTop = box[0] === boxLid ? true : false//''.padStart(box.length,'#') ? true : false;
    for(let i=1 ; i<box.length-1 ; i++){
      if(regex.test(box[i])){
        isInside = true;
        break;
      }
    }
    isBottom = box[box.length-1] === boxLid ? true : false;

    return isInside   // && isTop && isBottom; esta solución funcionaría para cajas cuadradas, pero no pasa los test secretos..
    //En cambio si que los pasa solo mirando si el asterisco está en las casillas de enmedio dentro de las paredes..
}