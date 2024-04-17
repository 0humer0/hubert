
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);


//variables
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var contenedor_login_register = document.querySelector(".contenedor__login-register");


//funciones para esocjer login o register
function iniciarSesion(){
    formulario_register.style.display = "none";
    contenedor_login_register.style.left = "10px";    
    formulario_login.style.display = "block";
}


function register(){
    formulario_register.style.display = "block";
    contenedor_login_register.style.left = "410px";
    formulario_login.style.display = "none";

}