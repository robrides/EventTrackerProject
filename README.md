## Ride Tracker
#### Skill Distillery Individual Full-Stack REST API and JPA Project

### Overview
This is a Java Persistence Application Programming Interface (JPA API), Spring REST, full-stack webapp with full CRUD functionality. The objective in developing this application was to reenforce the steps to build and deploy a full-stack REST and JPA webapp.  

#### View the application live...

[Ride Tracker - link coming soon](http://www.robcodes.pro)

### Available API Routes

| Return Type | Route                 | Functionality                  |
|-------------|-----------------------|--------------------------------|
| `List<Ride>`  |`GET api/rides`        | Gets all rides                 |
| `Ride`        |`GET api/rides/{id}`   | Gets one ride by id            |
| `Ride`        |`POST api/rides`       | Creates a new ride             |
| `Ride`        |`PUT api/rides/{id}`   | Replaces an existing rides by id|
| `Boolean`     |`DELETE api/rides/{id}`| Deletes an existing rides by id |

### Installation

* Prerequisites: Spring STS IDE, AWS Linux AMI, JDK, MySQL, Postman (or your API test tool of choice), your chosen port allowed for external traffic to your server.
* Run the SQL script provided to build the database. One ride will be available to make calls against. Add others as desired.
* With a copy of the project in your Spring Tool Suite, create a .war file.
* Deploy the .war file to your server.
* Ensure the database account to be used by the app exists in MySQL on your server.
* Connect to your app from a browser using `http://youripaddress:AppPort/nameofproject`

### UML Diagram

![UML Diagram](https://)

### Entity Relationship Diagram

![ERD](https://github.com/robrides/EventTrackerProject/blob/master/DB/ridetrackerdbERD.png)

### Technologies Used - under construction

Spring Tool Suite (STS/Eclipse), Spring REST, Spring Data JPA, Java, Hibernate, Gradle, Tomcat, MySQL, MySQL WorkBench, C.R.U.D functionality, MAMP (MacOS, Apache, MySQL, PHP/Python/Perl(Not used)), log4j, JDK, Atom, Bash Terminal

### Lessons Learned
The flow of controller calls to services then to the repository with Spring Data JPA.  This differs from using a data access object speeding up development through streamlining the coding of calls to the database. Took a little getting use to.

### Future Improvements
This is a single table implementation.  The current plan is to break this into six tables.  Adding the ability to create accounts to include an admin role is also planned.  A JavaScript frontend will round out the project.
