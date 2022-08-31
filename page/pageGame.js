//suppression de la boxNotif lors du clique sur la croix
let crossNotif=document.getElementsByClassName("ticketNotif");
crossNotif=Array.from(crossNotif);
for(let i=0;i<crossNotif.length;i++){
    crossNotif[i].addEventListener('click',()=>closeNotif(crossNotif[i]));
}
function closeNotif(elementHTML){
    elementHTML.remove();
}

//changer de salle 
//important : il faut que le bouton à un id de type "salle-x"
//le x correspond à l'id de la salle
let btnSalle=document.getElementsByClassName("btnSalle");
btnSalle=Array.from(btnSalle);
for(let i=0;i<btnSalle.length;i++){
    btnSalle[i].addEventListener('click',()=>changeSalle(btnSalle[i]));
}
function changeSalle(btn){
    for(let i=0;i<btnSalle.length;i++){
        btnSalle[i].classList.remove("active");
    }
    btn.classList.add("active")
    let idSalleSelect=btn.id.split("-")[1];
//ici il faudra changer le visuel pour avoir la salle
}

//en mode Mobile et Tablette 
//affichage des notifications
let btnMobileDisplayNotifTrue=document.getElementById("btnMobile-DisplayNotif");
btnMobileDisplayNotifTrue.addEventListener("click",()=>displayNotif(true));

//display none de la fenetre notif
let btnMobileDisplayNotifFalse=document.getElementById("btnMobile-CloseNotif");
btnMobileDisplayNotifFalse.addEventListener("click",()=>displayNotif(false))
function displayNotif(boolean){
    console.log("toto")
    let boxNotif=document.getElementById("boxNotification")
    if(boolean){
        boxNotif.classList.remove("d-none")
        boxNotif.classList.add("d-inline")
    }else{
        boxNotif.classList.remove("d-inline")
        boxNotif.classList.add("d-none")
    }
}

