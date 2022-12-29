window.onload = () => {
    var btn = document.getElementById("create-account-button"); //recup du bouton "créer un compte" via son ID
    var close_register = document.getElementById("close-register"); //recup d'icone "close" via son ID
    var overlay = document.getElementById("overlay"); //recup d'icone "close" via son ID


    btn.addEventListener("click", (e) => { //on écoute le click sur le btn
        e.preventDefault(); //pas d'action par défault = empeche de recharger la page avec "e"
        var popup = document.getElementById("register-popup"); //recup de l'element "popup" via son ID
        popup.style.display = "block"; //affichage de l'element pop up : formulaire
        overlay.style.display = "block"; //affichage du background transparent en même temps que le popup
    })
    
    close_register.addEventListener("click",() => { //on écoute le click sur le btn
        var popup = document.getElementById("register-popup"); //recup de l'element "popup" via son ID
        popup.style.display = "none"; //non affichage de l'element pop up : formulaire
        overlay.style.display = "none"; // non affichage du background transparent en même temps que le form
    })
    


//???????????? PAS DE PAGE DE CREATION DE COMPTE










}