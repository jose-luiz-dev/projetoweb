init();

document.getElementById("esqueci").addEventListener("click", function(event){
    event.preventDefault()
});
document.getElementById("entrare").addEventListener("click", function(event){
    event.preventDefault()
});

function init() {
    document.getElementById('msgAlert').style.display = 'none'
    localStorage.setItem("user", "username");
    localStorage.setItem("pass", "password");
    localStorage.setItem("sessionPW", "teste");
}

function esqueci() {
    document.getElementById("floatingInput").value = localStorage.getItem("user");
    document.getElementById("floatingPassword").value = localStorage.getItem("pass");
}

function entrar() {
    if(document.getElementById("floatingInput").value===localStorage.getItem("user") && document.getElementById("floatingPassword").value === localStorage.getItem("pass")){
        window.location.href = "./";
    } else {
        document.getElementById('msgAlert').style.display = 'block';
    }
}