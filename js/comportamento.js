initIndex();

document.getElementById("sair").addEventListener("click", function(event){
    event.preventDefault()
});



function initIndex(){
    if (localStorage.getItem("sessionPW")==='null'){
        console.log(localStorage.getItem("sessionPW"))
        window.location.href = "./login.html";
    } else {
        document.getElementById("sessaoPW").innerHTML = localStorage.getItem("sessionPW");
    }
}

function sair(){
    localStorage.setItem("sessionPW", 'null');
    window.location.href="./login.html";
}