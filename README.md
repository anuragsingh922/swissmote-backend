# 🚀 Event Rocket - Backend  

## 📌 Project Overview  

The **Event Rocket Backend** is responsible for handling event management and real-time attendance tracking. It provides RESTful APIs for users and admins and integrates **Socket.IO** for real-time attendance updates.  

---


## 🚀 Getting Started  

### 🔧 Installation  

1. Clone the repository  
   ```sh
   git clone https://github.com/anuragsingh922/swissmote-backend.git
   cd swissmote-backend
   ```  

2. Install dependencies  
   ```sh
   npm install  
   ```  

3. Start the server  
   ```sh
   npm start
   ```  

---

## ✨ Features  

### 🎭 User  
- Fetch all events  
- Mark attendance in real-time  

### 🔧 Admin  
- Create new events  
- Update existing events  
- Delete events  

---

## 📡 API Endpoints  

### 👥 User  
- **GET** `/events` → Fetch all events  

### 🛠️ Admin  
- **POST** `/events` → Create a new event  
- **PATCH** `/events/:id` → Update an event  
- **DELETE** `/events/:id` → Delete an event  

### 🔄 Real-Time Attendance (Socket.IO)  
- **Socket Event**: `"attendance"` → Users can mark their attendance dynamically  

---

## 🛠️ Tech Stack  

- **Runtime**: Node.js  
- **Framework**: Express.js  
- **Database**: MongoDB (Mongoose)
- **Real-Time**: Socket.IO  
- **Authentication**: JWT

---

## 🛠️ Project Structure  

```
/swissmote-backend
│── /models           # Database models  
│── /routes           # API routes  
│── /controllers      # Business logic  
│── /config           # Database & environment setup  
│── app.js            # Entry point  
│── package.json      # Dependencies  
│── .env              # Environment variables  
```  

---

## 👨‍💻 Developer  

- **Name**: Anurag  
- **Phone**: +91 9896424841  
- **Email**: [anuragjadu922@gmail.com](mailto:anuragjadu922@gmail.com)  
- **Institution**: IIIT Sonepat  
