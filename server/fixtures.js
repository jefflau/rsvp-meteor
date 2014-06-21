if(Guests.find().count() === 0) {
  for(var i=0; i<50; i++){
    Guests.insert({
      firstName: "Test",
      lastName: i,
      email: "test" + i+ "@gmail.com",
      attending: false,
      replied: false
    });
  }
}
