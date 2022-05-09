init();

document.getElementById("esqueci").addEventListener("click", function(event){
    event.preventDefault()
});
document.getElementById("entrare").addEventListener("click", function(event){
    event.preventDefault()
});

function init() {
    document.getElementById('msgAlert').style.display = 'none'
    localStorage.setItem("sessionPW", null);
    localStorage.setItem("user", "username");
    localStorage.setItem("pass", "password");
}

function esqueci() {
    document.getElementById("floatingInput").value = localStorage.getItem("user");
    document.getElementById("floatingPassword").value = localStorage.getItem("pass");
}

function entrar() {
    if(document.getElementById("floatingInput").value===localStorage.getItem("user") && document.getElementById("floatingPassword").value === localStorage.getItem("pass")){
        localStorage.setItem("sessionPW", localStorage.getItem('user'));
        window.location.href = "./";
    } else {
        document.getElementById('msgAlert').style.display = 'block';
    }
}

function fecharMsg() {
    document.getElementById('msgAlert').style.display = 'none';
}