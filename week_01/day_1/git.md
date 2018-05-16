# Git & GitHub (1 hr)

## Objectives
- Understand the purpose of source control
- Use git for source control
  - stage and commit changes
  - inspect history and view old code
- integrate local repos with remotes via GitHub

## What is git?

### Real world example

Working on a **Very Important Document** (presentation, CV, etc.):

- Want a backup - save to Dropbox or similar
- Want older versions (history, milestones)
  - CV_old.pdf, CV_2016_08.doc, etc.
- Share the document for feedback
  - shared Dropbox folder, email, etc.

### Sum up

So git allows us to:
1. Back up code.
2. Keep old versions of the code around as "save points"
3. Look back over a history of what you've done
4. Share code with others

## History

In **the bad old days**...
- one copy of code on a big server
- developer would "check out" a single file
- nobody else could touch that file while it was out
- Couldn't work on code without being in the office
- Encourages a smaller number of bigger changes

Now **with git**...
- everyone has a full copy of the code
- it *might* be on a server
- but it doesn't need to be
- makes combining different versions simple(r)
- encourages a bigger number of small changes

## Jargon

A **repository** is the folder which is under source control.  
A change is **staged** when we have flagged it as ready to be saved.  
When we make a "save-point", we say we are **committing** our changes.  
When we go back to an older version we say changes have been **reverted**.  
When we combine two sets of commits we say we are **merging** the changes.

## Let's git it on!

- Let's create a folder in the home directory (`~`)
```
mkdir git_demo
```
- and move into that folder
```
cd git_demo
```
- and now, let's create a new repository
```
git init
```

*What does `master` mean?*  
"branch" - allows for concurrent versions of codebase.
**Do not worry about this**.  
It'll make more sense when you use branches of your own.  
For now: "master" should always contain *current* and *working* code.

- Let's add some files to our repo!
```
touch dog.txt cat.txt
```
- What does git think is happening?
```
git status
```
- Let's stage the files, so they're ready to be committed (explain `.`)
```
git add .
```
- Check status again
- Now let's commit the changes!
```
git commit -m "Initial commit"
```
- Add "meow" to cat and "woof" to dog.
- Stage, commit and log again.

Regular, small commits. (Some commit almost every change).

## Making a backup

- So far we have local
- Want to save the code somewhere
- so we can "push up" or "pull down" changes as necessary

ENTER GITHUB.

- store repos remotely
- a "central" copy
- Open source cloning! (Swift?)
- now, if laptop explodes, or a dog eats it, or you `rm -rf` your home directory, the rest of us can keep on working on code while we laugh at your predicament.

## Using GitHub

- Create new repo
- Link with cat/dog repo
- push/pull changes
- `git clone`

## Further reading
- Investigate!
- Don't worry too much -  30 day cache
- Things can be saved (though it might take time)
- Find out what a `.gitignore` file does.
