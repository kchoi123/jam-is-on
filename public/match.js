var Band = require("../models/band.js")

var Op = Sequelize.Op;

function exactMatch(musician) {

    Band.findAll({
      where: {
        [Op.or]: [
            {primary_genre: musician.primary_genre},
            {secondary_genre: musician.primary_genre},
            {primary_genre: musician.secondary_genre},
            {secondary_genre: musician.secondary_genre}
        ],
        [Op.or]: [
            {primary_instrument: musician.primary_instrument},
            {secondary_instrument: musician.primary_instrument},
            {primary_instrument: musician.secondary_instrument},
            {secondary_instrument: musician.secondary_instrument}
        ],
        availability: musician.availibility
      },
        limit: 5,
    })
}

exactMatch(musician);

function closeMatch(musician) {
    Band.findAll({
        [Op.or]: [
            {where: {
                [Op.or]: [
                    {primary_genre: musician.primary_genre},
                    {secondary_genre: musician.primary_genre},
                    {primary_genre: musician.secondary_genre},
                    {secondary_genre: musician.secondary_genre}
                ]
            }},
            {where: {
                [Op.or]: [
                    {primary_instrument: musician.primary_instrument},
                    {secondary_instrument: musician.primary_instrument},
                    {primary_instrument: musician.secondary_instrument},
                    {secondary_instrument: musician.secondary_instrument}
                ]
            }}
        ]
    })

}
  




// function findMatch(musician) {

//    // Create musician object to compare with bands:
//    var thisMusician = {
//        instruments: [musician.primary_instrument],
//        genres: [musician.genre],
//        availibility: musician.availibility
//    }

//      // Include second instrument and second genre if present:
//         if (musician.secondary_instrument) {
//             thisMusician.instruments.push(musician.secondary_instrument);
//             console.log(musician.name + " has a second instrument");
//             }

//         if (musician.secondary_genre) {
//             thisMusician.genres.push(musician.secondary_genre);
//             console.log(musician.name + " has a second genre");
//             }
    

//     var possibleBands = [];

//     // Loop through Bands array
//     for (var i = 0; i < bands.length; i++) {

//         // Only consider bands looking for musicians:
//         if (bands[i].musician === false) {
//             return;
//         }

//         // Grab on to current band in Bands array:
//         var thisBand = {
//             instruments: [bands[i].primary_instrument],
//             genres: [bands[i].genre],
//             availibility: bands[i].availibility
//         }

//             // Include second instrument and second genre if present:
//             if (bands[i].secondary_instrument) {
//                 thisBand.instruments.push(bands[i].secondary_instrument);
//                 console.log(bands[i].name + " has a second instrument");
//                 }

//             if (bands[i].secondary_genre) {
//                 thisbands[i].genres.push(bands[i].secondary_genre);
//                 console.log(bands[i].name + " has a second genre");
//                 }

//         // Compare musician and band:
//         function compareGenres(musArr, bandArr) {
//             musArr = musArr.sort();
//             bandArr = bandArr.sort();

//             if (arr1.length !== _arr2.length)
//         }


//     console.log("Total Diff: " + totalDifference
//     + "\nBand Diff: " + bandDifference
//     + "\nClosest Match: " + closestMatch.name);

//     console.log(closestMatch);

//     return closestMatch;
//   }
// }

// // response.json(findMatch(request.body));
