Template.home.events({
  'submit form': function(e, template){
    e.preventDefault();
    var form = {
      email: template.find('.email').value,
      attending: template.find('input[name=attending]').value
    }

    Meteor.call('rsvp', form, function(error, id, form){
      if (error) {
				if(error.error === 302)
					alert('error occured');
			} else {
				Router.go('admin');
			}
    });
  }
})

Template.admin.guests = function(){
  return Guests.find();
}

Template.admin.attending = function(guests){
  return (guests.attending === false) ? "No": "Yes";
}

Template.admin.replied = function(guests){
  return (guests.replied === false) ? "No": "Yes";
}
