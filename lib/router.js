Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() {
    return [Meteor.subscribe('guests')];
  }
})

Router.map(function(){
  this.route('home',{
    path: '/'
  })

  this.route('admin', {
    path: '/admin'
  });
});
