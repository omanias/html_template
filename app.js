/* let elemento

elemento= document
elemento = document.head
elemento = document.body
elemento = document.forms
elemento = document.scripts
elemento = document.images

console.log(elemento) */

// METODO TRADICIONAL => id, class, tags

/* const navbar = document.getElementsByClassName("navbar") 
const contenedor = document.getElementsByClassName("container")
const inputNombre = document.getElementById("inputName")
const formulario = document.getElementsByTagName("form")

console.log(formulario) */

// METODO MODERNO => id, class, tags

/* const navbar = document.querySelector(".navbar")
const contenedor = document.querySelectorAll(".container")
const inputNombre = document.querySelector("#inputName")
const formulario = document.querySelector("form")
console.log(formulario) */

/* const encabezado = document.querySelector("h2").textContent= "Nuevo encabezado desde Javascript"
console.log(encabezado) */

// Eliminar un elemento del DOM

/* const textDelete = document.querySelector("h5")
textDelete.remove()

console.log(textDelete) */

// Agregar elementos en el DOM

/* const textAdded = document.createElement("h5")
textAdded.innerHTML = "<h5>Texto agregado</h5>"
document.body.appendChild(textAdded)

console.log(textAdded) */

/* const listaVacia = document.querySelector(".lista-vacia")

let otrosCursos=["Desarrollo Web","Javascript","ReactJs","NodeJs"]

for (let curso of otrosCursos){
    let listado = document.createElement("li")
    listado.innerHTML= curso
    listaVacia.appendChild(listado)
}

console.log(listaVacia) */

let cursos = [
    {id:1 , titulo:"Desarrollo Web" , precio:1000},
    {id:2 , titulo: "Javascript (con carpi y el tio Omar)" , precio:9000},
    {id:3 , titulo:"React Js(Omar)" , precio: 1000},
    {id:4 , titulo: "Node Js", precio: 6000}
]


for (let curso of cursos){
    let contenedor = document.createElement("div")
    contenedor.innerHTML=
    `

    <div class="card border-dark mb-3" style="max-width: 20rem;">
    <div class="card-header">${curso.titulo}</div>
    <div class="card-body">
        <p class="card-text"> $ ${curso.precio}</p>
            <button type="button" class="btn btn-dark">Agregar al carrito</button>
        </div>
    </div>

    
    `

    document.body.appendChild(contenedor)
}