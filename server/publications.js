Meteor.publish('guests', function() {
  return Guests.find();
});

Meteor.publish('singleGuest', function(id) {
  return id && Guests.find(id);
});

Meteor.publish('courses', function() {
  return Courses.find();
});
