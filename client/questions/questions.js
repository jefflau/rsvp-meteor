Template.questions.repliesCount = function(replies) {
  return replies.length;
};

Template.addQuestion.events({
  'submit form': function(e, template){
    e.preventDefault();

    var title = template.find('#title').value,
        text = template.find('#text').value,
        name = template.find('#name').value;

    if(title.length === 0 ||
       text.length === 0 ||
       name.length === 0) {
      return false;
    }

    var form = {
      title: title,
      text: text,
      name: text
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
