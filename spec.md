# Specifications for the Javascript Rails Assessment

- [x] Must have a Rails Backend and new requirements implemented through JavaScript.

- [x] Makes use of ES6 features as much as possible(e.g Arrow functions, Let & Const, Constructor Functions)

- [x] Must translate the JSON responses into Javascript Model Objects using either ES6 class or constructor syntax. 

- [x] Must render at least one index page (index resource - 'list of things') via JavaScript and an Active Model Serialization JSON Backend.

- [x] Must render at least one show page (show resource - 'one specific thing') via JavaScript and an Active Model Serialization JSON Backend.

- [x] Your Rails application must reveal at least one `has-many` relationship through JSON that is then rendered to the page.

- [x] Must use your Rails application to render a form for creating a resource that is submitted dynamically through JavaScript.

- [x] At least one of the JS Model Objects must have a method on the prototype.

# Project Repo Specs:
Read Me file contains:
Application Description
Installation guide (e.g. fork and clone repo, migrate db, bundle install, etc)
Contributors guide (e.g. file an issue, file an issue with a pull request, etc)
Licensing statement at the bottom (e.g. This project has been licensed under the MIT open source license.)

#Repo General
You have a large number of small Git commits
Your commit messages are meaningful
You made the changes in a commit that relate to the commit message
You don't include changes in a commit that aren't related to the commit message

# Sample Data to use for Testing

![localhost](https://github.com/edb-c/the-gradebook/blob/master/test_logins.png)




Well I think I am almost done with this project. As it goes, we are tasked to modify our last Rails project, adding new requirements using Active Model Serializer and Javascript, etc. It was a pretty interesting project, so many moving pieces of the puzzle.

Here is my original project: The Original Gradebook

For this project, I decided to let (somewhat) go of my good friend, OCD, and just get this thing functional and checked off my endless to-do-list. Overall, I am still happy with my learnings.

The process is a blur and, I suppose as a junior, it is still fuzzy. Clarity will come with more practice and exposure.

Going through the Project Specs, I decided that I would render a teacher's listing (the index) and then render the assignment details for one of the teacher's courses (the show). First, I used Active Model Serializer, which is a RUBY gem that formats the data in to JSON. Once I was able to view data on the corresponding .json url, I went on to tackle how to asynchronously 'get' this JSON data to display by appending it to the DOM of the page. I decided to use the Javascript Fetch api. I added to my endless to-do-list, to go back and code a version using jQuery too. I used the course details page, to render the form that will 'POST' using the Fetch api and used that rendered JSON to append the entered info to the page.

Lastly and still in-progress, I am going back to use as much E6 and class constructor syntax.

Project Specs

Must have a Rails Backend and new requirements implemented through JavaScript. (check)

Must render at least one index page (index resource - 'list of things') via JavaScript and an Active Model Serialization JSON Backend. (check)

Must render at least one show page (show resource - 'one specific thing') via JavaScript and an Active Model
Serialization JSON Backend. (check)

Your Rails application must reveal at least one has-many relationship through JSON that is then rendered to the
page. (check)

Must use your Rails application to render a form for creating a resource that is submitted dynamically through JavaScript. (check)

Makes use of ES6 features as much as possible(e.g Arrow functions, Let & Const, Constructor Functions)

At least one of the JS Model Objects must have a method on the prototype. (in-progress)

















