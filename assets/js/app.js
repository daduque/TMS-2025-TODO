//Console.log()

console.log("hola mundo desde app.js");

console.warn("hola mundo desde app.js, tabla");

//Variables
let nombre_apellido = "Juan";
nombre = "Juan Perez";

letra = "a";

const planeta = "Tierra";
const PI = 3.14159265358979323846;

console.log(PI);

let edad = 25;

mayor_edad = true;

lista_estudiantes = ["Juan", "Pedro", "Maria"];

directorio = [{
}]

console.log(typeof(directorio)); // number

console.table(directorio);
console.log(directorio);

// selectores DOM querySelector, getElement, Eventos
// guardar en variables el bloque de HTML de la página
// nombre etiqueta, nombre del id #, nombre de la clase con .

const showAlerts = (error) =>{
    let alertsDiv = document.querySelector('#alerts');
    alertsDiv.innerHTML = `
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Error: </strong> Algo inesperado ocurrió y la petición no se pudo completar.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `
}

const saveToStorage = (datos, name) => {
    //formatear en cadena para almancenar en el storage
    const stringDatos = JSON.stringify(datos)

    //Almacenarlo en el storage
    localStorage.setItem(name, stringDatos)

}

const drawData = (name) => {
    //Recuperar datos del storage y formatearlos en JSON
    const datos = localStorage.getItem(name)
    const datosJSON = JSON.parse(datos)
    console.log("datos desde draw:", datosJSON);

    //Capturar el elemento HTML donde se van a pintar las tareas
    let todoContainerTasks = document.querySelector('#todoContainerTasks')

    //Crear un ciclo foEach para pintar los datos en el HTML
    datosJSON.forEach((data, index) => {
        todoContainerTasks.innerHTML += `
            <div class="card" style="width: 18rem;" id= ${"tarea-" + index}>
                <div class="card-body">
                <h5 class="card-title">${ data.titulo }</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">${ data.estado } - ${ data.fecha_fin }</h6>
                <p class="card-text">${ data.descripcion }</p>
                <a href="#" class="card-link">${ data.responsable }</a>
                <a href="#" class="card-link">${ data.prioridad }</a>
                </div>
            </div>
        `
    })
}

//Llamar mi lista de tareas desde el JSON utilizando fetch

fetch("../assets/json/todos.json")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        saveToStorage(data, "todos");
        drawData("todos");
    })
    .catch((error) => {
        console.error("Error:", error);
        showAlerts(error);
    });


try {
    async function getData() {
        const response = await fetch("../assets/json/todos.json");
        const data = await response.json();
        console.log(data);
    }
    getData();

} catch (error) {
    console.error("Error:", error);    
}


//tipos de datos

//condicionales

// if(edad <= 18){
//     mayor_edad = false;
//     console.log("No esta autorizado");
// }else if(edad >= 25.3 && edad <= 60){
//     console.log("Es un adulto");
// }else{
//     console.log("Es un anciano");
// }
// //switch
// switch(true){
//     case (edad <= 18):
//         mayor_edad = false;
//         console.log("No esta autorizado");
//         break;
//     case (edad >= 25.3 && edad <= 60):
//         console.log("Usted es adulto switch");
//         break;
//     default:
//         console.log("No tengo info");
//         break;
//     }

// //Ciclos

// // for(i = 0; i<lista_estudiantes.length; i++){
// //     console.log(lista_estudiantes[i]);
// // }

// for(i in lista_estudiantes){
//     console.log(lista_estudiantes[i]);
// }

// //forEach
// lista_estudiantes.forEach(function(estudiante, index){
//     console.log(estudiante);
//     console.log(index);
// });

// //Funciones

// //anónimas, fat => arrow functions, funciones tradicionales


// function suma(a,b,c){
//     console.log(a + b + c);
//     return a + b + c;
// }

// resultado = suma(2,4,6)

// const suma = (a, b, c) => {
//     console.log(a + b + c);
//     return a + b + c;
// }

// resultado_arrow = suma(2,4,6)

// function(){

// }

// (a,b,c) => {

// }


// //fetch API, Promesas, AsycAwait


// //Métodos de arrays u objetos -> keys, values, entries
// //map, filter, find, forEach