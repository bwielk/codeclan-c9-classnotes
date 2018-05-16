# Joining data together

[i:] Get the students to drop database star wars, recreate and run the jedi.sql script so everyone is on the same page.

[i:] DON'T TYPE THIS IN PSQL TERMINAL! MAKE A queries.sql SCRIPT OR SOMETHING! OR YOU ARE IN FOR A BAD TIME!

In our jedi example, we linked the jedi to a lightsaber through the owner_id but we didn't have any easy way to get that information.

Say for example, we wanted to view a list of jedi names with the relvant information about their lightsaber. We didn't have a way to achieve this in one query.

We need to add a new tool to our toolbelt to make this magic happen - joins.  

## Joins

When we join data, there's a few different ways we can approach it but the one thing that really matters is that there has to be some commonality present in the tables. In our case, we have the jedi id linking the two tables and we can use this to do some interesting things.

With joins, we think in terms of a 'right' column and a 'left' column. These can be any table you like, but it's worth being clear in your head which one you are talking about.

Let's say the Jedi table is the 'left' table and the Lightsabers table is the 'right table'.

You can think of a join query as making a sort of 'middle' view that takes data from both sides and combines in.

We might want to:
- find a match between the columns in both tables using a common key => INNER JOIN
- return all rows from the left table (jedi), with the matching rows in the right table (lightsabers). The result is NULL in the right side when there is no match. => LEFT JOIN
- return all rows from the right table (lightsaber), with the matching rows in the left table (jedi). The result is NULL in the left side when there is no match. => RIGHT JOIN

The first option is the most common and that's what we are going to look at just now.

## Aliases

Before we start, let's talk about aliases. If we have a table with a long name, we can make a shorter one to work with in our queries. This is really helpful when our queries get more complex! Normally we would write something like this:

```
SELECT colour FROM lightsabers;
```

We can alias this like so:

```
SELECT l.colour FROM lightsabers l;
```

This also helps when we have tables with the same property e.g. id or name etc. We can explicity say which table we want to use.

This will make a lot more sense when we make a join.

## INNER JOIN

INNER JOIN syntax is pretty weird, but hang in there and we'll be okay.

Let's see if we can list all of the jedi with their relevant lightsaber data.

STEP ONE: Select the columns from the left hand table, using an alias.

```
SELECT j.* FROM jedi j;
```

STEP TWO: Introduce the right hand table you want to bring into the join and the common property you want to match on

```
SELECT j.* FROM jedi j 
INNER JOIN lightsabers l 
ON j.id = l.owner_id;
```

Notice that it's only matched Luke and Obiwan, there is no sign of Moz. This is because there is no entry for her in the lightsabers table.

There's also no sign of the columns from the lightsabers table! How do you think we can fix this?

STEP THREE: Bring in the columns from the right hand table

```
SELECT j.*, l.* FROM jedi j 
INNER JOIN lightsabers l 
ON j.id = l.owner_id;
```

Whoot! There is our data!

[TASK:] See if you can return only the jedi name and lightsaber colour from the join.

```
SELECT j.name, l.colour FROM jedi j 
INNER JOIN lightsabers l 
ON j.id = l.owner_id;
```

## Left (Outer) Join

I mentioned earlier that we might want to do a query where we return all the rows from the left table (jedi), with the matching rows in the right table (lightsabers). In this case, any jedi with no matching lightsaber will have values shown as null for those columns.

```
SELECT j.*, l.* FROM jedi j 
LEFT JOIN lightsabers l 
ON j.id = l.owner_id;
```

Right joins are exactly the same, but with the tables swapped around. It doesn't matter for our lightsabers, since ever single lightsaber is owned by a jedi so there is never a case where a null would be shown.

