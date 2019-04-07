function findMatch(musician) {

    // Create musician object to compare with bands:
   var thisMusician = {
       instruments: [musician.primary_instrument],
       genres: [musician.genre],
       availibility: musician.availibility
   }

     // Include second instrument and second genre if present:
        if (musician.secondary_instrument) {
            thisMusician.instruments.push(musician.secondary_instrument);
            console.log(musician.name + " has a second instrument");
            }

        if (musician.secondary_genre) {
            thisMusician.genres.push(musician.secondary_genre);
            console.log(musician.name + " has a second genre");
            }


    for (var i = 0; i < bands.length; i++) {

        if (bands[i].musician === false) {
            return;
        }
        var thisBand = {
            instruments: [bands[i].primary_instrument],
            genres: [musician.genre],
            availibility: musician.availibility
        }

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