/**
 * Los elfos 🧝🧝‍♂️ de Santa Claus han encontrado un montón de botas mágicas desordenadas en el taller. Cada bota se describe por dos valores:

    type indica si es una bota izquierda (I) o derecha (R).
    size indica el tamaño de la bota.

Tu tarea es ayudar a los elfos a emparejar todas las botas del mismo tamaño que tengan izquierda y derecha. 
Para ello, debes devolver una lista con los pares disponibles después de emparejar las botas.

¡Ten en cuenta que puedes tener más de una zapatilla emparejada del mismo tamaño!
 */
/*
const shoes = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 42 }
  ]
  
  organizeShoes(shoes)
  // [38, 42]
  
  const shoes2 = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'I', size: 38 },
    { type: 'I', size: 38 },
    { type: 'R', size: 38 }
  ]
  // [38, 38]
  
  const shoes3 = [
    { type: 'I', size: 38 },
    { type: 'R', size: 36 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 43 }
  ]
  
  organizeShoes(shoes3)
  // []
  */

  /** Hay muchos planteamientos posibles, busquedas con bucles (2 de ellos), crear un objeto como el creado para el ejercicio 3, hacer un bucle que recorra los elementos, eliminando si encuentra coincidencias los 2 elementos */

  type Shoe = {
    type: 'I' | 'R'
    size: number
  }
  // -------------------- SOLUCIÓN 3 ESTRELLAS ---------------  (mejor que con forEach)
    function organizeShoes(shoes: Shoe[]): number[] {
      let pairedShoes: number[] = [];
      let endShoes = shoes.length;
   
      for(let i=0; i<shoes.length; i++ ){
        const shoe = shoes[i];
        const opositeType = shoe.type==='I' ? 'R' : 'I';

        for(let j=i+1 ; j < endShoes; j++){
            if(shoes[j].type===opositeType && shoes[j].size===shoe.size){
                pairedShoes.push(shoe.size);
                shoes.splice(j,1);
                endShoes--;
                break;
            }
        }
      }
      return pairedShoes;
    }

    const shoes: Shoe[] = [
        { type: 'I', size: 38 },
        { type: 'R', size: 38 },
        { type: 'R', size: 42 },
        { type: 'I', size: 41 },
        { type: 'I', size: 42 }
      ]
      
      organizeShoes(shoes)
      // [38, 42]
      
      const shoes2: Shoe[] = [
        { type: 'I', size: 38 },
        { type: 'R', size: 38 },
        { type: 'I', size: 38 },
        { type: 'I', size: 38 },
        { type: 'R', size: 38 }
      ]
      // [38, 38]
      
      const shoes3: Shoe[] = [
        { type: 'I', size: 38 },
        { type: 'R', size: 36 },
        { type: 'R', size: 42 },
        { type: 'I', size: 41 },
        { type: 'I', size: 43 }
      ]
      
      organizeShoes(shoes3)
      // []

      /*
      ----------------------------------- solucion chatGpt 1 ESTRElla -----------------
function organizeShoes(shoes) {
    var pairedShoes = [];
    var shoesCopy = [...shoes]; // Crear una copia del array

    shoes.forEach(function (shoe) {
        // Solo procesar zapatos que no hayan sido ya emparejados
        var indexInCopy = shoesCopy.findIndex(function (shoewy) {
            return shoewy.type === shoe.type && shoewy.size === shoe.size;
        });

        if (indexInCopy !== -1) {
            var oppositeType = shoe.type === 'I' ? 'R' : 'I';
            var oppositeShoe = shoesCopy.find(function (shoewy) {
                return shoewy.type === oppositeType && shoewy.size === shoe.size;
            });

            if (oppositeShoe) {
                pairedShoes.push(shoe.size);
                // Eliminar ambos zapatos del array copia
                shoesCopy.splice(indexInCopy, 1);
                var oppositeIndex = shoesCopy.findIndex(function (shoewy) {
                    return shoewy.type === oppositeType && shoewy.size === shoe.size;
                });
                shoesCopy.splice(oppositeIndex, 1);
            }
        }
    });

    return pairedShoes;
}
----------------------------------------- solucion ChatGpt 1 Estrella---------------------------------------------

function organizeShoes(shoes) {
    var pairedShoes = [];
    var shoeCount = {};

    shoes.forEach(function (shoe) {
        var oppositeType = shoe.type === 'I' ? 'R' : 'I';
        var key = `${shoe.size}-${oppositeType}`;

        if (shoeCount[key] && shoeCount[key] > 0) {
            pairedShoes.push(shoe.size);
            shoeCount[key]--;
        } else {
            var currentKey = `${shoe.size}-${shoe.type}`;
            if (shoeCount[currentKey]) {
                shoeCount[currentKey]++;
            } else {
                shoeCount[currentKey] = 1;
            }
        }
    });

    return pairedShoes;
}
------------------------------------ SOLUCION ChatGPT - 1 estrella   --------------------------
function organizeShoes(shoes) {
    var pairedShoes = [];
    var shoeMap = {};

    shoes.forEach(function (shoe) {
        var key = `${shoe.size}-${shoe.type}`;
        shoeMap[key] = (shoeMap[key] || 0) + 1;
    });

    for (var sizeType in shoeMap) {
        var [size, type] = sizeType.split("-");
        var oppositeType = type === 'I' ? 'R' : 'I';
        var oppositeKey = `${size}-${oppositeType}`;

        while (shoeMap[sizeType] > 0 && shoeMap[oppositeKey] > 0) {
            pairedShoes.push(parseInt(size));
            shoeMap[sizeType]--;
            shoeMap[oppositeKey]--;
        }
    }

    return pairedShoes;
}



      */