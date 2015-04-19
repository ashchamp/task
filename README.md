# task
Tracklabs first round back end task

Question : Create an express.js app from scatch with following APIs.
 
i. POST /user/add: 
  It should accept name,date of birth, mobileNumber and email as body params. 
  It should add user to ‘users’ collection.

ii.GET /users: 
  It should return all the users. 
  If user name is passed with user it sholud return that user only.

 
Declare ‘User’ model to contain 3 fields: 
i. name of type string and should be mandatory. 
ii. mobileNumber of type string. 
ii. email of type string, should check that email format is correct and must be unique. 
 
use  mongoDB database and mongoose npm module to connect to db. 
 
Error Handling: 
All errors must be properly handled and reported. It should set the status and message in 
case of error. 
For ex: If name or email is missing then it must report 500 with message ‘email is missing’. 
In case of any error (like document cannot be saved), it must be properly logged in db with 
stack trace and reported accordingly. Don't allow duplicate email ids to save.
Both error reporting and db logging must be done using middlewar. 
 
● If any API doesn’t exist then it must report 404 status and rended 404.html with 
message “what on earth are you doing here” in h1 tag. 
● You should also set a favicon and use ‘swig’ template engine. 
● It is nice to use promises specially for error propagation and chaining. Preferably use 
‘bluebird’ promise module. 
 


Submition instruction.
1) Submit a zip or war file.
2) Write  instructions to install or deploy this code on a server(tomcat,nginx etc.).
3) write prerequsites or procedures to install dependecies like npm modules, mongoDB driver used etc.
4) deploye the code on the server if any server/vm machine details are provided. I this case provide a link to running  app application.

