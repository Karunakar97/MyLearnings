# EP 13

## Creating a database in mongo db

- create mongo db account
- create cluster, create user to access
- get connection link and update password with user password
- create database , collection

## Connect with db

- refer to dataBase.js file
- install mongodb driver package and create connection with MongoClient, with the help of mongo api documentation
- try crud operations insert, find, update, delete

- we have created db connection but we will use mongoose package for db connection and all other operations

<hr style="height:1px; background-color:#ccc; border:none;" />

# EP 14

## Microservices vs Monolith

### Water fall model

### (SDLC)

- Requirement --> Design --> Development --> Testing --> Deployment --> Maintenance

### Monolith

- a single big project includes frontend code, backend code, cb connection, authentication, email services, analytics
- basically a single project or a single code base deployed in one project or one application

### Microservices

- a large application broke into a collection of small loosely coupled applications
- in front end we may write dashboards in one language in different project and others in different
- in backend we separate big modules into separate small microservices, and separate db's
- example notifications is separate small application, and likewise email services, chat like
- maintaining separate code bases, tech stacks
- maybe different teams
- majority companies using it now for large projects
- it has pros and cons
- all applications talks using api's

<hr style="height:1px; background-color:#ccc; border:none;" />

# EP 15

## Building DevTinder application

## Features, HLD, LLD and Planning

- without proper planning we may need to restructure our code many time
- Get project planned first then development will be easy

### step one

- We need to plan define features first
- In DevTinder application lets build Sign up, login, update profile, feed page -explore , send connection request,
- see our matches , see the requests we sent

### step two

- DB plan, Collections/tables, schema we need(data types, length, default, mandatory etc), think about api's/services
- so that we don't need to change in the feature in few db's changing schema is hard
- In our DevTinder we need collections like, User(dedicated to user personal details),
- Connection Request(dedicated to connection information, who sent to whom and status of it) it's kind of relation collection
- Feed(what we will show in the feed)

### step three

- Plan services
- REST API's - Representational State Transfer (Application Programming Interface)
- Set of rules to communicate between two applications like front end app to backend app or db
- EX: The web apps using HTTP methods like GET, POST, PUT, DELETE, PATCH etc methods often transfers JSON data
- We would be needing different api's
- signUpUser(POST), loginUser, getUser(GET), updateUser(PUT/PATCH), deleteUser(DELETE)
- sendRequest, reviewRequest, deleteRequest, getAllRequests
