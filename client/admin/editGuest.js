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
    };

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
};
