/**
 * 
 * @param names 
 * Santa Claus 🎅 quiere enmarcar los nombres de los niños buenos para decorar su taller 🖼️, pero el marco debe cumplir unas reglas específicas. Tu tarea es ayudar a los elfos a generar este marco mágico.

Reglas:

    Dado un array de nombres, debes crear un marco rectangular que los contenga a todos.
    Cada nombre debe estar en una línea, alineado a la izquierda.
    El marco está construido con * y tiene un borde de una línea de ancho.
    La anchura del marco se adapta automáticamente al nombre más largo más un margen de 1 espacio a cada lado.

Ejemplo de funcionamiento:

createFrame(['midu', 'madeval', 'educalvolpz'])

// Resultado esperado:
***************
* midu        *
* madeval     *
* educalvolpz *
***************

createFrame(['midu'])

// Resultado esperado:
********
* midu *
********

createFrame(['a', 'bb', 'ccc'])

// Resultado esperado:
*******
* a   *
* bb  *
* ccc *
*******

 * @returns 
 */

function createFrame(names: string[]): string {
    // Code here
  
    //Sacamos el string más largo.
    let long
    const longBiggestWord = names.reduce((acc: number, current)=>{
      if(current.length > acc)
      return current.length;
    return acc;
    }, 0);
  
    const numberOfStars = longBiggestWord + 4;
  
    let concatenatedSolutions: string ='';
  
    for(let i=0; i<numberOfStars ; i++){
      concatenatedSolutions += '*'
    }
    concatenatedSolutions += '\n';
  
    for(let i=0; i<names.length ; i++){
      concatenatedSolutions +=`* ${names[i]} *\n`;
    }
  
    for(let i=0; i<numberOfStars ; i++){
      concatenatedSolutions += '*'
    }
  
    return concatenatedSolutions;
  }

  function fillWordGaps(word: string, totalLength: number){
    while(word.length<totalLength){
      word.concat(' ');
    }
    return word;
  }

  /** ........solución 4 Estrellas.............. */
  function createFrame4Estrellas(names: string[]): string {
    //Sacamos el string más largo.
  const lenghtBiggestWord = names.reduce((acc: number, current)=>{
    if(current.length > acc)
      return current.length;
    return acc;
  }, 0);
  
    const numberOfStars = lenghtBiggestWord + 4;
  
    let concatenatedSolutions: string ='';

  concatenatedSolutions+= '\n'.padStart(numberOfStars+1, '*');
    for(let i=0; i<names.length ; i++){
      concatenatedSolutions +=`* ${names[i].padEnd(lenghtBiggestWord,' ')} *\n`;
    }
  
  concatenatedSolutions+= ''.padStart(numberOfStars, '*');
  
  return concatenatedSolutions;
}