# Introduction to Git & Github

##Objectives
Students will be able to...

1. identify the use cases for version control
2. describe what Git is
3. use Git to stage and commit files
4. utilize Github as a collaborative tool


###What is version control??
So before we begin I'd like you to copy this html into a file called index.html
```html
<html>
	<head>
		<style>
	
		</style>
	</head>

	<body>

	</body>
</html>
```

Make some changes. Add a header with your name and a list of your favorite things.

Now that you've got something pair up with a neighbor and lets combine the two html files into one.

Let's imagine what would happen if we kept repeating this process until we have every student and their favorite things in one file.

This sucks right? Why do you guys think that this sucks? What could we do to make it better?

###Queue in Git!
Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.

Git is hands down the most popular version control system in existence. It was created by Linus Torvalds, the same guy that made the kernel to the GNU Linux operating system.

Hopefully by now everyone has already downloaded a copy of git. If not go [here](http://git-scm.com/download).

```bash
$ git
```

```bash
$ git init
```
check status
```bash
$ git status
```

```bash
$ git add FILE_NAME
```
check status
```bash
$ git status
```

```bash
$ git commit -m "Put Message Here"
```

```bash
$ git log
```

```bash
$ git branch BRANCH_NAME
```