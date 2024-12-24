/**
 * Los elfos programadores están creando un pequeño ensamblador mágico para controlar las máquinas del taller de Santa Claus.

Para ayudarles, vamos a implementar un intérprete sencillo que soporte las siguientes instrucciones mágicas:

    MOV x y: Copia el valor x (puede ser un número o el contenido de un registro) en el registro y
    INC x: Incrementa en 1 el contenido del registro x
    DEC x: Decrementa en 1 el contenido del registro x
    JMP x y: Si el valor del registro x es 0 entonces salta a la instrucción en el índice y y sigue ejecutándose el programa desde ahí.

Comportamiento esperado:

    Si se intenta acceder, incrementar o decrementar a un registro que no ha sido inicializado, se tomará el valor 0 por defecto.
    El salto con JMP es absoluto y lleva al índice exacto indicado por y.
    Al finalizar, el programa debe devolver el contenido del registro A. Si A no tenía un valor definido, retorna undefined.

const instructions = [
  'MOV -1 C', // copia -1 al registro 'C',
  'INC C', // incrementa el valor del registro 'C'
  'JMP C 1', // salta a la instrucción en el índice 1 si 'C' es 0
  'MOV C A', // copia el registro 'C' al registro 'a',
  'INC A' // incrementa el valor del registro 'a'
]

compile(instructions) // -> 2

/**
 Ejecución paso a paso:
 0: MOV -1 C -> El registro C recibe el valor -1
 1: INC C    -> El registro C pasa a ser 0
 2: JMP C 1  -> C es 0, salta a la instrucción en el índice 1
 1: INC C    -> El registro C pasa a ser 1
 2: JMP C 1  -> C es 1, ignoramos la instrucción
 3: MOV C A  -> Copiamos el registro C en A. Ahora A es 1
 4: INC A    -> El registro A pasa a ser 2
 */

 interface Registers { 
    [key: string]: number; 
}

 function compile(instructions: string[]) {
    const registers: Registers = {};
  
    const getValue = (operand: string): number => { 
        if (/^-?\d+$/.test(operand)) {
            return parseInt(operand, 10); 
        } 
        return registers[operand] || 0; };
  
    let index = 0;
    while (index < instructions.length) {
      const [instruction, x, y] = instructions[index].split(' ');
  
      switch (instruction) {
        case 'MOV':
          registers[y] = getValue(x);
          index++;
          break;
        case 'INC':
          registers[x] = (registers[x] || 0) + 1;
          index++;
          break;
        case 'DEC':
          registers[x] = (registers[x] || 0) - 1;
          index++;
          break;
        case 'JMP':
          if (getValue(x) === 0) {
            index = parseInt(y, 10);
          } else {
            index++;
          }
          break;
        default:
          throw new Error(`Unknown instruction: ${instruction}`);
      }
    }
  
    return registers['A'];
  }
  
  // Ejemplo de uso:
  const instructions = [
    'MOV -1 C', // copia -1 al registro 'C'
    'INC C',    // incrementa el valor del registro 'C'
    'JMP C 1',  // salta a la instrucción en el índice 1 si 'C' es 0
    'MOV C A',  // copia el registro 'C' al registro 'A'
    'INC A'     // incrementa el valor del registro 'A'
  ];
  
  console.log(compile(instructions)); // -> 2
  