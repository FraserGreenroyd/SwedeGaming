USE SwedeUniverse
CREATE TABLE User (
	UserID INT NOT NULL,
	Username varchar(255) NOT NULL,
	Email varchar(255) NOT NULL,
	EmailVerified bit,
	DateCreated DATETIME NOT NULL,
	DoB DATE NOT NULL,
	FirstName varchar(255) NOT NULL,
	LastName varchar(255) NOT NULL,
	Password varchar(255) NOT NULL,
	PassHash varchar(255) NOT NULL,
	ImageID int,
	Active varchar(45),
	AdminUserID int,

	PRIMARY KEY (UserID),
	UNIQUE (Email),
	FOREIGN KEY (ImageID) REFERENCES ProfileAvatar(ImageID),
	FOREIGN KEY (AdminUserID) REFERENCES AdminUser(AdminUserID)
);