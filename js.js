

function valider() {
     // si la valeur du champ nom est non vide
    if (

        document.formSaisie.name.value != "" &&
        document.formSaisie.prenom.value != "" &&
        document.formSaisie.email.value != "" &&
        document.formSaisie.message.value != "")
    {
        // les données sont ok, on peut envoyer le formulaire
        return true;
    }
    else {
        // sinon on affiche un message
        alert("Désole le formulaire est mal remplie");
        // et on indique de ne pas envoyer le formulaire
        return false;
    }
}

