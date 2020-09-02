function inscripton() {
    var nom = document.getElementById('nomEtud').value;
    var verifLongNom = verifLong(nom, 5);
    if (!verifLongNom) {
        document.getElementById('nomMsg').innerHTML =
            "la longueur  de nom supérieur cinq caractere"
    }
    else {
        document.getElementById('nomMsg').innerHTML = ""
    }

    var prenom = document.getElementById('prenomEtud').value;
    var verifLongPrenom = verifLong(prenom, 5);
    if (!verifLongPrenom) {
        document.getElementById('prenomMsg').innerHTML =
            "la longueur  de prénom supérieur cinq caractere"
    }
    else {
        document.getElementById('prenomMsg').innerHTML = ""
    }
    var email = document.getElementById('emailEtud').value;
    var verifEmails = verifierEmail(email);

    if (!verifEmails) {
        document.getElementById('verifEmailMsg').innerHTML =
            "lemail non valid"
    }
    else {
        document.getElementById('verifEmailMsg').innerHTML = ""
    }




    var mdp = document.getElementById('motPassEtud').value;
    var verifmdp = verifMdp(mdp);
    if (!verifmdp) {
        document.getElementById('mtpMsg').innerHTML =
            'Mot de passe doit contenir au moins 8 caractéres avec au moins un chiffre '
    }
    else {
        document.getElementById('mtpMsg').innerHTML = ''
    }

    var cMdp = document.getElementById('confMotPassEtud').value;
    var confMdp = comparaison(mdp, cMdp);
    if (!confMdp) {
        document.getElementById('confMdp').innerHTML =
            " confirmation de mot de pass incorrecte"
    }
    else {
        document.getElementById('confMdp').innerHTML = ''
    }
    var ddn = document.getElementById('dateEtud').value;
    var dateEt = verifAge(ddn);

    if (!dateEt) {
        document.getElementById('dateMsg').innerHTML =
            "Date de naissance est supérieur ou egale a l'age de 18"
    }
    else {
        document.getElementById('dateMsg').innerHTML = ''
    }

    var ville = document.getElementById('villeEtud').value;

    var cin = document.getElementById('cinEtud').value;
    var cinConf = verifNumber(cin);
    if (!cinConf) {
        document.getElementById('cinMsg').innerHTML =
            'le numero de carte Cin incorrecte'
    }
    else {
        document.getElementById('cinMsg').innerHTML = ''
    }


    var classEtud = document.getElementById('classEtud').value;

    var telEtud = document.getElementById('telEtud').value;
    var telEt = verifNumber(telEtud);
    if (!telEt) {
        document.getElementById('telMsg').innerHTML =
            "le nombre de telephone uniquement des entier"
    }
    else {
        document.getElementById('telMsg').innerHTML = ''
    }
    var typeEtud = document.getElementById('utilisEtudiant').value;
    var idc = localStorage.getItem('idc') || '1';




    var etudiants = {
        id: Number(idc),
        nom: nom,
        prenom: prenom,
        email: email,
        mdp: mdp,
        confMdp: cMdp,
        date: ddn,
        ville: ville,
        cin: cin,
        classEtud: classEtud,
        telEtud: telEtud,
        typeEtud: typeEtud,

    }


    if (verifLongNom &&
        verifLongPrenom &&
        verifmdp &&
        confMdp &&
        dateEt &&
        ville &&
        cinConf &&
        classEtud &&
        telEt &&
        verifEmails) {
        var T = JSON.parse(localStorage.getItem('etudiant') || '[]');
        T.push(etudiants);
        localStorage.setItem('etudiant', JSON.stringify(T))
        localStorage.setItem('idc', Number(idc) + 1);
    }
}



