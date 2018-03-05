CREATE TABLE LoginLog (
	LoginLogID INT NOT NULL,
	DateCreated DATETIME,
	DateClosed DATETIME,
	UserID int,

	PRIMARY KEY (LoginLogID),
	FOREIGN KEY (UserID) REFERENCES User(UserID)
);