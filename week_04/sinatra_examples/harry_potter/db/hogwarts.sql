DROP TABLE houses;
DROP TABLE students;

CREATE TABLE houses
(
  id SERIAL8 primary key,
  name VARCHAR(255)
);

CREATE TABLE students
(
  id SERIAL8 primary key,
  first_name VARCHAR(255),
  second_name VARCHAR(255),
  age INT2,
  image_url TEXT,
  house_id INT2 references houses(id)
);










