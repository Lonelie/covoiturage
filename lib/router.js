Router.configure
(
    {
        layoutTemplate: 'layout'
    }
);

Router.route('/', { name: 'eleves' });
Router.route
(
    '/eleve/:_id'
    ,{
        name: 'eleve'
        ,data: function() { return eleves.findOne( this.params._id ); }
    }
);