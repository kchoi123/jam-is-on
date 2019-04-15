'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Bands', [{

    name: 'The Skull Cats',
    profile_pic: 'images/band-stock-photos/1.jpg',
    email: 'katz@123.com',
    location: 'San Francisco',
    music_link: '#',
    on_lookout: true, 
    primary_instrument: "vocals",
    secondary_instrument: "piano",
    primary_genre: "punk",
    secondary_genre: "blues", 
    availability: "weekdays",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet sollicitudin sem, sed ullamcorper elit. Duis ultrices laoreet mauris, ac imperdiet nibh blandit nec. Cras ultricies dictum ullamcorper. Nulla blandit pretium nunc eget lacinia. Vivamus ac erat venenatis, pulvinar orci eu, accumsan quam. Nulla vitae pretium velit. Donec in turpis urna. Aliquam ultricies posuere est, vulputate faucibus risus ornare sed. In consectetur sed risus sit amet volutpat. In mauris ante, commodo iaculis feugiat sed, cursus sed nibh. Vestibulum sodales a orci sit amet scelerisque. Aliquam leo magna, suscipit id molestie eu, vehicula tincidunt dui. Vivamus ac molestie mauris. Integer eget condimentum nisl. Ut quam est, tempor at ultrices vitae, vulputate vel ligula."
  },
  {
    name: 'The Bad Habits',
    profile_pic: 'images/band-stock-photos/2.jpg',
    email: 'habits@123.com',
    location: 'San Francisco',
    music_link: '#',
    on_lookout: true, 
    primary_instrument: "drums",
    secondary_instrument: "piano",
    primary_genre: "jazz",
    secondary_genre: "blues", 
    availability: "weekdays",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet sollicitudin sem, sed ullamcorper elit. Duis ultrices laoreet mauris, ac imperdiet nibh blandit nec. Cras ultricies dictum ullamcorper. Nulla blandit pretium nunc eget lacinia. Vivamus ac erat venenatis, pulvinar orci eu, accumsan quam. Nulla vitae pretium velit. Donec in turpis urna. Aliquam ultricies posuere est, vulputate faucibus risus ornare sed. In consectetur sed risus sit amet volutpat. In mauris ante, commodo iaculis feugiat sed, cursus sed nibh. Vestibulum sodales a orci sit amet scelerisque. Aliquam leo magna, suscipit id molestie eu, vehicula tincidunt dui. Vivamus ac molestie mauris. Integer eget condimentum nisl. Ut quam est, tempor at ultrices vitae, vulputate vel ligula."
  },
{
  name: 'Stannis the Mantis',
  profile_pic: 'images/band-stock-photos/3.jpg',
  email: 'mantis@123.com',
  location: 'San Francisco',
  music_link: '#',
  on_lookout: true, 
  primary_instrument: "guitar",
  secondary_instrument: "drums",
  primary_genre: "indie",
  secondary_genre: "folk", 
  availability: "weekdays",
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet sollicitudin sem, sed ullamcorper elit. Duis ultrices laoreet mauris, ac imperdiet nibh blandit nec. Cras ultricies dictum ullamcorper. Nulla blandit pretium nunc eget lacinia. Vivamus ac erat venenatis, pulvinar orci eu, accumsan quam. Nulla vitae pretium velit. Donec in turpis urna. Aliquam ultricies posuere est, vulputate faucibus risus ornare sed. In consectetur sed risus sit amet volutpat. In mauris ante, commodo iaculis feugiat sed, cursus sed nibh. Vestibulum sodales a orci sit amet scelerisque. Aliquam leo magna, suscipit id molestie eu, vehicula tincidunt dui. Vivamus ac molestie mauris. Integer eget condimentum nisl. Ut quam est, tempor at ultrices vitae, vulputate vel ligula."
},
{
  name: 'Farley',
  profile_pic: 'images/band-stock-photos/4.jpg',
  email: 'farley@123.com',
  location: 'San Francisco',
  music_link: '#',
  on_lookout: false, 
  primary_genre: "metal",
  secondary_genre: "rock", 
  availability: "weekdays",
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet sollicitudin sem, sed ullamcorper elit. Duis ultrices laoreet mauris, ac imperdiet nibh blandit nec. Cras ultricies dictum ullamcorper. Nulla blandit pretium nunc eget lacinia. Vivamus ac erat venenatis, pulvinar orci eu, accumsan quam. Nulla vitae pretium velit. Donec in turpis urna. Aliquam ultricies posuere est, vulputate faucibus risus ornare sed. In consectetur sed risus sit amet volutpat. In mauris ante, commodo iaculis feugiat sed, cursus sed nibh. Vestibulum sodales a orci sit amet scelerisque. Aliquam leo magna, suscipit id molestie eu, vehicula tincidunt dui. Vivamus ac molestie mauris. Integer eget condimentum nisl. Ut quam est, tempor at ultrices vitae, vulputate vel ligula."
},
{
  name: 'Bacon',
  profile_pic: 'images/band-stock-photos/5.jpg',
  email: 'bacon@123.com',
  location: 'San Francisco',
  music_link: '#',
  on_lookout: false, 
  primary_genre: "rock",
  secondary_genre: "jazz", 
  availability: "weekdays",
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet sollicitudin sem, sed ullamcorper elit. Duis ultrices laoreet mauris, ac imperdiet nibh blandit nec. Cras ultricies dictum ullamcorper. Nulla blandit pretium nunc eget lacinia. Vivamus ac erat venenatis, pulvinar orci eu, accumsan quam. Nulla vitae pretium velit. Donec in turpis urna. Aliquam ultricies posuere est, vulputate faucibus risus ornare sed. In consectetur sed risus sit amet volutpat. In mauris ante, commodo iaculis feugiat sed, cursus sed nibh. Vestibulum sodales a orci sit amet scelerisque. Aliquam leo magna, suscipit id molestie eu, vehicula tincidunt dui. Vivamus ac molestie mauris. Integer eget condimentum nisl. Ut quam est, tempor at ultrices vitae, vulputate vel ligula."

},
{
  name: 'Chicken',
  profile_pic: 'images/band-stock-photos/6.jpg',
  email: 'chicken@123.com',
  location: 'San Francisco',
  music_link: '#',
  on_lookout: false, 
  primary_genre: "soul",
  secondary_genre: "folk", 
  availability: "weekends",
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet sollicitudin sem, sed ullamcorper elit. Duis ultrices laoreet mauris, ac imperdiet nibh blandit nec. Cras ultricies dictum ullamcorper. Nulla blandit pretium nunc eget lacinia. Vivamus ac erat venenatis, pulvinar orci eu, accumsan quam. Nulla vitae pretium velit. Donec in turpis urna. Aliquam ultricies posuere est, vulputate faucibus risus ornare sed. In consectetur sed risus sit amet volutpat. In mauris ante, commodo iaculis feugiat sed, cursus sed nibh. Vestibulum sodales a orci sit amet scelerisque. Aliquam leo magna, suscipit id molestie eu, vehicula tincidunt dui. Vivamus ac molestie mauris. Integer eget condimentum nisl. Ut quam est, tempor at ultrices vitae, vulputate vel ligula."

},
{
  name: 'Silver Daggers',
  profile_pic: 'images/band-stock-photos/7.jpg',
  email: 'daggers@123.com',
  location: 'San Francisco',
  music_link: '#',
  on_lookout: true, 
  primary_instrument: "piano",
  primary_genre: "soul",
  secondary_genre: "funk", 
  availability: "weekends",
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet sollicitudin sem, sed ullamcorper elit. Duis ultrices laoreet mauris, ac imperdiet nibh blandit nec. Cras ultricies dictum ullamcorper. Nulla blandit pretium nunc eget lacinia. Vivamus ac erat venenatis, pulvinar orci eu, accumsan quam. Nulla vitae pretium velit. Donec in turpis urna. Aliquam ultricies posuere est, vulputate faucibus risus ornare sed. In consectetur sed risus sit amet volutpat. In mauris ante, commodo iaculis feugiat sed, cursus sed nibh. Vestibulum sodales a orci sit amet scelerisque. Aliquam leo magna, suscipit id molestie eu, vehicula tincidunt dui. Vivamus ac molestie mauris. Integer eget condimentum nisl. Ut quam est, tempor at ultrices vitae, vulputate vel ligula."

},
{
  name: 'Loose Change',
  profile_pic: 'images/band-stock-photos/8.jpg',
  email: 'loosechange@123.com',
  location: 'San Francisco',
  music_link: '#',
  on_lookout: true, 
  primary_instrument: "guitar",
  primary_genre: "pop",
  availability: "weekends",
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet sollicitudin sem, sed ullamcorper elit. Duis ultrices laoreet mauris, ac imperdiet nibh blandit nec. Cras ultricies dictum ullamcorper. Nulla blandit pretium nunc eget lacinia. Vivamus ac erat venenatis, pulvinar orci eu, accumsan quam. Nulla vitae pretium velit. Donec in turpis urna. Aliquam ultricies posuere est, vulputate faucibus risus ornare sed. In consectetur sed risus sit amet volutpat. In mauris ante, commodo iaculis feugiat sed, cursus sed nibh. Vestibulum sodales a orci sit amet scelerisque. Aliquam leo magna, suscipit id molestie eu, vehicula tincidunt dui. Vivamus ac molestie mauris. Integer eget condimentum nisl. Ut quam est, tempor at ultrices vitae, vulputate vel ligula."
},
{
  name: 'ROFLcopter',
  profile_pic: 'images/band-stock-photos/9.jpg',
  email: 'rofl@123.com',
  location: 'San Francisco',
  music_link: '#',
  on_lookout: true, 
  primary_instrument: "bass",
  primary_genre: "hip-hop",
  secondary_genre: "R&B",
  availability: "weekends",
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet sollicitudin sem, sed ullamcorper elit. Duis ultrices laoreet mauris, ac imperdiet nibh blandit nec. Cras ultricies dictum ullamcorper. Nulla blandit pretium nunc eget lacinia. Vivamus ac erat venenatis, pulvinar orci eu, accumsan quam. Nulla vitae pretium velit. Donec in turpis urna. Aliquam ultricies posuere est, vulputate faucibus risus ornare sed. In consectetur sed risus sit amet volutpat. In mauris ante, commodo iaculis feugiat sed, cursus sed nibh. Vestibulum sodales a orci sit amet scelerisque. Aliquam leo magna, suscipit id molestie eu, vehicula tincidunt dui. Vivamus ac molestie mauris. Integer eget condimentum nisl. Ut quam est, tempor at ultrices vitae, vulputate vel ligula."
},
{
  name: 'Red Pony',
  profile_pic: 'images/band-stock-photos/10.jpg',
  email: 'pony@123.com',
  location: 'San Francisco',
  music_link: '#',
  on_lookout: true, 
  primary_instrument: "guitar",
  secondary_instrument: "piano",
  primary_genre: "folk",
  availability: "weekdays",
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet sollicitudin sem, sed ullamcorper elit. Duis ultrices laoreet mauris, ac imperdiet nibh blandit nec. Cras ultricies dictum ullamcorper. Nulla blandit pretium nunc eget lacinia. Vivamus ac erat venenatis, pulvinar orci eu, accumsan quam. Nulla vitae pretium velit. Donec in turpis urna. Aliquam ultricies posuere est, vulputate faucibus risus ornare sed. In consectetur sed risus sit amet volutpat. In mauris ante, commodo iaculis feugiat sed, cursus sed nibh. Vestibulum sodales a orci sit amet scelerisque. Aliquam leo magna, suscipit id molestie eu, vehicula tincidunt dui. Vivamus ac molestie mauris. Integer eget condimentum nisl. Ut quam est, tempor at ultrices vitae, vulputate vel ligula."
},
{
  name: 'Backseat Bandits',
  profile_pic: 'images/band-stock-photos/11.jpg',
  email: 'bandits@123.com',
  location: 'San Francisco',
  music_link: '#',
  on_lookout: true, 
  primary_instrument: "guitar",
  secondary_instrument: "piano",
  primary_genre: "folk",
  secondary_genre: "pop",
  availability: "weekdays",
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet sollicitudin sem, sed ullamcorper elit. Duis ultrices laoreet mauris, ac imperdiet nibh blandit nec. Cras ultricies dictum ullamcorper. Nulla blandit pretium nunc eget lacinia. Vivamus ac erat venenatis, pulvinar orci eu, accumsan quam. Nulla vitae pretium velit. Donec in turpis urna. Aliquam ultricies posuere est, vulputate faucibus risus ornare sed. In consectetur sed risus sit amet volutpat. In mauris ante, commodo iaculis feugiat sed, cursus sed nibh. Vestibulum sodales a orci sit amet scelerisque. Aliquam leo magna, suscipit id molestie eu, vehicula tincidunt dui. Vivamus ac molestie mauris. Integer eget condimentum nisl. Ut quam est, tempor at ultrices vitae, vulputate vel ligula."
},
{
  name: "Timbuk and the TuTu's",
  profile_pic: 'images/band-stock-photos/12.jpg',
  email: 'tutus@123.com',
  location: 'San Francisco',
  music_link: '#',
  on_lookout: true, 
  primary_instrument: "guitar",
  secondary_instrument: "bass",
  primary_genre: "folk",
  secondary_genre: "rock",
  availability: "weekdays",
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet sollicitudin sem, sed ullamcorper elit. Duis ultrices laoreet mauris, ac imperdiet nibh blandit nec. Cras ultricies dictum ullamcorper. Nulla blandit pretium nunc eget lacinia. Vivamus ac erat venenatis, pulvinar orci eu, accumsan quam. Nulla vitae pretium velit. Donec in turpis urna. Aliquam ultricies posuere est, vulputate faucibus risus ornare sed. In consectetur sed risus sit amet volutpat. In mauris ante, commodo iaculis feugiat sed, cursus sed nibh. Vestibulum sodales a orci sit amet scelerisque. Aliquam leo magna, suscipit id molestie eu, vehicula tincidunt dui. Vivamus ac molestie mauris. Integer eget condimentum nisl. Ut quam est, tempor at ultrices vitae, vulputate vel ligula."
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
