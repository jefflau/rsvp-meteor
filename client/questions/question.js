Template.question.events({
  'submit form': function(e, template){
    e.preventDefault();
    var form = {
      text: template.find('#text').value,
      name: template.find('#name').value
    };

    console.log(this._id);

    Meteor.call('reply', form, this._id, function(err, id){
      if(err){
        console.log(err);
      } else {
        console.log('success');
      }
    });
  }
});
