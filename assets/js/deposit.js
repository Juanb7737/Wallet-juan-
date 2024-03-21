const formulario = document.getElementById(formulario)
const nombre = document.getElementById(nombre)
const number = document.getElementById(cantidad)
function deposit(e){
    e.preventDefault()
    if(nombre !== "" && number !== null){
        let confirmacion = confirm($`¿Estás seguro de depositar ${number} a ${nombre}?`)
        if(confirmacion){
            alert("su deposito ha sido relaizado con exito")
        }
    
    }
}
formulario.addEventListener("submit", deposit)