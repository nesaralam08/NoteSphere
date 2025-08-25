# 📝 NoteSphere

**NoteSphere** is a full-stack MERN (MongoDB, Express, React, Node.js) web application that allows students to upload, manage, and access academic notes.  
Files (PDFs, images, docs) are securely stored in **Cloudinary**, while metadata is handled by **MongoDB**.  

🔗 **GitHub Repository:** [NoteSphere](https://github.com/nesaralam08/NoteSphere.git)

---

## 🚀 Features
- 📤 Upload notes (PDF, Images, Docs) with Cloudinary  
- ✏️ Update notes (single/multiple fields or replace file)  
- 🔎 Fetch all notes or view by ID  
- 🗑️ Delete notes (removes both MongoDB record + Cloudinary file)  
- 🎨 React frontend with responsive UI  
- 🌍 RESTful API with secure `.env` configs  

---

## 🛠️ Tech Stack
- **Frontend**: React.js, Axios, Tailwind CSS (or CSS/Bootstrap)  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB with Mongoose ODM  
- **Storage**: Cloudinary (via multer-storage-cloudinary)  
- **Middleware**: Multer for file uploads  
- **Others**: dotenv, nodemon  

---

## 📂 Project Structure

```bash
NoteSphere/
│── backend/
│   ├── controller/
│   │   └── notesController.js      # CRUD logic
│   ├── model/
│   │   └── notesModel.js           # Mongoose schema
│   ├── routes/
│   │   └── notesRouter.js          # Express routes
│   ├── utils/
│   │   ├── cloudinary.js           # Cloudinary config
│   │   └── multer.js               # Multer config
│   ├── app.js / server.js          # Entry point
│   └── package.json
│
│── frontend/
│   ├── src/
│   │   ├── components/             # Reusable UI components
│   │   ├── pages/                  # Page-level components
│   │   ├── services/
│   │   │   └── api.js              # Axios API calls
│   │   └── App.js
│   ├── public/
│   └── package.json
│
│── .gitignore
│── README.md

```

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository
```bash
git clone https://github.com/nesaralam08/NoteSphere.git
cd NoteSphere
cd backend
npm install
PORT=5000
MONGO_URI=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
npm run dev   # nodemon
# or
node app.js
cd frontend
npm install
npm start
```
## 👨‍💻 Author

**Nesar Alam**  
Final Year B.Tech Student | MERN Stack Developer | Machine Learning Enthusiast | College Topper in DSA (92/100)  

- 🌐 [Portfolio](https://nesar-portfolio.vercel.app/)  
- 💻 [GitHub](https://github.com/nesaralam08)  
- 💼 [LinkedIn](https://www.linkedin.com/in/nesaralam08/)  
- 📚 [GeeksforGeeks](https://www.geeksforgeeks.org/user/nesar08/)  
- 🧑‍💻 [LeetCode](https://leetcode.com/u/itsnesar15/)  
