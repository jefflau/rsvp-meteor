Meteor.publish('guests', function() {
  return Guests.find();
});

Meteor.publish('singleGuest', function(id) {
  return id && Guests.find(id);
});

Meteor.publish('questions', function(){
  return Questions.find();
});

Meteor.publish('singleQuestion', function(id) {
  return id && Questions.find(id);
});

Meteor.publish('courses', function() {
  return Courses.find();
});
