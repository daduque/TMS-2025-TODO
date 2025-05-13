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
let todoContainerTasks = document.querySelector('#todoContainerTasks')



//convierte un objeto a un string

todos_list  = JSON.parse(localStorage.getItem("todos_list"));

//forEach, iterador que no retorna nada, pero recorre los arrays para poder acceder a cada uno de los elementos y operar.

todos_list.forEach( (tarea, index) => {

    todoContainerTasks.innerHTML += `
            <div class="card" style="width: 18rem;" id= ${"tarea-" + index}>
                <div class="card-body">
                <h5 class="card-title">${ tarea.titulo }</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">${ tarea.estado } - ${ tarea.fecha_fin }</h6>
                <p class="card-text">${ tarea.descripcion }</p>
                <a href="#" class="card-link">${ tarea.responsable }</a>
                <a href="#" class="card-link">${ tarea.prioridad }</a>
                </div>
            </div>
        `
}   
)

primera_tarea = document.querySelector('#tarea-0');

console.log("primera tarea de la lista", primera_tarea);



console.log(todoContainerTasks.children[0].closest('div'));

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