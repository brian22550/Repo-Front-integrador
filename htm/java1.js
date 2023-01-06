

const form = document.getElementById("form");

form.addEventListener("submit", e=>{
    e.preventDefault();
    let nombre = document.getElementById("name").value;
    let password = document.getElementById("pass").value;

    console.log(`el usuario ${nombre}, con contraseña ${password}`);

})






let boton = document.getElementById('sumarr');
let respuesta = document.getElementById('respuesta');

boton.addEventListener('click',hacerSuma);

function hacerSuma(){
    let s=n2*entrada;
    respuesta.innerHTML=s
    }