CREATE TABLE HighScore (
	HighScoreID INT NOT NULL,
	DateCreated DATETIME,
	GameID int,
	UserID int,

	PRIMARY KEY (HighScoreID),
	FOREIGN KEY (GameID) REFERENCES Game(GameID),
	FOREIGN KEY (UserID) REFERENCES User(UserID)
);
