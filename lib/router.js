Router.configure({
  loadingTemplate: 'loading'
});

Router.map(function(){
  this.route('home', {
    path: '/',
    layoutTemplate: 'layout'
  });

  this.route('rsvpForm', {
    path: '/rsvp',
    layoutTemplate: 'layout'
  });

  this.route('accommodations', {
    path: '/accommodations',
    layoutTemplate: 'layout'
  });

  this.route('informationPhuket', {
    path: '/information-phuket',
    layoutTemplate: 'layout'
  });

  this.route('schedule', {
    path: '/schedule',
    layoutTemplate: 'layout'
  });

  this.route('venueDressCode', {
    path: '/venue-dress-code',
    layoutTemplate: 'layout'
  });

  this.route('welcomeDinner', {
    path: '/welcome-dinner',
    layoutTemplate: 'layout'
  });

  this.route('contact', {
    path: '/contact',
    layoutTemplate: 'layout'
  });

  this.route('sorry', {
    path: '/sorry',
    layoutTemplate: 'layout'
  });

  this.route('additionalDetails', {
    path: '/additionalDetails',
    layoutTemplate: 'layout',
    waitOn: function(){
      return Meteor.subscribe('courses');
    },
    data: function(){
      return {
        courses: Courses.find()
      };
    }
  });

  this.route('guestList', {
    path: '/admin',
    waitOn: function() {
      return Meteor.subscribe('guests');
    },
    data: function(){
      return Guests.find();
    },
    layoutTemplate: 'layoutAdmin'
  });

  this.route('addGuest', {
    path: '/admin/addguest',
    layoutTemplate: 'layoutAdmin',
  });

  this.route('meals', {
    path: '/admin/meals',
    layoutTemplate: 'layoutAdmin',
    waitOn: function() {
      return Meteor.subscribe('courses');
    },
    data: function(){
      return Courses.find();
    }
  });

  this.route('editGuest', {
    path: '/editguest/:_id',
    layoutTemplate: 'layoutAdmin',
    waitOn: function() {
      return Meteor.subscribe('singleGuest', this.params._id);
    },
    data: function(){
      return Guests.findOne(this.params._id);
    }
  });

  this.route('questions', {
    path: '/questions',
    layoutTemplate: 'layout',
    waitOn: function() {
      return Meteor.subscribe('questions');
    },
    data: function() {
      return Questions.find({}, {sort: {postedAt: -1}});
    }
  });

  this.route('question', {
    path: '/questions/:_id',
    layoutTemplate: 'layout',
    waitOn: function() {
      return Meteor.subscribe('singleQuestion', this.params._id);
    },
    data: function() {
      return Questions.findOne(this.params._id);
    }
  });

});
