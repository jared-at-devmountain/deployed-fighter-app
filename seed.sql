DROP TABLE IF EXISTS weapons;
DROP TABLE IF EXISTS fighters;

CREATE TABLE fighters(
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    power INT NOT NULL,
    hp INT NOT NULL,
    type VARCHAR NOT NULL
);

CREATE TABLE weapons(
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    power INT NOT NULL,
    owner_id INT REFERENCES fighters(id)
);