function inscritEnseignant() {
    var nomEnseig = document.getElementById('nomEnseig').value;
    var nomConfEnseig = verifLong(nomEnseig, 5);
    if (!nomConfEnseig) {
        document.getElementById('nomEnseigMsg').innerHTML =
            "votre nom incorrecte"
    }
    else {
        document.getElementById('nomEnseigMsg').innerHTML = ""
    }
    var prenomEnseig = document.getElementById('prenomEnseig').value;
    var prenomConfEnseig = verifLong(prenomEnseig, 5);
    if (!prenomConfEnseig) {
        document.getElementById('prenomEnseigMsg').innerHTML =
            "votre prenom incorrecte"

    }
    else {
        document.getElementById('prenomEnseigMsg').innerHTML = ""

    }

    var emailEnseig = document.getElementById('emailEnseig').value;
    var verifEmailEnseig = verifierEmail(emailEnseig);

    if (!verifEmailEnseig) {
        document.getElementById('verifEmailEnseigMsg').innerHTML =
            "lemail non valid"
    }
    else {
        document.getElementById('verifEmailEnseigMsg').innerHTML = ""
    }



    var mdpEnseig = document.getElementById('motPassEnseig').value;
    var verifMdpEnseig = verifMdp(mdpEnseig);
    if (!verifMdpEnseig) {
        document.getElementById('mtpEnseigMsg').innerHTML =
            "mot de passe incorecte qui contien au moins un chiffre"
    }
    else {
        document.getElementById('mtpEnseigMsg').innerHTML = ""
    }



    var confMdpEnseig = document.getElementById('confMotPassEnseig').value;
    var confmtpEnseig = comparaison(mdpEnseig, confMdpEnseig);
    if (!confmtpEnseig) {
        document.getElementById('confMdpEnseigMsg').innerHTML =
            "la confirmation de mot de passe incorrecte"
    }
    else {
        document.getElementById('confMdpEnseigMsg').innerHTML = ""

    }

    var cinEnseig = document.getElementById('cinEnseig').value;
    var verifCinEnseig = verifNumber(cinEnseig);
    if (!verifCinEnseig) {
        document.getElementById('cinEnseigMsg').innerHTML =
            "votre cin doit contien seulement des entiers"
    }
    else {
        document.getElementById('cinEnseigMsg').innerHTML = ""
    }
    var classEnseig = document.getElementById('classEnseig').value;

    var telEnseig = document.getElementById('telEnseig').value;
    var verifTelEnseig = verifNumber(telEnseig);
    if (!verifTelEnseig) {
        document.getElementById('telEnseigMsg').innerHTML =
            "le numéro de téléphone doit contient seullement des entiers"


    }
    else {
        document.getElementById('telEnseigMsg').innerHTML = ""
    }
    var typeEnseig = document.getElementById('utilisEnseig').value;
    var idb = localStorage.getItem('idb' || '1');


    var enseignants = {
        id: Number(idb),
        nomEnseig: nomEnseig,
        prenomEnseig: prenomEnseig,
        emailEnseig: emailEnseig,
        mdpEnseig: mdpEnseig,
        confMdpEnseig: confMdpEnseig,
        cinEnseig: cinEnseig,
        classEnseig: classEnseig,
        telEnseig: telEnseig,
        typeEnseig: typeEnseig
    }

    if (nomConfEnseig &&
        prenomConfEnseig &&
        verifEmailEnseig &&
        verifMdpEnseig &&
        confmtpEnseig &&
        verifCinEnseig &&
        classEnseig &&
        verifTelEnseig) {

        var T = JSON.parse(localStorage.getItem('enseignant') || '[]');
        T.push(enseignants);
        localStorage.setItem('enseignant', JSON.stringify(T))
        localStorage.setItem('idb', Number(idb) + 1)
    }
}


function login() {
    var numTel = document.getElementById('numTel').value;
    var motP = document.getElementById('motPassLog').value;
    i = 0;
    j = 0;

    var T = JSON.parse(localStorage.getItem('etudiant') || '[]');
    while (i < T.length && (T[i].telEtud != numTel || T[i].mdp != motP)) {
        i++;

    }
    if (i == T.length) {
        return false;
    }
    else if (T[i].typeEtud == 1) {
        localStorage.setItem('utilisateurConnect', JSON.stringify(T[i]));
        location.replace('affichEtud.html');
    }

    return (T[i]);

}


