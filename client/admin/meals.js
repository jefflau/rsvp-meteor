Template.addCourse.events({
  'submit .add-course': function(e, template){
    e.preventDefault();

    var form = {
      courseName: template.find('#courseName').value
    };

    Meteor.call('addCourse', form, function(err){
      if(err)
        console.log(err);
    });

    template.find('input').value="";
  }
});

Template.addMeal.events({
  'submit .add-meal': function(e, template){
    e.preventDefault();

    var form = {
      mealName: template.find('.meal-name').value,
      mealDesc: template.find('.meal-desc').value
    };

    Meteor.call('addMeal', form, this._id,  function(err){
      if(err)
        console.log(err);
    });


    $('#'+this._id).find('input').val('');
  }
});
