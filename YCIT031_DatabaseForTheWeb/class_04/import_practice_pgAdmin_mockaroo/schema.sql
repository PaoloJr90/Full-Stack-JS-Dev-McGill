-- create users table
create table users_sessions (
    id          integer primary key,
    first_name  varchar(50) not null,
    last_name   varchar(50) not null,
    email       varchar(255) not null,
    gender      varchar(20) not null,
    ip_address  varchar(20) not null
)
