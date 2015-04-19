The server is create by the node file itself.
Npm modules needed are :-
   express
   body-parser
   mongoose
   path
   swig
   serve-favicon
For the code to be deployed on a ubuntu server you need the following installation commands.
$ sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
$ echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' | sudo tee /etc/apt/sources.list.d/mongodb.list
$ sudo apt-get update
$ sudo apt-get install mongodb-org mongodb-org-server
$ sudo apt-get install python-software-properties
$ sudo apt-add-repository ppa:chris-lea/node.js
$ sudo apt-get update
$ sudo apt-get install nodejs
$ sudo npm install mongoose
$ sudo npm install body-parser
$ sudo npm install path
$ sudo npm install express
$ sudo npm install swig
$ sudo npm install serve-favicon
$ node app.js
