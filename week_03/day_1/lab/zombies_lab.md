# Many to Many - Join tables

Let's create a new database to model a zombie apocalypse. We want to keep track of which victims have been bitten by which zombies and whe it happened. Looking at the description of what our DB will do, all the nouns indicate tables we'll need.

Zombies will have
- a name
- a type
- an id

Victims will have
- name
- run speed
- id

Extension:
How can we track the victims that a given zombie has bitten, and which zombies have bitten a given victim?


[i:] draw this on the board (many to many)
```
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

  INSERT INTO victims (name, run_speed) VALUES ('Jeff 3', 120);
  INSERT INTO victims (name, run_speed) VALUES ('Logan',85);
  INSERT INTO victims (name, run_speed) VALUES ('Winnie',75);
  INSERT INTO victims (name, run_speed) VALUES ('Will',1);

 INSERT INTO zombies (name, type) VALUES ('John', 'Crawler');
 INSERT INTO zombies (name, type) VALUES ('Simon', 'Runner');
 INSERT INTO zombies (name, type) VALUES ('Beth', 'Walker');
 INSERT INTO zombies (name, type) VALUES ('Matthew', 'Bearded');
```

Now zombie's can bite multiple people, and people can be bitten by multiple zombies (ouch) so we can't simply add a person_id to a zombie or a zombie_id to a person. What are we going to do?

This is where the magic of join tables comes in.

```
#psql terminal
 CREATE DATABASE zombies;

 #terminal
 touch zombies.sql
 psql -d zombies -f zombies.sql
```
This is fine, but we need some way to marry the two tables together. A zombie can bite many victims and a victim can be bitten by many zombies.

In zombies.sql
```
/** First drop table **/

DROP TABLE bitings

/** Last created table **/
CREATE TABLE bitings
(
  id SERIAL8 primary key,
  victim_id INT8 references victims(id),
  zombie_id INT8 references zombies(id),
  infected_on DATE not null
);
```

Now let's add some unfortunate incidents to the bitings table.
```
#zombies.sql CHECK THESE IDs exist in your db!!!
INSERT INTO bitings (zombie_id, victim_id, infected_on) VALUES (1, 1, 'Jan 12 2015');
INSERT INTO bitings (zombie_id, victim_id, infected_on) VALUES (2, 2,'Jan 13 2015');
INSERT INTO bitings (zombie_id, victim_id, infected_on) VALUES (3, 3, 'Jan 14 2015');

--zombie 1 went on a killing spree
INSERT INTO bitings (zombie_id, victim_id, infected_on) VALUES (1, 2, 'Jan 12 2015');
```

How do we find out the names of the people who have been bitten by John?
```
  #zombies.sql
  -- First, find out the ID of John.
  SELECT * FROM zombies WHERE name = 'John';

  -- We just want the victim_id for our purposes.
  SELECT victim_id FROM bitings WHERE zombie_id = 1;

  -- Now we can get the people's names from the person_ids. Note that (2,3) is kind of like an array.
  SELECT name FROM victims WHERE id IN (1,2);
 ```

We had to execute three queries here to get the data we wanted, which isn't very efficient. But it got us there.