Covoiturage = new Meteor.Collection('covoiturage');

  	Covoiturage.insert({

               nom : "nom",
               prenom : "prenom",
               age : "age"
/*               vehicule : vehicule,
               identite : identite,
               photo : photo,
               nombreAnnoncesPubliees :nombreAnnoncesPubliees,
               connexion : connexion,
               inscription : inscription,
 
               depart : depart,
               arrivee : arrivee,
               prix : prix,
               placesRestantes : placesRestantes,
               date : date,
               horaire : horaire,
               description : description,
               detour : detour,
               BagagesAutorises : BagagesAutorises*/
     
	});
/*

if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    covoiturage: function () {
      return Covoiturage.find({});
    }
  });
}
*/