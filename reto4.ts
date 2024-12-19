
/** Análisis
 * La base del arbol tiene el (numero introducido * 2) -1, es decir el doble menos uno.
 * - esto se puede computar como el numero introducido -1, para el lado izq más el del centro, más el lado decho lado-1
 * - si nos fijamos, los espacios libres van a ser inversamente proporcionales a los espacios rellenos, 
 * sin contar el centro, irán ambos desde 0 a lado-1 
 */

//  --------------------------------Solución 4 ESTRELLAS ---------------------------------------
function createXmasTree(height: number, ornament: string): string {
  const charsFromCenter = height-1;
  let treeConstruction = ''; 
  for(let i=0 ; i<height ; i++){
    let line='';
    const leftSideTree = line.padStart(charsFromCenter-i, '_') + line.padStart(i, ornament);
    const rigthSideTree = line.padEnd(i,ornament) + line.padEnd(charsFromCenter-i,'_') + '\n'; 
    treeConstruction += leftSideTree + ornament + rigthSideTree;
  }
  const trunc = ''.padEnd(charsFromCenter, '_') + '#' + ''.padEnd(charsFromCenter, '_');
  return treeConstruction + trunc + '\n' + trunc;
}