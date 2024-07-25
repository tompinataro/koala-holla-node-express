CREATE TABLE "koalas" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(40),
	"favorite_color" VARCHAR(20),
	"age" SMALLINT,
	"ready_to_transfer" BOOL,
	"notes" TEXT);

INSERT INTO "koalas"
	("name","favorite_color","age","ready_to_transfer","notes")
	VALUES
	('Scotty','Red',4,TRUE,'Born in Guatemala'),
	('Jean','Green',5,TRUE,'Allergic to lots of lava'),
	('Ororo','Yellow', 7, FALSE, 'Loves listening to Paula (Abdul)'),
	('K''Leaf','Purple', 15, FALSE, 'Never refuses a treat'),
	('Charlie', 'Orange',9,TRUE, 'Favorite band is Nirvana'),
	('Betsy','Blue',4,TRUE, 'Has a pet iquana');