function loginEnseig() {
    var numTel = document.getElementById('numTel').value;
    var motP = document.getElementById('motPassLog').value;

    j = 0;
    var B = JSON.parse(localStorage.getItem('enseignant') || '[]');
    while (j < B.length && (B[j].telEnseig != numTel || B[j].mdpEnseig != motP)) {
        j++;

    }
    if (j == B.length) {
        return false;
    }



    else if (B[j].typeEnseig == 0) {
        localStorage.setItem('utilisateurConnecte', JSON.stringify(B[j]));
        location.replace('affichEnseig.html');
    }
    return (B[j]);
}





function affichEnseignant() {
    var utilisateurConnect = JSON.parse(localStorage.getItem("utilisateurConnecte") || "[]");
    document.getElementById("id").innerHTML = utilisateurConnect.id;
    document.getElementById("nomEnseig").innerHTML = utilisateurConnect.nomEnseig;
    document.getElementById("prenomEnseig").innerHTML = utilisateurConnect.prenomEnseig;
    document.getElementById("emailEnseig").innerHTML = utilisateurConnect.emailEnseig;
    document.getElementById("mdpEnseig").innerHTML = utilisateurConnect.mdpEnseig;
    document.getElementById("cinEnseig").innerHTML = utilisateurConnect.cinEnseig;
    document.getElementById("classEnseig").innerHTML = utilisateurConnect.classEnseig;
    document.getElementById("telEnseig").innerHTML = utilisateurConnect.telEnseig;
    var render = `<button type="button" class="btn btn-warning" onclick=" modification(${utilisateurConnect.id})" > Modifier</button>
    `;
    document.getElementById('modUtilis').innerHTML = render;

}



function modification(id) {

    var utilisateur = JSON.parse(localStorage.getItem("utilisateurConnecte") || '[]')

    // var utilisateur = rechercheParId(id,enseignante);
    var render = `  <div class="container"> 
    <h1 class="center">modification  d'enseignant</h1>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="nomEnseig">Nom</label>
          <input type="text" class="form-control" id="nomEnseigMod" value=${utilisateur.nomEnseig} >
         
        
        </div>
        <div class="form-group col-md-6">
          <label for="prenomEnseig">Prénom</label>
          <input type="text" class="form-control" id="prenomEnseigMod" value=${utilisateur.prenomEnseig}>
          
        </div>
      </div>
      <div class="form-row">
          <div class="form-group col-md-12">
            <label for="emailEnseig">Email</label>
            <input type="email" class="form-control" id="emailEnseigMod" value=${utilisateur.emailEnseig} >
        
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="motPassEnseig">Mot de passe</label>
            <input type="password" class="form-control" id="motPassEnseigMod"  value=${utilisateur.mdpEnseig}>
            
          </div>
          <div class="form-group col-md-6">
            <label for="confMotPassEnseig">Confirme Mot de passe</label>
            <input type="password" class="form-control" id="confMotPassEnseigMod" value=${utilisateur.confMdpEnseig}>
          
          </div>
        </div>
     
      
      <div class="form-row">
          <div class="form-group col-md-6">
            <label for="cinEnseig">CIN</label>
            <input type="text" class="form-control" id="cinEnseigMod" value=${utilisateur.cinEnseig} >
        
          </div>
          <div class="form-group col-md-4">
            <label for="classeEnseig">Class</label>
            <select id="classEnseigMod" class="form-control" value=${utilisateur.classEnseig}>
              <option selected>Class</option>
              <option value="1">1ére Année</option>
              <option value="2">2ére Année</option>
              <option value="3">3ére Année</option>
             

            </select>
          </div>
          
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="telEnseig">Tel</label>
            <input type="text" class="form-control" id="telEnseigMod" value=${utilisateur.telEnseig} >
           
          </div>
        </div>
       
       <div class="bouton">
      
       <button type="submit" class="btn btn-danger" onclick="validationDeModification(${utilisateur.id})" > Modification</button>
       </div>
       </div>
    
      `;
    document.getElementById("modifUtilisDiv").innerHTML = render;

}



