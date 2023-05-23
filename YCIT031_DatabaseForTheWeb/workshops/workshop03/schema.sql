-- create addresses table
CREATE TABLE addresses (
    id numeric(10) PRIMARY KEY NOT NULL,
    street_address VARCHAR(255) NOT NULL,
    street_suffix VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    state_province VARCHAR(255) NOT NULL,
    state_abbrev VARCHAR(255) NOT NULL,
    postal_zip VARCHAR(255) NOT NULL,
    country VARCHAR(255) NOT NULL,
    country_code VARCHAR(255) NOT NULL,
    latitude numeric(10,6) NOT NULL,
    longitude numeric(10,6) NOT NULL
);