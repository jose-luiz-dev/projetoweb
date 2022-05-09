init();

document.getElementById("esqueci").addEventListener("click", function(event){
    event.preventDefault()
});
document.getElementById("entrare").addEventListener("click", function(event){
    event.preventDefault()
});

function init() {
    localStorage.setItem("user", "username");
    localStorage.setItem("pass", "password");
    localStorage.setItem("sessionPW", "teste");
}

function esqueci() {
    document.getElementById("floatingInput").value = localStorage.getItem("user");
    document.getElementById("floatingPassword").value = localStorage.getItem("pass");
}

function entrar() {
    window.location.href = "./";
}