function validationDeModification(id) {
    var utilisateur = JSON.parse(localStorage.getItem("utilisateurConnecte") || '[]')

    //  var enseig = rechercheParId(id,utilisateur);


    var nouvNomEnseig = document.getElementById('nomEnseigMod').value;
    var nouvPrenomEnseig = document.getElementById('prenomEnseigMod').value;
    var nouvEmailEnseig = document.getElementById('emailEnseigMod').value;
    var nouvMdpEnseig = document.getElementById('motPassEnseigMod').value;
    var nouvConfMdpEnseig = document.getElementById('confMotPassEnseigMod').value;
    var nouvCinEnseig = document.getElementById('cinEnseigMod').value;
    var nouvClassEnseig = document.getElementById('classEnseigMod').value;
    var nouvTelEnseig = document.getElementById('telEnseigMod').value;


    var nouvParams = {
        id: utilisateur.id,
        nomEnseig: nouvNomEnseig,
        prenomEnseig: nouvPrenomEnseig,
        emailEnseig: nouvEmailEnseig,
        mdpEnseig: nouvMdpEnseig,
        confMdpEnseig: nouvConfMdpEnseig,
        cinEnseig: nouvCinEnseig,
        classEnseig: nouvClassEnseig,
        telEnseig: nouvTelEnseig

    }




    var validUtilis = JSON.parse(localStorage.getItem("enseignant"));

    var index = chercherIndex(id, validUtilis);
    validUtilis.splice(index, 1);
    validUtilis.splice(index, 0, nouvParams);
    localStorage.setItem("enseignant", JSON.stringify(validUtilis));
    localStorage.setItem("utilisateurConnecte", JSON.stringify(nouvParams));

    location.reload();
}


//affichage détudiant

function affichEtudiant() {
    var utilisateurEtudConnect = JSON.parse(localStorage.getItem("utilisateurConnect") || '[]');
    document.getElementById('id').innerHTML = utilisateurEtudConnect.id;
    document.getElementById('nomEtud').innerHTML = utilisateurEtudConnect.nom;
    document.getElementById('prenomEtud').innerHTML = utilisateurEtudConnect.prenom;
    document.getElementById('emailEtud').innerHTML = utilisateurEtudConnect.email;
    document.getElementById('mdpEtud').innerHTML = utilisateurEtudConnect.mdp;
    document.getElementById('dateEtud').innerHTML = utilisateurEtudConnect.date;
    document.getElementById('villeEtud').innerHTML = utilisateurEtudConnect.ville;
    document.getElementById('cinEtud').innerHTML = utilisateurEtudConnect.cin;
    document.getElementById('classEtud').innerHTML = utilisateurEtudConnect.classEtud;
    document.getElementById('telEtud').innerHTML = utilisateurEtudConnect.telEtud;
    var render = `<button type="button" class="btn btn-warning" onclick=" modificationEtudiant(${utilisateurEtudConnect.id})" > Modifier</button>
    
    `;
    document.getElementById('modUtilisEtud').innerHTML = render;

}


//récupération de donnée

