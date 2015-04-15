// Helpers
Template.covoiturages.helpers
(
	{
		all_covoiturages : function ()
		{
			return covoiturages.find().map
			(
				function ( covoiturage, index, cursor )
				{
					return { _id : covoiturage._id, nom : covoiturage.nom.toUpperCase(), prenom : covoiturage.prenom, age : covoiturage.age };
				}
			);
		}
	}
);

// Events
Template.covoiturages.events
(
	{
		'click #submit_covoiturage' : function ( event, template )
		{
			event.preventDefault();
			var $nom = template.find( "#nom" );
			var $prenom = template.find( "#prenom" );
			var $age = template.find( "#age" );

			if ( $nom.value !== "" && $prenom.value !== "" && $age.value !== "" )
			{

				covoiturages.insert( {nom : $nom.value, prenom : $prenom.value, age : $age.value} );
			}
		}
	}
);