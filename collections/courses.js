Courses = new Meteor.Collection('courses');

Meteor.methods({
  'addCourse': function(form){
    Courses.insert(form);
  },

  'addMeal': function(form, id){
    Courses.update({_id: id}, {$push: {meals: form}});
  }
});