function modificationEtudiant(id) {

    var utilisEtud = JSON.parse(localStorage.getItem("utilisateurConnect") || '[]')
    // var utilisEtud = rechercheParId(id,etudiant);

    var render = `  <div class="container">
    <h1 class="center">modification  d'etudiant</h1>


       
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="nomEtud">Nom</label>
        <input type="text" class="form-control" id="nomEtudMod" value=${utilisEtud.nom} >
      </div>
      <div class="form-group col-md-6">
        <label for="prenomEtud">Prénom</label>
        <input type="text" class="form-control" id="prenomEtudMod" value=${utilisEtud.prenom}>
        
      </div>
    </div>
    <div class="form-row">
        <div class="form-group col-md-12">
          <label for="emailEtud">Email</label>
          <input type="email" class="form-control" id="emailEtudMod" value=${utilisEtud.email} >
      
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="mdpEtud">Mot de passe</label>
          <input type="password" class="form-control" id="mdpEtudMod"  value=${utilisEtud.mdp}>
          
        </div>
        <div class="form-group col-md-6">
          <label for="dateEtud">Confirme Mot de passe</label>
          <input type="text" class="form-control" id="dateEtudMod" value=${utilisEtud.date}>
        
        </div>
      </div>
      <div class="form-group col-md-4">
      <label for="villeEtud">Ville</label>
      <select id="villeEtudMod" value=${utilisEtud.ville} class="form-control">
        <option selected>Gouvernorat</option>
        <option value="Ariana">Ariana</option>
        <option value="Beja">Béja</option>
        <option value="Ben_Arous">Ben Arous</option>
        <option value="Bizerte">Bizerte</option>
        <option value="Gabes">Gabès</option>
        <option value="Gafsa">Gafsa</option>
        <option value="Jendouba">Jendouba</option>
        <option value="Kairouan">Kairouan</option>
        <option value="Kasserine">Kasserine</option>
        <option value="Kebili">Kébili</option>
        <option value=" Le_Kef">Le Kef</option>
        <option value="Mahdia">Mahdia</option>
        <option value="La_Manouba">La Manouba</option>
        <option value="Medenine">Médenine</option>
        <option value="Manastir">Monastir</option>
        <option value="Nabeul">Nabeul</option>
        <option value="Sfax">Sfax</option>
        <option value="Sidi_Bouzid">Sidi Bouzid</option>
        <option value="Siliana">Siliana</option>
        <option value="Sousse">Sousse</option>
        <option value="Tataouine">Tataouine</option>
        <option value="Tozeur">Tozeur</option>
        <option value="Tunis">Tunis</option>
        <option value="Zaghouan">Zaghouan</option>

      </select>
    </div>
    
    <div class="form-row">
        <div class="form-group col-md-6">
          <label for="cinEtud">CIN</label>
          <input type="text" class="form-control" id="cinEtudMod" value=${utilisEtud.cin} >
      
        </div>
        <div class="form-group col-md-4">
          <label for="classEtud">Class</label>
          <select id="classEtudMod" class="form-control" value=${utilisEtud.classEtud}>
            <option selected>Class</option>
            <option value="1">1éme Année</option>
            <option value="2">2éme Année</option>
            <option value="3">3éme Année</option>
           

          </select>
        </div>
        
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="telEtud">Tel</label>
          <input type="text" class="form-control" id="telEtudMod" value=${utilisEtud.telEtud} >
         
        </div>
      </div>
     
     <div class="bouton">
    
     <button type="submit" class="btn btn-danger"  onclick="validationModifEtud(${utilisEtud.id})" > Modification</button>
     </div>
     </div>
  
    `;
    document.getElementById("modifUtilisEtudDiv").innerHTML = render;


}




function validationModifEtud(id) {
    var utilisEtud = JSON.parse(localStorage.getItem("utilisateurConnect") || '[]')
    var nouvNomEtud = document.getElementById('nomEtudMod').value;
    var nouvPreEtud = document.getElementById('prenomEtudMod').value;
    var nouvEmailEtud = document.getElementById('emailEtudMod').value;
    var nouvMdpEtud = document.getElementById('mdpEtudMod').value;
    var nouvDateEtud = document.getElementById('dateEtudMod').value;
    var nouvVilleEtud = document.getElementById('villeEtudMod').value;
    var nouvCinEtud = document.getElementById('cinEtudMod').value;
    var nouvClassEtud = document.getElementById('classEtudMod').value;
    var nouvTelEtud = document.getElementById('telEtudMod').value;


    var nouEtud = {
        id: utilisEtud.id,
        nom: nouvNomEtud,
        prenom: nouvPreEtud,
        email: nouvEmailEtud,
        mdp: nouvMdpEtud,
        date: nouvDateEtud,
        ville: nouvVilleEtud,
        cin: nouvCinEtud,
        classEtud: nouvClassEtud,
        telEtud: nouvTelEtud

    }

    var connectUtilisEtud = JSON.parse(localStorage.getItem("etudiant"))
    var index = chercherIndex(id, connectUtilisEtud);
    connectUtilisEtud.splice(index, 1);
    connectUtilisEtud.splice(index, 0, nouEtud);
    localStorage.setItem('etudiant', JSON.stringify(connectUtilisEtud));
    localStorage.setItem("utilisateurConnect", JSON.stringify(nouEtud));

    location.reload();
}


function utiliParam() {
    var utilisConnec = JSON.parse(localStorage.getItem('utilisateurConnecte'));
    document.getElementById('navNom').innerHTML = utilisConnec.nomEnseig;
    document.getElementById('navPrenom').innerHTML = utilisConnec.prenomEnseig;
}
function utiliParams() {
    var utilisConnec = JSON.parse(localStorage.getItem('utilisateurConnect'));
    document.getElementById('navNom').innerHTML = utilisConnec.nom;
    document.getElementById('navPrenom').innerHTML = utilisConnec.prenom;
}

