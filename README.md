# 🍔🚀 **CampusBites** — *Your Campus Food Companion*

Welcome to **CampusBites**, a full-stack food ordering app tailor-made for campus life!
This project brings together a modern **Node.js + Express** backend and a sleek **React** frontend to simplify food browsing, ordering, and delivery within your campus.

---

## 📁 **Project Structure**

```bash
CampusBites/
├── server.js                # 🚀 Node.js backend server
├── package.json             # 📦 Backend dependencies & scripts
├── routes/                  # 🛣️ API route handlers (e.g., /menu, /orders)
├── controllers/             # 🎛️ Logic for handling backend requests
├── models/                  # 🗄️ Mongoose models (User, Item, Order)
├── config/                  # ⚙️ DB config, env setup
├── frontend/
│   ├── frontend/
│   │   ├── public/          # 🌐 index.html, favicon, manifest
│   │   ├── src/
│   │   │   ├── components/  # 🧩 NavBar, Footer, ItemCard, etc.
│   │   │   ├── pages/       # 📄 Home, Menu, Checkout, Login, Signup
│   │   │   ├── assets/
│   │   │   │   └── screenshots/ # 📸 Screenshots for docs/demo
│   │   │   ├── styles/      # 🎨 CSS & SCSS files
│   │   │   ├── utils/       # 🛠️ API utilities, formatters
│   │   │   ├── App.js       # 🏠 Main app component
│   │   │   └── index.js     # 🚦 React entry point
│   │   ├── package.json     # 📦 Frontend dependencies & scripts
└── README.md                # 📘 Project documentation
```

---

## 🚀 **Getting Started**

### 🔧 Prerequisites

* Node.js >= 14.x
* npm or yarn
* MongoDB (local or cloud)

### ▶️ Run the App

#### 1️⃣ Backend

```bash
npm install
node server.js
```

#### 2️⃣ Frontend

```bash
cd ./frontend/frontend/
npm install
npm start
```

---

## 🛠️ **Frontend Scripts**

| Command         | Description                                                             |
| --------------- | ----------------------------------------------------------------------- |
| `npm start`     | 🖥️ Starts dev server at [http://localhost:3000](http://localhost:3000) |
| `npm test`      | ✅ Runs tests in watch mode                                              |
| `npm run build` | 🏗️ Builds the app for production                                       |
| `npm run eject` | 💥 Exposes CRA config (irreversible)                                    |

---

## 🛠️ **Backend Scripts**

| Command          | Description                                     |
| ---------------- | ----------------------------------------------- |
| `node server.js` | 🚀 Starts the Node server                       |
| `npm run dev`    | 🔁 Starts backend using `nodemon` (auto-reload) |

---

## 🔐 **Environment Variables**

Create a `.env` file in the root with:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/campusbites
JWT_SECRET=your_super_secret_key
```

---

## 🧠 **Tech Stack**

* **Frontend**: React, JSX, React Router, Context API, CSS/SCSS
* **Backend**: Node.js, Express, MongoDB, Mongoose
* **Tools**: Nodemon, dotenv, concurrently
* **Deployment**: Vercel (Frontend), Render/Heroku (Backend)

---

## 📌 **Features**

* 🔐 **User Authentication** – Signup, Login, and Secure Sessions
* 🛍️ **Dynamic Menu** – Real-time food listings with filters and categories
* 🧺 **Cart & Checkout** – Add items, place orders, and view history
* 📦 **Admin Panel** – Manage menu items and orders (optional)

---

## 🎯 **Future Enhancements**

* 📱 Mobile responsiveness & PWA support
* 💳 Payment Gateway Integration (Razorpay/Stripe)
* 📍 Real-time delivery tracking
* 🌐 Multi-campus support & customization

---

## 📚 **Resources**

* [React Docs](https://reactjs.org/docs/getting-started.html)
* [Node.js Docs](https://nodejs.org/en/docs/)
* [Express Docs](https://expressjs.com/)
* [MongoDB Docs](https://docs.mongodb.com/)
* [Mongoose Docs](https://mongoosejs.com/docs/)

---

## 🙌 **Contributing**

Contributions are welcome! 🎉
Open an issue or fork and create a PR. Please ensure your changes follow best practices and are well-tested.

---

## 🧑‍💻 Maintainer

> **Ayinala Koteswara Rao**
> 🌐 Connect: [LinkedIn]([https://www.linkedin.com/](https://www.linkedin.com/in/ayinala-koteswararao-711bab271/)) | 📧 [email@example.com](mailto:ayinalakoteswararao15@gmail.com)

---

## ❤️ **Made with love, for campus**

> Because hungry minds need food, and fast.

