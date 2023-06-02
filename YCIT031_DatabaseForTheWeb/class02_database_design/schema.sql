-- Create the "Patient Registration" table
create table patients (
    id serial primary key
    );


-- 1-to-(0 or 1) relationship table
create table patient_registrations (
    id serial primary key,
    other_last_name varchar(50),
    middle_name varchar(50),
    patient_id integer references patients(id) unique not null,
    last_name varchar(50) not null,
    first_name varchar(50) not null,
    birth_date date not null,
    gender varchar(20), --male, female, non-binary other, unknown
    health_card varchar(50) unique,
    email varchar(255), 
    phone_number varchar(20),
    street varchar(255),
    apartment varchar(255),
    city varchar(255),
    province_state varchar(255),
    postal_code varchar(255),
    zip_code varchar(255),
    country varchar(50),
    emergency_contact_name varchar(255),
    emergency_contact_phone varchar(50),
    general_notes varchar(5000),
    social_insurance_number varchar(20) unique,
    accomodations text,
    check (birth_date <= CURRENT_TIMESTAMP),
    check (gender in('male', 'female','non-binary','other', 'unknown')),
    foreign key (patient_id) references patients(id)
);


CREATE UNIQUE INDEX idx_health_card ON patient_registrations (health_card) WHERE health_card IS NOT NULL;

--enforcing unique health_card but allowing multiple nulls
create table medical_billings (
    id serial primary key,
    patient_id integer references patients (id),
    invoice_number varchar(10) not null,
    balance numeric(10,2) default 0,
    billing_date date not null,
    billing_amount numeric(10,2) not null,
    billing_notes varchar(5000),
    check (billing_date <= CURRENT_TIMESTAMP)
);