//page d'affichage la propriété de l'etudiant dans l'enseignant


function affichProprieteEtudEnseig() {
    var T = JSON.parse(localStorage.getItem("etudiant"));
    var conectEnseig = JSON.parse(localStorage.getItem("utilisateurConnecte"));

    var render = `<div class="container">
    <table class="table table-striped"  id="myTable">
      <thead >
          <tr class="col-md-6">
              <th scope="col">Id</th>
              <th scope="col">Nom</th>
              <th scope="col">Prenom</th>
              <th scope="col">Email</th>
              <th scope="col">Cin</th>
              <th scope="col">Class</th>
              <th scope="col">Numero Telephone</th>
              <th scope="col">IdEnseig</th>
              <th scope="col">Nom Enseig</th>
              <th scope="col">ClassEnseig</th>
            
              
              <th scope="col">Action</th>
          </tr>
      </thead>
      <tbody>`;
    for (i = 0; i < T.length; i++) {

        if (conectEnseig.classEnseig == T[i].classEtud) {

            render += `
              <tr>
                  <th scope="row">${T[i].id}</th>
                  <td>${T[i].nom}</td>
                  <td>${T[i].prenom}</td>
                  <td>${T[i].email}</td>
                  <td>${T[i].cin}</td>
                  <td>${T[i].classEtud}</td>
                  <td>${T[i].telEtud}</td>
                  <td>${conectEnseig.id}</td>
                  <td>${conectEnseig.nomEnseig}</td>
                  <td>${conectEnseig.classEnseig}</td>
                 

                  <td>
                  <button type="button" class="btn btn-danger" id="gbutton${T[i].id}" onclick='Absence(${T[i].id})'>Absent</button>
                  <button type="button" class="btn btn-warning" id="button${T[i].id}" onclick='present(${T[i].id})'>Présent</button>
                  </td>
              </tr>
              </div>
              `;
        }

    }
    render += `</tbody> </table>`;
    document.getElementById("lisetEtud").innerHTML = render;
}


function Absence(id) {
    var etudiant = rechercheParId(id, "etudiant");
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    etudiant.date = today;
    var absent = JSON.parse(localStorage.getItem("absent") || "[]");
    absent.push(etudiant);
    localStorage.setItem("absent", JSON.stringify(absent));
    var idBtn = 'gbutton' + id;
    document.getElementById(idBtn).disabled = true;

}
function present(id) {
    var etudiant = rechercheParId(id, 'etudiant')||'[]';
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    etudiant.date = today;
    var present = JSON.parse(localStorage.getItem("present") || "[]");
    present.push(etudiant);
    localStorage.setItem("present", JSON.stringify(present));
    var idBtn = 'button' + id;
    document.getElementById(idBtn).disabled = true;

}
//fonction calcul abssence
function calculAbsence(id) {
    var T = JSON.parse(localStorage.getItem("absent") || '[]');

    var nb = 0;
    for (var i = 0; i < T.length; i++) {
        if (T[i].id == id) {
            nb = nb + 1;
        }
    }
    return nb;
}
function calculPresence(id) {
    var T = JSON.parse(localStorage.getItem("present") || '[]');

    var nb = 0;
    for (var i = 0; i < T.length; i++) {
        if (T[i].id == id) {
            nb = nb + 1;
        }
    }
    return nb;
}


//fonction filtrage tableau
function filterage(absence) {

    for (var j = 0; j < absence.length; j++) {
        var rId = absence[j].id;
        for (var i = 1; i < absence.length; i++) {
            if (absence[i].id == rId) {
                absence.splice(i, 1);
            }
        }
    }
    return absence;
}

