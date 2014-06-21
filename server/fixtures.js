if(Guests.find().count() === 0) {
  Guests.insert({
    firstName: "Jeff",
    lastName: "Lau",
    email: "tyranel@hotmail.com",
    attending: false,
    replied: false
  });
  Guests.insert({
    firstName: "Jonathan",
    lastName: "Lau",
    email: "jonathanlau200@gmail.com",
    attending: false,
    replied: false
  });
  Guests.insert({
    firstName: "Maggie",
    lastName: "Lin",
    email: "maggie@hotmail.com",
    attending: false,
    replied: false
  });
}
