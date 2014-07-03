Questions = new Meteor.Collection('questions');

Questions.allow({
  insert: function(){
    return true;
  }
});