//liste d'absence et presence
function affichageAbsPres() {
    var T = JSON.parse(localStorage.getItem("absent") || '[]');
    var conectEnseig = JSON.parse(localStorage.getItem("utilisateurConnecte"));

    var render = `
        <table class="table table-striped" id="myTable">
          <thead>
              <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Nom</th>
                  <th scope="col">Prenom</th>
                  <th scope="col">Classe</th>
                  <th scope="col">Nombre d'absence</th>
                  <th scope="col">Date</th>
                  <th scope="col">Nombre de Presence</th>
                  <th scope="col">Date</th>
              </tr>
          </thead>
          <tbody>`;
    var nb = 0;
    var absence = filterage(T)

    for (i = 0; i < T.length; i++) {
        if (conectEnseig.classEnseig == absence[i].classEtud) {
            nb = nb + 1
        }
        render += `
                <tr>
                     
                    <th scope="row">${(absence[i].id)}</th>
                    <td>${absence[i].nom}</td>
                    <td>${absence[i].prenom}</td>
                   <td>${absence[i].classEtud}</td>
                   <td>${calculAbsence(absence[i].id)}</td>
                   <td>${absence[i].date}</td>  
                   <td>${calculPresence(absence[i].id)}</td>
                   <td>${absence[i].date}</td>      
                </tr>
                
                `;
    }

    render += `</tbody> </table>`;

    document.getElementById("listAbsPre").innerHTML = render;
    return nb;
}

//fonction calcul absence
function calInputAbs(id) {
    var absent = JSON.parse(localStorage.getItem('absent'));

    var prDate = document.getElementById('prDate').value;

    var dexDate = document.getElementById('dexDate').value;
    idg = localStorage.getItem('idg' || '1');


    var nombreAbs = {

        id: Number(idg),
        prDate: prDate,
        dexDate: dexDate,
        nbrAbsTotal: 0

    }

    var prDate = new Date(nombreAbs.prDate);
    var dexDate = new Date(nombreAbs.dexDate);
    var Difference_In_Time = dexDate.getTime() - prDate.getTime();

    // pour calculer le no. du jour entre deux dates
    nombreAbs.nbrAbsTotal = Difference_In_Time / (1000 * 3600 * 24);
    nombreAbss = nombreAbs.nbrAbsTotal;

    if (prDate && dexDate) {

        var T = JSON.parse(localStorage.getItem('nombreAbss') || '[]');
        T.push(nombreAbs);
        localStorage.setItem('nombreAbss', JSON.stringify(T))
        localStorage.setItem('idg', Number(idg) + 1)

    }
    alert(nombreAbs.nbrAbsTotal)

    document.getElementById('nbrDateMsg').innerHTML =
        `<div class='alert alert-danger' role='alert'>
         votre nombre d'absence est `  + nombreAbs.nbrAbsTotal;
    `</div>`
}

// bloc de calcule la moyenne

