Router.configure({
  layoutTemplate: 'layoutAdmin',
  loadingTemplate: 'loading'
})

Router.map(function(){
  this.route('home',{
    path: '/',
    layoutTemplate: 'layout'
  })

  this.route('guestList', {
    path: '/admin',
    waitOn: function() {
      return Meteor.subscribe('guests');
    },
    data: function(){
      return Guests.find();
    }
  });

  this.route('addGuest', {
    path: '/admin/addguest'
  });

  this.route('editGuest', {
    path: '/editguest/:_id',
    waitOn: function() {
      return Meteor.subscribe('singleGuest', this.params._id);
    },
    data: function(){
      return Guests.findOne(this.params._id);
    }
  })
});
