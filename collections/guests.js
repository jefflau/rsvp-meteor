Guests = new Meteor.Collection('guests');

Meteor.methods({
	rsvp: function(form) {
    console.log(form);
    console.log(form.attending);
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

    console.log(form.attending);

    if(validEmail === false)
      throw new Meteor.Error(422, 'Email not on guest list');

    var guestId = Guests.update({email: form.email}, {
      $set: {
        attending: form.attending,
        replied: true
      }
    });

    return guestId;
	}
})
