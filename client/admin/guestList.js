Template.guestList.helpers({
  guests: function(){
    return Guests.find();
  },
  attending: function(guests){
    if(guests.attending === false)
      return "No";
    else if (guests.attending === true){
      return "Yes";
    }
  },
  replied: function(guests){
    return (guests.replied === false) ? "No": "Yes";
  }
});
