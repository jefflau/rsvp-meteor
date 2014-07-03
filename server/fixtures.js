if (Questions.find().count() === 0) {

  var arr = [
  {
    title: "How do I get to the venue?",
    name: "John",
    text: "I've read the FAQ, but I'm still not sure what the best way to get there is",
    postedAt: new Date(),
    replies: [
      {
        name: "Dianna",
        text: "Take a taxi to the beach",
        postedAt: new Date()
      },
      {
        name: "John",
        text: "How much do they cost?",
        postedAt: new Date()
      },
      {
        name: "Jon Lau",
        text: "About 500 Baht",
        postedAt: new Date()
      }
    ]
  },
  {
    title: "How much is the air ticket?",
    name: "Sian",
    text: "No information on the site",
    postedAt: new Date(),
    replies: []
  },
  {
    title: "Can i get a Vegetarian food choice?",
    name: "Chelsea",
    text: "The meals don't appear to have any vegetarian or Vegan choices, I don't eat any meat",
    postedAt: new Date(),
    replies: [
      {
        name: "Dianna",
        text: "Yes ofcourse you can",
        postedAt: new Date()
      }
    ]
  }
  ];

  for(var i=0; i<arr.length; i++){
    Questions.insert(arr[i]);
  }
}
