DROP TABLE bitings;
DROP TABLE zombies;
DROP TABLE victims;

CREATE TABLE zombies
(
  id SERIAL8 primary key,
  name VARCHAR(255) not null,
  type VARCHAR(255)
);

CREATE TABLE victims
(
  id SERIAL8 primary key,
  name VARCHAR(255) not null,
  run_speed INT2
);

CREATE TABLE bitings
(
  id SERIAL8 primary key,
  victim_id INT8 references victims(id),
  zombie_id INT8 references zombies(id),
  infected_on DATE not null
);

INSERT INTO victims (name, run_speed) VALUES ('Jeff 3', 120);
INSERT INTO victims (name, run_speed) VALUES ('Logan',85);
INSERT INTO victims (name, run_speed) VALUES ('Winnie',75);
INSERT INTO victims (name, run_speed) VALUES ('Will',1);

INSERT INTO zombies (name, type) VALUES ('John', 'Crawler');
INSERT INTO zombies (name, type) VALUES ('Simon', 'Runner');
INSERT INTO zombies (name, type) VALUES ('Beth', 'Walker');
INSERT INTO zombies (name, type) VALUES ('Matthew', 'Bearded');

INSERT INTO bitings (zombie_id, victim_id, infected_on) VALUES (1, 1, 'Jan 12 2015');
INSERT INTO bitings (zombie_id, victim_id, infected_on) VALUES (2, 2,'Jan 13 2015');
INSERT INTO bitings (zombie_id, victim_id, infected_on) VALUES (3, 3, 'Jan 14 2015');
INSERT INTO bitings (zombie_id, victim_id, infected_on) VALUES (1, 2, 'Jan 12 2015');

-- First, find out the ID of John.
SELECT * FROM zombies WHERE name = 'John';

-- We just want the victim_id for our purposes.
SELECT victim_id FROM bitings WHERE zombie_id = 1;

-- Now we can get the people's names from the person_ids. Note that (2,3) is kind of like an array.
SELECT name FROM victims WHERE id IN (1,2);