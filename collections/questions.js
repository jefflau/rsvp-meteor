Questions = new Meteor.Collection('questions');

Questions.allow({
  insert: function(){
    return true;
  },
  remove: function(){
    return true;
  }
});

Meteor.methods({
  'addQuestion': function(form){
    form.postedAt = new Date();
    form.replies = [];
    return Questions.insert(form);
  }
});

Meteor.methods({
  'reply': function(form, id){
    form.postedAt = new Date();
    return Questions.update({_id: id}, {$push: {replies: form}});
  }
});
