Router.configure
(
    {
        layoutTemplate: 'layout'
    }
);

Router.route('/', { name: 'covoiturages' });
Router.route
(
    '/covoiturage/:_id'
    ,{
        name: 'covoiturage'
        ,data: function() { return covoiturages.findOne( this.params._id ); }
    }
);

// Router.route('/list', function () {
//   this.render('travellist');
// });
// Router.route('/connexion', function () {
//   this.render('connexion');
// });