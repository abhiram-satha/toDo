DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS statusname CASCADE;
DROP TABLE IF EXISTS posts CASCADE;
DROP TABLE IF EXISTS comments CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY NOT NULL,
    email VARCHAR(30) NOT NULL UNIQUE,
    password VARCHAR(90) NOT NULL,
    username VARCHAR(30) NOT NULL UNIQUE
);

CREATE TABLE statusname (
    id SERIAL PRIMARY KEY NOT NULL,
    statusid VARCHAR(30) NOT NULL UNIQUE
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY NOT NULL,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    message TEXT,
    status_id INTEGER REFERENCES statusname(id) ON DELETE CASCADE
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY NOT NULL,
    comment TEXT,
    post_id INTEGER REFERENCES posts(id) ON DELETE CASCADE
)

