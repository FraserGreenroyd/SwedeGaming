USE swedeuniverse
CREATE TABLE GamePlayer (
	GamePlayerID INT NOT NULL auto_increment,
	UserID int,
	GameID int,
	MultiplayerID int,

	PRIMARY KEY (GamePlayerID),
	FOREIGN KEY (UserID) REFERENCES User(UserID),
	FOREIGN KEY (GameID) REFERENCES Game(GameID),
	FOREIGN KEY (MultiplayerID) REFERENCES Multiplayer(MultiplayerID)
);