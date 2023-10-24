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

function validReg() {
    let user = document.getElementById("userNameR");
    let pass = document.getElementById("passwordR");
    let passRep = document.getElementById("passRepR");
    let error = false;
    document.getElementById("errorR-user").style.visibility = "hidden";
    document.getElementById("errorR-pass").style.visibility = "hidden";
    document.getElementById("errorR-passRep").style.visibility = "hidden";
    if(passRep.value != pass.value) {
        document.getElementById("errorR-passRep").style.visibility = "visible";
        passRep.focus();
        error = true;
    }
    if(pass.value.length < 8) {
        document.getElementById("errorR-pass").style.visibility = "visible";
        pass.focus();
        error = true;
    }
    if(user.value.length < 5) {
        document.getElementById("errorR-user").style.visibility = "visible";
        user.focus();
        error = true;
    }
    return !error;
}

function validLog() {
    let user = document.getElementById("userName");
    let pass = document.getElementById("password");
    let error = false;
    document.getElementById("error-user").style.visibility = "hidden";
    document.getElementById("error-pass").style.visibility = "hidden";
    if(pass.value == "") {
        document.getElementById("error-pass").style.visibility = "visible";
        pass.focus();
        error = true;
    }
    if(user.value == "") {
        document.getElementById("error-user").style.visibility = "visible";
        user.focus();
        error = true;
    }
    return !error;
}