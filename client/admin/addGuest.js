Template.addGuest.events({
  'submit form': function(e, template){
    e.preventDefault();

    var form = {
      email: template.find('#email').value,
      firstName: template.find('#firstName').value,
      lastName: template.find('#lastName').value
    };

    Meteor.call('addGuest', form, function(error,id){
      if(error)
        alert('error');
      else {
        $('input').val('');
        alert('guest added successfully');
      }
    });
  }
});
