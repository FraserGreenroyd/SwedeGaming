CREATE TABLE AdminUser (
	AdminUserID INT NOT NULL,
	UserID INT not null,

	PRIMARY KEY (AdminUserID),
	FOREIGN KEY (UserID) REFERENCES User(UserID)
);