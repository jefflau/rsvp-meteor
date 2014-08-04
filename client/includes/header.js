Template.header.helpers({
  activeIfTemplateIs: function (template) {
    var currentRoute = Router.current();
    return currentRoute &&
      template === currentRoute.lookupTemplate() ? 'active' : '';
  }
});

Template.header.events({
  'click .toggle-menu': function(e, template){
    console.log('clicked');
    $('.main-nav').toggleClass('open');
  }
});
