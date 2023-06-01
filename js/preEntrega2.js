
console.log("Por favor ingrese algun alimento de la siguiente lista:");
let opcionesDisponibles = ["manzana", "lasagna", "hamburguesa", "pizza", "cremaDeCacahuate", "avena", "pollo", "proteina", "huevo"];
/* for(i = 0; i < opcionesDisponibles.length; i++){
    console.log(opcionesDisponibles[i]);
} */

opcionesDisponibles.forEach(mostrarListaDeOpciones);

function mostrarListaDeOpciones(alimento) {
    console.log(alimento);
} 


let totalCalorias = 0;
let alimentosInfo = {
  manzana: 52,
  banana: 96,
  naranja: 43,
  yogurt: 150,
  pollo: 239,
  arroz: 130,
  lasagna: 400,
  hamburguesa: 500,
  pizza: 300,
  cremaDeCacahuate: 246,
  avena: 212,
  pollo: 134,
  proteina: 156,
  huevo: 368
};

let alimentosRegistrados = [];
let agregarAlimento = "";
while(agregarAlimento !== "fin"){
    agregarAlimento = prompt('Por favor abra la consola e ingrese un alimento de la lista de alimentos disponibles (se agregarán más), o escriba "fin" para salir. Si aun no ha abierto la consola primero escriba "fin", abra la consola y actualice.');
    if (agregarAlimento !== "fin"){
        alimentosRegistrados.push(agregarAlimento)};
        console.log("Nuevo alimento agregado: ",alimentosRegistrados);
} 

if(agregarAlimento == "fin"){
    for (let encontrarAlimento of alimentosRegistrados) {
        console.log(encontrarAlimento + ": " + alimentosInfo[encontrarAlimento] + "kcal" );
        totalCalorias += alimentosInfo[encontrarAlimento]; // Los corchetes se usan para acceder a una propiedad utilizando una expresión evaludad dinámicamente. Cuando utilizamos la notación objeto.propiedad Javascript buscará una propiedad literalmente llamada como lo que pongamos después del punto. Por tanto esa notación solo nos sirve en caso de que conozcamos el nombre de la propiedad.
    }
}

alert("Has consumido " + totalCalorias + " calorías hasta el momento");