function calculeMoyenne() {
    var math = document.getElementById('calMath').value;
    var mathMsg = verifNumberEntier(math);
    if (!mathMsg) {
        document.getElementById('calMathMsg').innerHTML =
            "votre note incorrecte"
    }
    else {
        document.getElementById('calMathMsg').innerHTML = ""
    }

    var physi = document.getElementById('calcPhys').value;
    var physiMsg = verifNumberEntier(physi);

    if (!physiMsg) {
        document.getElementById('calcPhysMsg').innerHTML =
            "votre note incorrecte"
    }
    else {
        document.getElementById('calcPhysMsg').innerHTML = ""
    }

    var chimie = document.getElementById('calChimie').value;
    var chimieMsg = verifNumberEntier(chimie);
    if (!chimieMsg) {
        document.getElementById('calChimieMsg').innerHTML =
            "votre note incorrecte"
    }
    else {
        document.getElementById('calChimieMsg').innerHTML = ""
    }

    var info = document.getElementById('calcInfor').value;

    var infoMsg = verifNumberEntier(info);
    if (!infoMsg) {
        document.getElementById('calcInforMsg').innerHTML =
            "votre note incorrecte"
    }
    else {
        document.getElementById('calcInforMsg').innerHTML = ""
    }

    var elect = document.getElementById('calcElect').value;
    var electMsg = verifNumberEntier(elect);
    if (!electMsg) {
        document.getElementById('calcElectMsg').innerHTML =
            "votre note incorrecte"
    }
    else {
        document.getElementById('calcElectMsg').innerHTML = ""
    }

    idf = localStorage.getItem('idf' || '1');

    var moyenne = {
        id: Number(idf),
        math: math,
        physi: physi,
        chimie: chimie,
        info: info,
        elect: elect,

    }

    if (
        mathMsg &&
        physiMsg &&
        chimieMsg &&
        infoMsg &&
        electMsg
    ) {

        var T = JSON.parse(localStorage.getItem('moyenne') || '[]');
        T.push(moyenne);
        localStorage.setItem('moyenne', JSON.stringify(T));
        localStorage.setItem('idf', Number(idf) + 1);
    }

    var s = 0;
    calc = (math * 3 + physi * 2 + chimie * 1 + info * 4 + elect * 2) / 12;
    s = s + calc;
    if (s < 10) {
        document.getElementById('alertMoy').innerHTML =
            `<div class='alert alert-danger' role='alert'>
                 votre moyenne est `  + s;
        `</div>`

    }
    else {

        document.getElementById('alertMoy').innerHTML =
            `<div class='alert alert-success' role='alert'>
              votre moyenne est `  + s;
        `</div>`
    }


    var affichageNote = JSON.parse(localStorage.getItem('utilisateurConnect'));
    render = `<div class="container">
    <table class="table table-striped" id="myTable">
            <thead  class="thead-dark">
                <tr>
                    <th scope="col">Nom</th>
                    <th scope="col">Math</th>
                    <th scope="col">physique</th>
                    <th scope="col">chimie</th>
                    <th scope="col">Informatique</th>
                    <th scope="col">Electromécanique</th>
                </tr>
            </thead>
            <tbody>`;
    render += `
                            <tr>
                                <td>${affichageNote.nom}</td>
                                <td>${math}</td>
                                <td>${physi}</td>
                                <td>${chimie}</td>
                                <td>${info}</td>
                                <td>${elect}</td>
            
                            </tr>
                            </div>
                `;


    render += `</tbody> </table>`;
    document.getElementById("tabMoy").innerHTML = render;

}


//bloc affiche les moyenne de chaque matier

function affichMoyen() {


    var T = JSON.parse(localStorage.getItem("moyenne") || "[]");
    var render = `<div class="container">
                <table class="table table-striped" id="myTable">
                  <thead>
                      <tr>
                          <th scope="col">Math</th>
                          <th scope="col">physique</th>
                          <th scope="col">chimie</th>
                          <th scope="col">Informatique</th>
                          <th scope="col">Electronique</th>
                          
                      </tr>
                  </thead>
                  <tbody>`;
    for (var i = 0; i < T.length; i++) {
        render += `
                      <tr>
                          <td>${T[i].math}</td>
                          <td>${T[i].physi}</td>
                          <td>${T[i].chimie}</td>
                          <td>${T[i].info}</td>
                          <td>${T[i].elect}</td>
                      </tr>
                      </div>
          `;
    }

    render += `</tbody> </table>`;
    document.getElementById("tableMoyenne").innerHTML = render;
}

//déclaration fonction
function verifLong(ch, n) {
    return (ch.length >= n)
}

//validation email

function verifierEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

//fonction verif mot de passe
function verifMdp(ch) {

    if ((ch.length >= 8) && ch.match(/[0-9]/g)) {
        return (true);
    }
    else {
        return (false)
    }
}
//fonction comparaison
function comparaison(ch1, ch2) {
    return (ch1 == ch2)
}

//fonction vrif seullement des entier
function verifNumber(n) {

    if ((n.length != 8) || isNaN(n)) {
        return false
    }
    else { return true }
}
//fonction d'age
function verifAge(age) {

    getAge(age) >= 18
    return age;
}
//function recherche tous l'utilisateurs d'enseignant
function rechercheParId(id, key) {
    var T = JSON.parse(localStorage.getItem(key) || '[]')
    var utilisateur;
    for (i = 0; i < T.length; i++) {
        if (T[i].id == id) {
            utilisateur = T[i];
        }
    }
    return utilisateur;
}
function chercherIndex(id, T) {
    var index;
    for (i = 0; i < T.length; i++) {
        if (T[i].id == id) {
            index = i;
        }
        return index;
    }
}

//fonction verif nombre entier
function verifNumberEntier(n) {
    return ((n > 0) && (n <= 20))

}
//fonction calcul age
function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}