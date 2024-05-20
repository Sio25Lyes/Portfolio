function checkPassword() {
    var utilisateur = prompt("Veuillez entrer le mot de passe pour voir le CV:");
    var correctUtilisateur = "Sio2#5&&Maitr€7";
    while (utilisateur !=correctUtilisateur){
        alert("Mot de passe incorrect. Accès refusé.");
        var utilisateur = prompt("Veuillez entrer le mot de passe pour voir le CV:"); 
    }
}

// Appel de la fonction lors du chargement de la page
checkPassword();