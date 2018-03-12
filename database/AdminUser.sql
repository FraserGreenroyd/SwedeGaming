USE swedeuniverse
CREATE TABLE AdminUser (
	AdminUserID INT NOT NULL auto_increment,
	UserID INT not null,

	PRIMARY KEY (AdminUserID),
	FOREIGN KEY (UserID) REFERENCES User(UserID)
);