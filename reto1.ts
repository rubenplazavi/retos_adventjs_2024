
/**
 * 
 * @param gifts Santa Claus 🎅🎅 ha recibido una lista de números mágicos que representan regalos 🎁, pero algunos de ellos están duplicados y deben ser eliminados para evitar confusiones. Además, los regalos deben ser ordenados en orden ascendente antes de entregárselos a los elfos.

Tu tarea es escribir una función que reciba una lista de números enteros (que pueden incluir duplicados) y devuelva una nueva lista sin duplicados, ordenada en orden ascendente.
 * @returns 
 */

/** Solución de 3 estrellas */
function prepareGifts(gifts: number[]): number[] {
    const reducedGifts = gifts.reduce((accumulated: number[], current: number) => {   
      if (!accumulated.includes(current)) { 
        accumulated.push(current); 
      } return accumulated; 
    }, []);
      
    return reducedGifts.sort((a,b)=>a-b);
}

// Solución de 5 estrellas:
function prepareGiftsPro(gifts: number[]): number[] {
    const uniqueGifts = [...new Set(gifts)]; 
    // Ordenar la lista en orden ascendente 
    uniqueGifts.sort((a, b) => a - b); return uniqueGifts;
  }