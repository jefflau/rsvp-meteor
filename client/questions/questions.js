Template.questions.repliesCount = function(replies) {
  return replies.length;
};

Template.addQuestion.events({
  'submit form': function(e, template){
    e.preventDefault();
    var form = {
      title: template.find('#title').value,
      text: template.find('#text').value,
      name: template.find('#name').value
    };

    Meteor.call('addQuestion', form, function(err, id){
      if(err){
        console.log(err);
      } else {
        Router.go('question', {_id: id});
      }
    });
  }
});
