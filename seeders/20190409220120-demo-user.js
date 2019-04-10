'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('musicians', [{
    name: 'Al Smith',
    profile_pic: '#',
    email: 'alpal@123.com',
    password: 'password',
    location: 'San Francisco',
    music_link: '#',
    on_lookout: true, 
    primary_instrument: "guitar",
    secondary_instrument: "piano",
    primary_genre: "folk",
    secondary_genre: "pop", 
    availability: "weekends",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet sollicitudin sem, sed ullamcorper elit. Duis ultrices laoreet mauris, ac imperdiet nibh blandit nec. Cras ultricies dictum ullamcorper. Nulla blandit pretium nunc eget lacinia. Vivamus ac erat venenatis, pulvinar orci eu, accumsan quam. Nulla vitae pretium velit. Donec in turpis urna. Aliquam ultricies posuere est, vulputate faucibus risus ornare sed. In consectetur sed risus sit amet volutpat. In mauris ante, commodo iaculis feugiat sed, cursus sed nibh. Vestibulum sodales a orci sit amet scelerisque. Aliquam leo magna, suscipit id molestie eu, vehicula tincidunt dui. Vivamus ac molestie mauris. Integer eget condimentum nisl. Ut quam est, tempor at ultrices vitae, vulputate vel ligula.",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Kevin Choi',
    profile_pic: '#',
    email: 'kevin@kchoi.com',
    password: 'password',
    location: 'San Francisco',
    music_link: '#',
    on_lookout: true, 
    primary_instrument: "guitar",
    secondary_instrument: "vocals",
    primary_genre: "folk",
    secondary_genre: "rock", 
    availability: "weekends",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet sollicitudin sem, sed ullamcorper elit. Duis ultrices laoreet mauris, ac imperdiet nibh blandit nec. Cras ultricies dictum ullamcorper. Nulla blandit pretium nunc eget lacinia. Vivamus ac erat venenatis, pulvinar orci eu, accumsan quam. Nulla vitae pretium velit. Donec in turpis urna. Aliquam ultricies posuere est, vulputate faucibus risus ornare sed. In consectetur sed risus sit amet volutpat. In mauris ante, commodo iaculis feugiat sed, cursus sed nibh. Vestibulum sodales a orci sit amet scelerisque. Aliquam leo magna, suscipit id molestie eu, vehicula tincidunt dui. Vivamus ac molestie mauris. Integer eget condimentum nisl. Ut quam est, tempor at ultrices vitae, vulputate vel ligula.",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Liam Condon',
    profile_pic: '#',
    email: 'liam@123.com',
    password: 'password',
    location: 'San Francisco',
    music_link: '#',
    on_lookout: true, 
    primary_instrument: "guitar",
    secondary_instrument: "piano",
    primary_genre: "folk",
    secondary_genre: "pop", 
    availability: "weekends",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet sollicitudin sem, sed ullamcorper elit. Duis ultrices laoreet mauris, ac imperdiet nibh blandit nec. Cras ultricies dictum ullamcorper. Nulla blandit pretium nunc eget lacinia. Vivamus ac erat venenatis, pulvinar orci eu, accumsan quam. Nulla vitae pretium velit. Donec in turpis urna. Aliquam ultricies posuere est, vulputate faucibus risus ornare sed. In consectetur sed risus sit amet volutpat. In mauris ante, commodo iaculis feugiat sed, cursus sed nibh. Vestibulum sodales a orci sit amet scelerisque. Aliquam leo magna, suscipit id molestie eu, vehicula tincidunt dui. Vivamus ac molestie mauris. Integer eget condimentum nisl. Ut quam est, tempor at ultrices vitae, vulputate vel ligula.",
    createdAt: new Date(),
    updatedAt: new Date()
  }], {});

},



     
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */


  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
