function findMatch(musician) {

    // Create object to compare with bands:
   var thisMusician = {
       instruments: [musician.primary_instrument],
       genres: [musician.genre],
       availibility: musician.availibility
   }


   if (musician.secondary_instrument) {
       thisMusician.instruments.push(musician.secondary_instrument);
       console.log(musician.name + " has a second instrument");
   }

   if (musician.secondary_genre) {
    thisMusician.genres.push(musician.secondary_genre);
    console.log(musician.name + " has a second genre");
    }

   var thisBand = {
    instruments: [],
    genres: [],
    availibility: musician.availibility
}

    for (var i = 0; i < bands.length; i++) {
        var bandScores = bands[i].answers;
        var musicianScores = musician.answers;
    

        for (var j = 0; j < musicianScores.length; j++) {
            bandDifference += Math.abs((musicianScores[j] - bandScores[j]));
        } 

        if (bandDifference < totalDifference) {
            totalDifference = bandDifference;
            closestMatch = bands[i];
        }
        
        bandDifference = 0;
    }
    console.log("Total Diff: " + totalDifference
    + "\nBand Diff: " + bandDifference
    + "\nClosest Match: " + closestMatch.name);

    console.log(closestMatch);

    return closestMatch;
}

response.json(findMatch(request.body));