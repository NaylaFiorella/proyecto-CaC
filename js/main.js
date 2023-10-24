document.querySelector("header").innerHTML = `
    <ul>
        <li><a href="index.html">INICIO</a></li>
        <li><a href="comprar.html">COMPRAR</a></li>
        <li><a href="contacto.html">CONTACTO</a></li>
        <li><a href="login.html"><img src="./img/user.png" alt="Iniciar sesión">&#160<span>INICIAR SESIÓN</span></a></li>
    </ul>
`
document.querySelector("footer").innerHTML = `
    <div id="social">
        <a href="#"><img src="./img/facebook.png" alt="Logo de Facebook"></a>
        <a href="#"><img src="./img/instagram.png" alt="Logo de Instagram"></a>
        <a href="#"><img src="./img/twitter.png" alt="Logo de Twitter"></a>
    </div>
    <h6>2023 GLM PROPIEDADES, BUENOS AIRES, ARGENTINA</h6>
`

function validar() {
    let user = document.getElementById("userName");
    let pass = document.getElementById("password");
    let error = false;
    document.getElementById("errorUser").style.visibility = "hidden";
    document.getElementById("errorPass").style.visibility = "hidden";
    if(pass.value == "") {
        document.getElementById("errorPass").style.visibility = "visible";
        pass.focus();
        error = true;
    }
    if(user.value == "") {
        document.getElementById("errorUser").style.visibility = "visible";
        user.focus();
        error = true;
    }
    if(!error) {
        document.getElementById("userName").innerHTML = "";
        document.getElementById("password").innerHTML = "";
    }
    return !error;
}