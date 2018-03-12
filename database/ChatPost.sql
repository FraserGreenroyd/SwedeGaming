CREATE TABLE ChatPost (
	ChatPostID INT NOT NULL auto_increment,
	DateCreated DATETIME,
	DateUpdated DATETIME,
	Active varchar(45),
	UserID int,
	Message varchar(255),

	PRIMARY KEY (ChatPostID),
	FOREIGN KEY (UserID) REFERENCES User(UserID)
);