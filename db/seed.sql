INSERT INTO musician (name, email, location, band, primary_instrument, secondary_instrument, primary_genre, secondary_genre, schedule) 
VALUES ('Kevin', 'kevin@kchoi.co', 'San Francisco', true, 
JSON_ARRAY_INSERT(["guitar", "violin", "steelpan"]), JSON_ARRAY_INSERT(["house", "pop", "hip hop", "reggae", "dubstep"]), JSON_ARRAY_INSERT(["thursday", "friday", "saturday", "sunday", "monday"]));

INSERT INTO band (name, email, location, musician, primary_instrument, secondary_instrument, primary_genre, secondary_genre, schedule) 
VALUES ('Kevin', 'kevin@kchoi.co', 'San Francisco', true, 
JSON_ARRAY_INSERT(["guitar", "violin", "steelpan"]), JSON_ARRAY_INSERT(["house", "pop", "hip hop", "reggae", "dubstep"]), JSON_ARRAY_INSERT(["thursday", "friday", "saturday", "sunday", "monday"]));