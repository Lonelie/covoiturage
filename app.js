if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('search', 0);

  Template.header.helpers({
    name : "test"
  });

  Template.header.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('search', Session.get('search') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
