Template.question.events({
  'submit form': function(e, template){
    e.preventDefault();
    var text = template.find('#text').value,
        name = template.find('#name').value;

    if(text.length === 0 || name.length === 0) {
     return false;
   }

    var form = {
      text: text,
      name: name
    };

    Meteor.call('reply', form, this._id, function(err, id){
      if(err){
        console.log(err);
      } else {
        console.log('success');
      }
    });
  }
});
