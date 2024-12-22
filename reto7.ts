/**
 * ¡El grinch 👹 ha pasado por el taller de Santa Claus! Y menudo desastre ha montado. Ha cambiado el orden de algunos paquetes, por lo que los envíos no se pueden realizar.

Por suerte, el elfo Pheralb ha detectado el patrón que ha seguido el grinch para desordenarlos. Nos ha escrito las reglas que debemos seguir para reordenar los paquetes. Las instrucciones que siguen son:

    Recibirás un string que contiene letras y paréntesis.
    Cada vez que encuentres un par de paréntesis, debes voltear el contenido dentro de ellos.
    Si hay paréntesis anidados, resuelve primero los más internos.
    Devuelve el string resultante con los paréntesis eliminados, pero con el contenido volteado correctamente.

Nos ha dejado algunos ejemplos:

fixPackages('a(cb)de')
// ➞ "abcde"
// Volteamos "cb" dentro de los paréntesis

fixPackages('a(bc(def)g)h')
// ➞ "agdefcbh"
// 1º volteamos "def" → "fed", luego volteamos "bcfedg" → "gdefcb"

fixPackages('abc(def(gh)i)jk')
// ➞ "abcighfedjk"
// 1º volteamos "gh" → "hg", luego "defhgi" → "ighfed"

fixPackages('a(b(c))e')
// ➞ "acbe"
// 1º volteamos "c" → "c", luego "bc" → "cb"

 */

/** -------------------- ------------------------ */

// NOTA******** hay que guardar el indice del siguiente número al parentesis...
//........... pero como hacer si hay muchos parentesis seguidos????????????? ej: a(bc(((de)eope)lñe))

//-------------------- Solución de 2 estrellas ------------------ 
//Mejoras a hacer... se puede hacer mejor lo de los indicies, para detectar la siguiente letra y no modificar todo.. 
// de hecho.... se puede hacer mejor buscando y elemininado los ( y nos quedamos con en índice, y reajustamos...
function fixPackages(packages: string): string {
    const pileOfIndexesParenthesis: Array<number> = [];
    let ordenatedPackage: string[] = packages.split('');
    let iterations: number;
    let aux: string;

    for(let i=0; i<packages.length; i++){
        if(packages[i]==='('){
            pileOfIndexesParenthesis.push(i+1);
            continue;
        }
        if(packages[i] === ')'){
            const rightParenthesis = i-1;
            const leftParethesis = pileOfIndexesParenthesis.pop();
            if(leftParethesis){
                iterations = Math.ceil((rightParenthesis-leftParethesis)/2);
                for(let j=0; j<iterations; j++){
                    aux = ordenatedPackage[leftParethesis+j]
                    ordenatedPackage[leftParethesis+j] = ordenatedPackage[rightParenthesis-j]
                    ordenatedPackage[rightParenthesis-j] = aux;
                }
            }
            
        }
    }
    let solucion = ordenatedPackage.join('');
    solucion = solucion.split('(').join('');
    solucion = solucion.split(')').join('');
    return solucion;
  }



  fixPackages('a(cb)de')
// ➞ "abcde"
// Volteamos "cb" dentro de los paréntesis

fixPackages('a(bc(def)g)h')
// ➞ "agdefcbh"
// 1º volteamos "def" → "fed", luego volteamos "bcfedg" → "gdefcb"

fixPackages('abc(def(gh)i)jk')
// ➞ "abcighfedjk"
// 1º volteamos "gh" → "hg", luego "defhgi" → "ighfed"

fixPackages('a(b(c))e')
// ➞ "acbe"
// 1º volteamos "c" → "c", luego "bc" → "cb"


  /**
   * function fixPackages(packages: string): string {
    // Code here
    const pileOfIndexesParenthesis: Array<number> = [];
    let ordenatedPackage: string[] = packages.split('');
    let iterations: number;
    let aux: string;

    for(let i=0; i<packages.length; i++){
        if(packages[i]==='('){
            pileOfIndexesParenthesis.push(i);
            continue;
        }
        if(packages[i] === ')'){
            const rightParenthesis = i;
            const leftParethesis = pileOfIndexesParenthesis.pop();
            if(leftParethesis){
                iterations = Math.ceil((rightParenthesis-leftParethesis)/2);
                for(let j=0; j<iterations; j++){
                    aux = ordenatedPackage[leftParethesis+j]
                    ordenatedPackage[leftParethesis+j] = ordenatedPackage[rightParenthesis-j]
                    ordenatedPackage[rightParenthesis-j] = aux;
                }
            }
            
        }
    }
    let solucion = ordenatedPackage.join('');
    solucion=solucion.split('(').join('');
    solucion=solucion.split(')').join('');
    return solucion;
  }

   */