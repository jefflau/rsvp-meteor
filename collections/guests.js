Guests = new Meteor.Collection('guests');

Guests.allow({
	update: function(){
		return true;
	},
	remove: function(){
		return true;
	}
})

Meteor.methods({
	rsvp: function(form) {
    if(!form.email)
      throw new Meteor.Error(422, 'No email provided');

    var guests = Guests.find();
    var emails = guests.map(function(guest){
      return guest.email;
    })
    var validEmail = false;

    emails.map(function(email, index){
      if(email === form.email) {
        validEmail = true;
      }
    });

    if(validEmail === false)
      throw new Meteor.Error(422, 'Email not on guest list');

    var guestId = Guests.update({email: form.email}, {
      $set: {
        attending: form.attending,
        replied: true
      }
    });

    return guestId;
	},
	addGuest: function(form) {
		if(!form.email)
			throw new Meteor.Error(422, 'No email provided');
		if(!form.firstName)
			throw new Meteor.Error(422, 'No First Name provided');

		var guest = _.extend({
			attending: false,
			replied: false,
			meal: null
		},form)

		var guestId = Guests.insert(guest);
	}
})
