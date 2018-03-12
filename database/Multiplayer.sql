USE swedeuniverse;
CREATE TABLE Multiplayer(
	MultiplayerID INT NOT NULL auto_increment,
	Status VARCHAR(45),
	RequesterID int, 
	AddresseeID int, 

	PRIMARY KEY (MultiplayerID),
	FOREIGN KEY (RequesterID) REFERENCES User(UserID),
	FOREIGN KEY (AddresseeID) REFERENCES User(UserID)
);