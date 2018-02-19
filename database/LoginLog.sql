CREATE TABLE LoginLog (
	LoginLogID INT NOT NULL,
	DateCreated DATETIME,
	DateUpdated DATETIME,
	LoginLogcol varchar,
	UserID int,

	PRIMARY KEY (LoginLogID),
	FOREIGN KEY (UserID) REFERENCES User(UserID)
);