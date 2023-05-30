-- delete the database if it exists
DROP DATABASE IF EXISTS tools_store;

-- Create the database
CREATE DATABASE tools_store;

-- Connect to the database
\c tools_store;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL CHECK (length(first_name) >= 3),
    last_name VARCHAR(255) NOT NULL CHECK (length(last_name) >= 3),
    email VARCHAR(255) NOT NULL UNIQUE LIKE '%@%' CHECK (length(email) >= 4),
    phone VARCHAR(20) NOT NULL UNIQUE CHECK (length(phone) >= 10),
    address VARCHAR(255) NOT NULL CHECK (length(address) >= 10),
    city VARCHAR(255) NOT NULL CHECK (length(city) >= 3),
    state_province VARCHAR(255) NOT NULL CHECK (length(state_province) >= 3),
    country VARCHAR(255) NOT NULL CHECK (length(country) >= 3),
    postal_zip VARCHAR(20) NOT NULL CHECK (length(postal_zip) >= 3),
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE user_sessions (
    id SERIAL PRIMARY KEY,
    user_email VARCHAR(255) NOT NULL,
    session_id VARCHAR(255) NOT NULL,
    expires_at TIMESTAMP NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY (user_email) REFERENCES users (email) ON DELETE CASCADE
);

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL CHECK (length(name) >= 3),
    description TEXT NOT NULL CHECK (length(description) >= 10),
    product_id VARCHAR(255) NOT NULL UNIQUE CHECK (length(product_number) >= 3),
    brand_name VARCHAR(255) NOT NULL,
    category VARCHAR(255) NOT NULL CHECK (length(category) >= 3),
    type VARCHAR(255) NOT NULL CHECK (length(type) >= 3),
    color VARCHAR(255),
    image_url VARCHAR(255) NOT NULL,
    quantity INTEGER NOT NULL,
    cost DECIMAL(10, 2) NOT NULL CHECK (cost >= 0),
    price DECIMAL(10, 2) NOT NULL CHECK (price >= 0),
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    order_number VARCHAR(255) NOT NULL UNIQUE CHECK (length(order_number) >= 3),
    user_email VARCHAR(255) NOT NULL UNIQUE LIKE '%@%' CHECK (length(email) >= 4),
    product_id VARCHAR(255) NOT NULL,
    quantity INTEGER NOT NULL,
    price DECIMAL(10, 2) NOT NULL CHECK (price >= 0),
    total_price DECIMAL(10, 2) NOT NULL CHECK (total_price >= 0),
    disount DECIMAL(10, 2) NOT NULL CHECK (discount >= 0),
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY (user_email) REFERENCES users (id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products (id) ON DELETE CASCADE
);

CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL CHECK (length(first_name) >= 3),
    last_name VARCHAR(255) NOT NULL CHECK (length(last_name) >= 3),
    email VARCHAR(255) NOT NULL UNIQUE LIKE '%@%' CHECK (length(email) >= 4),
    phone VARCHAR(20) NOT NULL UNIQUE CHECK (length(phone) >= 10),
    address VARCHAR(255) NOT NULL CHECK (length(address) >= 10),
    city VARCHAR(255) NOT NULL CHECK (length(city) >= 3),
    state_province VARCHAR(255) NOT NULL CHECK (length(state_province) >= 3),
    country VARCHAR(255) NOT NULL CHECK (length(country) >= 3),
    postal_zip VARCHAR(20) NOT NULL CHECK (length(postal_zip) >= 3),
    orders_count INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY (id) REFERENCES users (id) ON DELETE CASCADE
);

CREATE TABLE shipments (
    id SERIAL PRIMARY KEY,
    order_id VARCHAR(255) NOT NULL,
    customer_id VARCHAR(255) NOT NULL,
    tracking_number VARCHAR(255) NOT NULL UNIQUE CHECK (length(tracking_number) >= 3),
    carrier VARCHAR(255) NOT NULL CHECK (length(carrier) >= 3),
    status TEXT NOT NULL CHECK (length(status) >= 3),
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY (order_id) REFERENCES orders (id) ON DELETE CASCADE,
    FOREIGN KEY (customer_id) REFERENCES customers (id) ON DELETE CASCADE
);