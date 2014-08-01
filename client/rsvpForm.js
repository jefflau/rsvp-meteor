Template.rsvpForm.events({
  'submit form': function(e, template){
    e.preventDefault();

    var selected = $("input[type='radio']:checked").val();

    selected = (selected === "true") ? true : false;

    var form = {
      email: template.find('.email').value,
      attending: selected
    };

    Meteor.call('rsvp', form, function(error, id){
      if (error) {
        if(error.error === 302)
          alert('error occured');
      } else {
        Session.set('currentUserId', id);
        Router.go('mealSelection');
      }
    });
  }
});
