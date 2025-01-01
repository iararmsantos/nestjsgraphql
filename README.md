# nestjsgraphql

During this course, I gained valuable insights and hands-on experience with NestJS, a powerful Node.js framework that combines the robustness of JavaScript with the scalability of TypeScript. This framework is designed for building maintainable, testable, and scalable back-end applications, whether they are monolithic or microservice-based.

Key areas of learning included:

1. Understanding NestJS Fundamentals

- Familiarity with NestJS architecture and its components.
- The ability to leverage TypeScript for a strongly-typed development experience.
- Utilizing the NestJS CLI to streamline project creation and management.

2. REST API Development

- Designing and developing REST APIs with CRUD operations.
- Authentication and authorization mechanisms, including JSON Web Tokens (JWT).
- Adopting security best practices, like password hashing and managing sensitive data.

3. Database Integration

- Utilizing TypeORM for seamless database interaction.
- Working with PostgreSQL and tools like pgAdmin for database management.
- Gaining hands-on experience with MongoDB for persistence.

4. Clean and Maintainable Code Practices

- Writing clean, industry-standard code with TypeScript best practices.
- Implementing environment-based configurations for scalable deployments.
- Efficient logging and error handling in back-end applications.

5. Advanced NestJS Features

- Using Pipes for data validation.
- Guarding endpoints with Guards to manage user access.
- Creating and managing Data Transfer Objects (DTOs) for structured communication.
- Exploring GraphQL for advanced API development.

6. Testing and Deployment

- Unit testing NestJS applications for robustness.
- Deploying production-ready applications to Amazon Web Services (AWS).

7. Hands-On Tools

- Using Postman to test and debug back-end services.
- Leveraging pgAdmin for database interface management.

This course not only enhanced my technical expertise but also deepened my understanding of building production-ready, secure, and scalable back-end systems. It has equipped me with the skills to apply best practices in real-world applications and reinforced my interest in creating efficient, maintainable software solutions.

### To run this:

### Nestjs

1. Clone this repository: git clone https://github.com/iararmsantos/nestjsgraphql.git
2. Enter in subfolder project (nestjs-task-management)
3. Run `npm install`
4. In Postman import NestJsUdemyAriel.postman_collection.json
5. Run the service: `npm run start:dev`
6. Now you will be able to test the endpoint using Postman

### Graphql

1. Enter in subfolder project (grapql-student-management)
2. Run `npm install`
3. Using docker to start mongodb:docker run --name mongo -p 27017:27017 -d mongo
4. Run the service: `npm run start:dev`
5. Now you will be able to test the endpoints using queriesSandbox.txt
