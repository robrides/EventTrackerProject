## Ride Tracker
#### Skill Distillery Individual Full-Stack REST API and JPA Project

### Overview
This is a Java Persistence Application Programming Interface (JPA API), Spring REST, TypeScript full-stack webapp with full CRUD functionality. The objective in developing this application was to reenforce the steps to build and deploy a full-stack REST and JPA webapp.  

### Available API Routes

| Return Type | Route                 | Functionality                  |
|-------------|-----------------------|--------------------------------|
| `List<Ride>`  |`GET api/rides`        | Gets all rides                 |
| `Ride`        |`GET api/rides/{id}`   | Gets one ride by id            |
| `Ride`        |`POST api/rides`       | Creates a new ride             |
| `Ride`        |`PUT api/rides/{id}`   | Replaces an existing rides by id|
| `Boolean`     |`DELETE api/rides/{id}`| Deletes an existing rides by id |

#### Hit the APIs Live

http://54.214.129.164:8080/RideTrackerREST

### Installation

* Prerequisites: Spring STS IDE, AWS Linux AMI, JDK, MySQL, Postman (or your API test tool of choice), your chosen port allowed for external traffic to your server.
* Run the SQL script provided to build the database. One ride will be available to make calls against. Add others as desired.
* With a copy of the project in your Spring Tool Suite, create a .war file.
* Deploy the .war file to your server.
* Ensure the database account to be used by the app exists in MySQL on your server.
* Connect to your app from a browser using `http://youripaddress:AppPort/nameofproject`

### UML Diagram

![UML Diagram](https://github.com/robrides/EventTrackerProject/blob/master/RideTrackerJPA/RideTrackerUML.png)

![UML Diagram](https://github.com/robrides/EventTrackerProject/blob/master/RideTrackerREST/RideTrackerUML_REST.png)

### Entity Relationship Diagram

![ERD](https://github.com/robrides/EventTrackerProject/blob/master/DB/ridetrackerdbERD.png)

### Technologies Used

Spring Tool Suite (STS/Eclipse), Spring REST, Spring Data JPA, Java, TypeScript, HTML, CSS, Hibernate, Gradle, Tomcat, MySQL, MySQL WorkBench, C.R.U.D functionality, MAMP (MacOS, Apache, MySQL, PHP/Python/Perl(Not used)), log4j, JDK, Atom, Bash Terminal

### Lessons Learned
The flow of controller calls to services then to the repository with Spring Data JPA.  This differs from using a data access object speeding up development through streamlining the coding of calls to the database. Took a little getting use to.

### Future Improvements
This is currently a two table implementation.  Future plans include additional capability which will require seven total tables.  Adding the ability to create accounts to include an admin role is also planned.  The current HTML/CSS/TypeScript frontend is only to demonstrate functionality. A more robust TypeScript frontend will be a future improvement.
