Template.guestList.helpers({
  guests: function(){
    return Guests.find();
  },
  attending: function(guests){
    if(guests.attending === false)
      return "No"
    else if (guests.attending === true){
      return "Yes"
    }
  },
  replied: function(guests){
    return (guests.replied === false) ? "No": "Yes";
  }
});

Template.addGuest.events({
  'submit form': function(e, template){
    e.preventDefault();

    var form = {
      email: template.find('#email').value,
      firstName: template.find('#firstName').value,
      lastName: template.find('#lastName').value
    }

    Meteor.call('addGuest', form, function(error,id){
      if(error)
        alert('error');
      else {
        template.find('input').value="";
      }
    });
  }
});

Template.editGuest.events({
  'submit form': function(e, template){
    e.preventDefault();

    var guestId = this._id;

    var attending = $(".attending[type='radio']:checked").val();

    attending = (attending === "true") ? true : false;

    var form = {
      email: template.find('#email').value,
      firstName: template.find('#firstName').value,
      lastName: template.find('#lastName').value,
      attending: attending
    }

    Guests.update(guestId, {$set: form});
  },
  'click #delete': function(e) {
    e.preventDefault();
    if (confirm("Are you sure you want to delete this guest?")) {
			var guestId = this._id;
			Guests.remove(guestId);
			Router.go('guestList');
    }
  }
});

Template.editGuest.checked = function(value){
  return value === this.attending ? "checked" : "";
}
