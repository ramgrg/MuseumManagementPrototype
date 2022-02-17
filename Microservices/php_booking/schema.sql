CREATE DATABASE MuseumBookings;
USE MuseumBookings;

CREATE TABLE IF NOT EXISTS Bookings ( BookingId VARCHAR(11) NOT NULL, UserId INT NOT NULL , GuidedTour BOOLEAN, NoOfVisitors INT NOT NULL, DateOfVisit DATE NOT NULL, TimeOfVisit TIME NOT NULL, PRIMARY KEY (BookingId));
