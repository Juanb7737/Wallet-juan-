const formulario = document.getElementById('formulario');

function deposit(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const cantidad = document.getElementById('cantidad').value;

    if(nombre !== "" && cantidad !== "") {
        let confirmacion = confirm(`¿Estás seguro de depositar ${cantidad} a ${nombre}?`);

        if(confirmacion) {
            alert("Su depósito ha sido realizado con éxito");
        }else{
            alert("Operación cancelada");
        }
    }
}

formulario.addEventListener("submit", deposit);