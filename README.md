# OPD Management System

A full-stack OPD (Outpatient Department) management system built using **Spring Boot, JPA, MySQL, and Angular**.  
This project demonstrates a simple healthcare workflow including patient registration, appointment booking, and consultation management.

---

## Features

- **Patient Registration**
  - Add new patients
  - View patient list

- **Appointment Booking**
  - Book appointments with doctor and date/time
  - View all appointments

- **Consultation Management**
  - Record vitals (e.g., blood pressure, temperature)
  - Add consultation notes
  - Mark consultation as completed

---

## Tech Stack

### Backend
- Java
- Spring Boot
- Spring Data JPA (Hibernate)
- MySQL

### Frontend
- Angular
- TypeScript
- HTML/CSS

---

## 🔗 API Overview

| Method | Endpoint              | Description              |
|--------|---------------------|--------------------------|
| POST   | /patients           | Add patient              |
| GET    | /patients           | Get all patients         |
| GET    | /patients/search    | Search patients          |
| POST   | /appointments       | Book appointment         |
| GET    | /appointments       | Get appointments         |
| POST   | /consultations      | Add consultation         |
| GET    | /consultations/...  | Get consultations        |

---

## ⚙️ How to Run Locally

### Backend
1. Navigate to backend folder
2. Run: mvn spring-boot:run
3. Runs on: `http://localhost:8080`

---

### Frontend
1. Navigate to frontend folder
2. Run: npm install
        ng serve
   
## Project Structure
src/
 ├── app/
 │   ├── patient/
 │   ├── appointment/
 │   ├── consultation/
 │   └── app.ts
 ├── assets/
 └── styles.css

 ## Future Improvements

- Add authentication & login system  
- Implement validation and error handling  
- Introduce service layer architecture  
- Add pagination and better UI/UX  

---

## Author
**Vishika**
