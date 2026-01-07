<div align="center">

![UIZ Hospital Backend](https://img.shields.io/badge/UIZ_Hospital-Backend_API-2e7d32?style=for-the-badge&logo=serverless&logoColor=white)

# UIZ Hospital - API Gateway & Backend 🏥 

### Distributed Systems Module Project

**Professor:** Pr. EL HABOUZ Youssef  
**Major:** IISE (Ingénierie Informatique et Systèmes Embarqués)

<p>
  <img src="https://img.shields.io/badge/Runtime-Node.js-339933?logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Framework-Express.js-000000?logo=express&logoColor=white" alt="Express" />
  <img src="https://img.shields.io/badge/Database-MongoDB-47A248?logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Auth-JWT-000000?logo=json-web-tokens&logoColor=white" alt="JWT" />
  <img src="https://img.shields.io/badge/Architecture-REST_&_RPC-orange" alt="Architecture" />
</p>

</div>

---

## 📖 About The Backend

This repository houses the **Server-Side Application** and **API Gateway** for the UIZ Hospital system. It acts as the central orchestrator of the distributed architecture, managing data persistence, user authentication, and communication between the Client (React) and the Computation Service (Python RPC).

Designed for the **Distributed Systems** module, this backend demonstrates how to build a scalable, hybrid architecture that routes standard requests to a document database while offloading specialized tasks to a remote procedure call service.

### ⚙️ Core Responsibilities

* **API Gateway:** Central entry point routing HTTP requests to appropriate micro-services and controllers.
* **RPC Bridge:** Acts as a middleware to forward complex assurance calculations to the external **Python/FastAPI** service.
* **Data Management:** Manages patient, doctor, and appointment records using **MongoDB**.
* **Security:** Implements **JWT (JSON Web Token)** authentication and **Bcrypt** hashing to secure patient and doctor portals.

---

## 🛠️ Tech Stack

The backend is built on a robust **Node.js** environment using the following key libraries:

* **Core:** `Express.js` (Web Framework), `Node.js` (Runtime).
* **Database:** `Mongoose` (ODM for MongoDB).
* **Authentication:** `jsonwebtoken` (Auth), `bcrypt` (Password Hashing).
* **Communication:** `Axios` (Handling HTTP requests to the RPC Python Service), `Cors` (Cross-Origin Resource Sharing).
* **Utilities:** `Dotenv` (Environment configuration).

---

## 🔌 API Architecture & Endpoints

The system exposes RESTful endpoints grouped by functionality. It also proxies requests to the distributed Python service.

| Service | Route Prefix | Description |
| :--- | :--- | :--- |
| **Users** | `/api/user` | Patient registration, login, and profile management. |
| **Doctors** | `/api/doctor` | Doctor dashboard access, schedule management, and availability. |
| **Appointments** | `/api/appointment` | Booking logic, fetching history, and status updates. |
| **Notifications** | `/api/notification` | Managing alerts and updates for users. |
| **RPC Bridge** | `/api/rpc` | **Distributed Logic:** Forwards assurance requests to the Python Microservice. |

---

## 👥 The Team

This distributed system was engineered by the **IISE** team:

* **Hamza Labbaalli**
* **Abdoulouahed Id-boubrik**
* **Yassine Maarouf**
* **Nada Bermil**
* **Soumaya Iddaha**

---

## 🚀 Getting Started

Follow these steps to set up the backend server locally.

### 1. Prerequisites
* Node.js (v14 or higher)
* MongoDB (Local or Atlas URI)

### 2. Installation
Clone the repository and install the dependencies:

```bash
git clone [https://github.com/hlnajz/DDS-Project-Hospital-Appointment-System-MERN.git](https://github.com/hlnajz/DDS-Project-Hospital-Appointment-System-MERN.git)
cd 
npm install 
```

### 3. Configuration
Create a .env file in the root directory and add your environment variables:

```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```


### 4. Run the Server
Start the application in development mode:

```bash
npm start
```
The server will typically run on http://localhost:5000.

<div align="center"> <p>© 2025 UIZ Hospital Team. Distributed Systems Project.


<i>Powered by Node.js & Distributed Intelligence</i></p> </div>
