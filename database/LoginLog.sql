CREATE TABLE LoginLog (
	LoginLogID INT NOT NULL auto_increment,
	DateCreated DATETIME,
	DateClosed DATETIME,
	UserID int,

	PRIMARY KEY (LoginLogID),
	FOREIGN KEY (UserID) REFERENCES User(UserID)
);