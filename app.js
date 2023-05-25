/* let elemento;
elemento = document
elemento = document.head
elemento = document.body
elemento = document.forms
elemento = document.scripts
elemento = document.images

console.log(elemento) */


/*
clases
ids
tags

*/

//METODO TRADICIONAL

/* const navbar = document.getElementsByClassName("navbar")
const contenedor = document.getElementsByClassName("container")
const encabezados = document.getElementsByTagName("h2")
const identificador = document.getElementById("inputName")

console.log(identificador) */

// METODOS MODERNOS

/* const navegacion = document.querySelector(".navbar") // clases
const titulos = document.querySelectorAll("h2") // todas las etiquetas
const idForm = document.querySelector("#inputEmail") // id

console.log(idForm) */


// 1) capturar el elemento del dom

/* const encabezado = document.querySelector("h2").textContent = "Mi lista de productos" */


//Modificar CSS
/* const encabezado = document.querySelector("h2")

encabezado.style.backgroundColor = "red"
*/
// Eliminar un elemento del dom

/* const elementoAEliminar = document.querySelector("h5")
elementoAEliminar.remove()


console.log(elementoAEliminar)
 */


// AGREGAR ELEMENTOS EN EL DOM

/* const agregarElemento = document.createElement("div")

agregarElemento.innerHTML = "<h5>Parrafo agregado</h5>"

document.body.appendChild(agregarElemento) */



/* const otrosCursos = [
    "Desarrollo Web",
    "javascript",
    "ReactJs",
    "NodeJs"
]

for (let curso of otrosCursos) {
    let listado = document.createElement("ul")
    listado.innerHTML = curso
    listaVacia.appendChild(listado)
}
*/
// console.log(otrosCursos)
// console.log(listaVacia)



/* const listaVacia = document.querySelector("#lista-vacia")

let cursos = [

    { id: 2, titulo: "Javascript", precio: 3000 },
    { id: 3, titulo: "ReactJS", precio: 5000 }

]


console.log(cursos)


for (h of cursos) {
    let contenedor = document.createElement("div")
    contenedor.innerHTML =
        `
    <h3>Curso: ${h.titulo}</h3>
    <p>Precio: $ ${h.precio}</p>
    <button type="button" class="btn btn-danger">Agregar al carrito</button>
    `;
    document.body.appendChild(contenedor)
}
 */


//Reduce para los prod del carrito
// productos.reduce(()=>{

// },0)
// .reduce

//Busqueda de productos por precio .filter

//Array de objetos

//calcular el costo del envio

/* function calcularEnvio (){
    return total + 900
} */

// Validar nombre de usuario

/* if(){

}else{

} */

// Capturar el elemento
// const navegacion = document.querySelector(".navbar")

// llamar a la variable
// Asigno el escuchador, el evento y la funcion
/* navegacion.addEventListener("click", () => {
    console.log("Me has dado click")
}) */

/* navegacion.addEventListener("mouseout", () => {
    console.log("Mouse Saliendo")
}) */

/* navegacion.addEventListener("dblclick", () => {
    console.log("Me has dado dos click")
}) */


// const inputName = document.querySelector("#inputName")

/* inputName.addEventListener("keydown", () => {
    console.log("Escribiendo...")
})
 */
/* inputName.addEventListener("blur", () => {
    console.log("Validando informacion...")
}) */

/* inputName.addEventListener("input", () => {
    console.log("Dentro del input...")
}) */

// const inputName = document.querySelector("#inputName")

/* inputName.addEventListener("input", (e) => {
    console.log(e.target.value)
}) */


//Validacion para que el input no quede vacío
/* inputName.addEventListener("input", (e) => {
    if (e.target.value === "") {
        console.log("Falló la validación")
    }
}) */




/* const formulario = document.querySelector("#formulario")
const inputName = document.querySelector("#inputName")
const inputEmail = document.querySelector("#inputEmail")

formulario.addEventListener("submit", validarFormulario)


function validarFormulario(e) {
    e.preventDefault()

    console.log(`Nombre del usuario ${inputName.value}, correo electrónico ${inputEmail.value}`)
} */

const cardHeader = document.querySelector(".card-header")
const cardText = document.querySelector(".card-text")
const btn = document.querySelector("#btnInfo")

btn.addEventListener("click", () => {
    Swal.fire({
        title: 'Submit your Github username',
        input: 'text',
        inputAttributes: {
            autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Look up',
        showLoaderOnConfirm: true,
        preConfirm: (login) => {
            return fetch(`//api.github.com/users/${login}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(response.statusText)
                    }
                    return response.json()
                })
                .catch(error => {
                    Swal.showValidationMessage(
                        `Request failed: ${error}`
                    )
                })
        },
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: `${result.value.login}'s avatar`,
                imageUrl: result.value.avatar_url
            })
        }
    })
})


/* console.log(cardHeader)
console.log(cardText)
console.log(btn) */