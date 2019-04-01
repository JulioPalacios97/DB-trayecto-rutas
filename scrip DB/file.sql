CREATE DATABASE JULIODB;
USE JULIODB;

CREATE TABLE routes(
    idroute INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    route_name VARCHAR(50) NOT NULL,
    origin VARCHAR(100) NOT NULL,
    destination VARCHAR(100) NOT NULL
);

CREATE TABLE units(
    idunit INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    brand VARCHAR(100) NOT NULL,
    model VARCHAR(100) NOT NULL,
    license_plate VARCHAR(100) NOT NULL
);

CREATE TABLE companies(
    idcompany INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    company_name  VARCHAR(100) NOT NULL,
    address VARCHAR(200) NOT NULL,
    telephone VARCHAR(100) NOT NULL
);

CREATE TABLE times_record(
    idrecord INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    start_time TIME NOT NULL,
    real_time TIME NOT NULL,
    final_time TIME NOT NULL
);
CREATE TABLE stops(
    idstop INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    stop_place VARCHAR(100) NOT NULL,
    date DATETIME NOT NULL,
    latitude INT NOT NULL,
    longitude INT NOT NULL
);

CREATE TABLE stops_sequence(
    idsequence INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    idstop INT NOT NULL,
    idrecord INT NOT NULL,
    idroute INT NOT NULL,
    FOREIGN KEY (idstop) REFERENCES stops(idstop),
    FOREIGN KEY (idrecord) REFERENCES times_record(idrecord),
    FOREIGN KEY (idroute) REFERENCES routes(idroute)
);

CREATE TABLE registers(
    idregister INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    idsequence INT NOT NULL,
    idcompany INT NOT NULL,
    idunit INT NOT NULL,
    FOREIGN KEY (idsequence) REFERENCES stops_sequence(idsequence),
    FOREIGN KEY(idcompany) REFERENCES companies(idcompany),
    FOREIGN KEY (idunit) REFERENCES units(idunit)
);
