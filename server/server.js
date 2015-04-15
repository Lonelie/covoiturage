Meteor.startup
(
	function ()
	{
		// Populate once
		if ( !covoiturages.find().count() )
		{
			covoiturages.insert( { nom : "Priou", prenom : "Eric"} );
		}
	}
);