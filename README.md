# Edu Management Software Project (NodeJS Express + MySQL)

This repository contains a **Edu Management Software** project developed using NodeJS Express and MySQL. The software aims to provide a comprehensive solution for efficiently managing and organizing classroom activities.

## Key Features

1. **User Management**: The software allows administrators to create and manage user accounts for teachers, students, and other staff members. It provides features for user authentication, registration, and password management.

2. **Class Creation and Enrollment**: Teachers can create classes and specify the details such as class name, subject, schedule, and maximum capacity. Students can then enroll in these classes, and the system ensures that the class capacity is not exceeded.

3. **Attendance Tracking**: The software enables teachers to track and manage student attendance for each class. Teachers can mark students present, absent, or late, and generate attendance reports for individual students or the entire class.

4. **Grade Management**: Teachers can record and manage student grades for various assignments, tests, and exams. The software provides functionalities to calculate overall grades, generate grade reports, and analyze student performance.

5. **Resource Sharing**: Teachers can upload and share educational resources such as lecture notes, assignments, and study materials. Students can access these resources from their respective class pages for easy reference and study.

6. **Timetable Management**: The software offers a timetable management feature that enables administrators and teachers to create and manage class schedules. The timetable provides a visual representation of class timings and helps in avoiding scheduling conflicts.

## Getting Started

Clone the repo.

```bash
git clone https://github.com/ducanhtranptit/Edu-Manager.git
```

### Install the dependencies.

```bash
npm install
```

### Setup environment variables.

Create a `.env` file and set environment variables based on `.env.example` file

### Setup database.

```bash
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

### Run project.

```bash
npm start
```

## Contributing

We welcome contributions to enhance the Class Management Software project. If you have any ideas, bug fixes, or feature requests, please submit them as issues or create a pull request. We appreciate your valuable input.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the software as per the license terms.

## Acknowledgements

We would like to express our gratitude to the open-source community for their contributions and the developers of the libraries and tools used in this project.

## Contact

If you have any questions or need further assistance, please contact me at [tda.ducanh@gmail.com](mailto:tda.ducanh@gmail.com).

Thank you for your interest in the Edu Management Software project!
