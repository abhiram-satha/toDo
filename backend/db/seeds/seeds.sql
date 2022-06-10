INSERT INTO users(email, password, username) VALUES ('test123@123.com', 'test', 'test123');

INSERT INTO statusname(statusid) VALUES ('new');
INSERT INTO statusname(statusid) VALUES ('pending');
INSERT INTO statusname(statusid) VALUES ('completed');

INSERT INTO posts(user_id, message,status_id) VALUES (1, 'Work on portfolio', 1);
INSERT INTO posts(user_id, message,status_id) VALUES (1, 'Learn Typescript', 1);
INSERT INTO posts(user_id, message,status_id) VALUES (1, 'Finish Lighthouse Labs', 3);
INSERT INTO posts(user_id, message,status_id) VALUES (1, 'Work on to do react', 2);

-- CREATE TABLE statusname (
--     id SERIAL PRIMARY KEY NOT NULL,
--     statusid VARCHAR(30) NOT NULL UNIQUE
-- );

-- CREATE TABLE posts (
--     id SERIAL PRIMARY KEY NOT NULL,
--     user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
--     status_id INTEGER REFERENCES statusname(id) ON DELETE CASCADE
-- );
