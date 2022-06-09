-- CREATE TABLE users (
--     id SERIAL PRIMARY KEY NOT NULL,
--     email VARCHAR(30) NOT NULL UNIQUE,
--     password VARCHAR(90) NOT NULL,
--     username VARCHAR(30) NOT NULL UNIQUE
-- );

INSERT INTO users(email, password, username) VALUES ('test123@123.com', 'test', 'test123');
