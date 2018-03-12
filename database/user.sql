USE SwedeUniverse;
CREATE TABLE User (
	UserID INT NOT NULL auto_increment,
	Username varchar(255) NOT NULL,
	Email varchar(255) NOT NULL,
	EmailVerified bit(2),
	DateCreated DATETIME NOT NULL,
	DoB DATE NOT NULL,
	FirstName varchar(255) NOT NULL,
	LastName varchar(255) NOT NULL,
	Password varchar(255) NOT NULL,
	PassHash varchar(255) NOT NULL,
	DateUpdated DATETIME,
	ImageID int,
	Active varchar(45),
	AdminUserID int,

	PRIMARY KEY (UserID),
	UNIQUE (Email),
	UNIQUE (Username),
	FOREIGN KEY (ImageID) REFERENCES ProfileAvatar(ImageID),
	FOREIGN KEY (AdminUserID) REFERENCES AdminUser(AdminUserID)
);