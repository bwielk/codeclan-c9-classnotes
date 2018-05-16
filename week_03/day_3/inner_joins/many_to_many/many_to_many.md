# Many To Many - Join Tables

So we've seen how we can join 2 tables. But what if we have more than that?

[i] Give out zombies.sql. Get them to drop the old zombies db and make a new zombieland db.

## Inner Joining Multiple Tables

In our zombies example, we might want to see a view that shows us a list of victims names, the zombie who bit them and the date they got infected. This will involve data from 3 tables.

Not to panic! It's very similar to what we just did.

Like before we'll decide what our left and right table will be. Let's say that the left table is victims and the right table is bitings.

## Let's make the magic happen

STEP ONE: Get all the columns from the left table (victims)
```
SELECT v.* FROM victims v;
```

STEP TWO: Bring in the matches from the right table (bitings) given a common key to match on

```
SELECT v.* FROM victims v
INNER JOIN bitings b
ON b.victim_id = v.id;
```

This is just like what we had before, we've found all the matching entries for the victims in the bitings table i.e. every victim that got bitten.

We can now think about this entrie statement as being the entire left side now, that we want to bring in some more information to.

STEP THREE: Bring in the NEXT table you want to join on.

```
SELECT v.* FROM victims v
INNER JOIN bitings b
ON b.victim_id = v.id
INNER JOIN zombies z
ON z.id = b.zombie_id;
```

Great - we still see the same information, the rows from victims, but if there's no errors our join has been successful.

STEP FOUR: Select the data from each table you are interested in.

```
SELECT v.name, z.name, b.infected_on FROM victims v
INNER JOIN bitings b
ON b.victim_id = v.id
INNER JOIN zombies z
ON z.id = b.zombie_id;
```

Additional Resources:

https://blog.codinghorror.com/a-visual-explanation-of-sql-joins/