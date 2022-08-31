let connexionBtn = document.querySelector(".connexion");
let btnChoice = document.querySelector(".btnChoice");
let inscriptionBtn = document.querySelector(".inscription");
let forgotMail = document.querySelector(".forgotMail");
let forgotPassword = document.querySelector(".forgotPassword");

function displayNone(){
    forgotMail.className= "d-none";
    forgotPassword.className = "d-none";
    btnChoice.innerHTML = "S'inscrire";
}
function displayLink(){
    forgotMail.className = "d-block d-sm-block d-lg-inline  colorOrange text-decoration-none forgotMail textShadow mb-1";
    forgotPassword.className = "d-block d-sm-block d-lg-inline  colorOrange text-decoration-none forgotMail textShadow mb-1"
    btnChoice.innerHTML = "Connexion";
}
function animBtn(){
    btnChoice.classList.add("jello-horizontal");
    setTimeout(() => {btnChoice.classList.remove("jello-horizontal")}, 900)
    

}

inscriptionBtn.addEventListener("change", () => displayNone());
connexionBtn.addEventListener("change", ()=> displayLink());
btnChoice.addEventListener("click", ()=> animBtn());