covoiturages = new Meteor.Collection('covoiturages');

if(covoiturages.find().count() <= 0) {
covoiturages.insert({
	nom : "nom",
	prenom : "prenom",
	age : "age"
	/*vehicule : vehicule,
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
}