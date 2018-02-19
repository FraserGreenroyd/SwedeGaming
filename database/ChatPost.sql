CREATE TABLE ChatPost (
	ChatPostID INT NOT NULL,
	DateCreated DATETIME,
	DateUpdated DATETIME,
	Active varchar(45),
	UserID int,

	PRIMARY KEY (ChatPostID),
	FOREIGN KEY (UserID) REFERENCES User(UserID)
);