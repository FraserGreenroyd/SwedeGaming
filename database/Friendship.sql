CREATE TABLE Friendship (
	FriendshipID INT NOT NULL auto_increment,
	Status bit,
	RequesterID INT NOT NULL,
	AddresseeID INT NOT NULL,

	PRIMARY KEY (FriendshipID),
	FOREIGN KEY (RequesterID) REFERENCES User(UserID),
	FOREIGN KEY (AddresseeID) REFERENCES User(UserID)
);