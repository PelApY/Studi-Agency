// Ecouter l'événement de clic sur le bouton de soumission
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("Il n’y a pas eu de rechargement de page");

    // Obtenir les valeurs des champs de saisie
    const firstName = document.getElementById("inputFirstName").value;
    const lastName = document.getElementById("inputLastName").value;
    const email = document.getElementById("inputEmail").value;
    const category = document.getElementById("inputCategory").value;
    const message = document.getElementById("messageContent").value;
    const secteur = document.getElementById("inputSecteur").value;
    const region = document.getElementById("inputRegion").value;

    // Vérifier si les champs sont vides
    if ( firstName === "" || lastName === "" || email === "" || category === "" || message === "" || secteur === "" || region === "" ) {
        alert("Veuillez remplir tous les champs");
        // sinon tu retournes les infos
        return;
    }

    // Vérifier si l'adresse e-mail est valide
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Adresse e-mail invalide");
        return;
    }

    // Afficher une alerte pour indiquer que le formulaire a été soumis avec succès
    alert("Le formulaire a été soumis avec succès !");

    // affiche de ce qui est contenu dans les balises
    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(category);
    console.log(message);
    console.log(secteur);
    console.log(region);
});