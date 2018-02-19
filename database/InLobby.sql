CREATE TABLE InLobby (
	InLobbyID INT NOT NULL,
	Status varchar(45),
	UserID int,

	PRIMARY KEY (InLobbyID),
	FOREIGN KEY (UserID) REFERENCES User(UserID)
);