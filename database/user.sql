USE SwedeUniverse
CREATE TABLE user (
	UserID INT NOT NULL,
	LastName varchar(255) NOT NULL,
	FirstName varchar(255) NOT NULL,
	DoB DATE NOT NULL,
	Email varchar(255) NOT NULL,
	EmailVerified bit,
	Password varchar(255) NOT NULL,
	PassHash varchar(255) NOT NULL,

	PRIMARY KEY (UserID),
	UNIQUE (Email)
);