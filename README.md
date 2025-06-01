# Subscription Tracker API
+ A Subscription Management System API
+ The API that tracks user's subscriptions of any real subscription-based application.

## ⚙️ Tech Stack
+ Node.js
+ Express.js
+ MongoDB

## ✨ Features
💎 Advanced Rate Limiting and Bot Protection: with Arcjet that helps you secure the whole app.

💎 Database Modeling: Models and relationships using MongoDB & Mongoose.

💎 JWT Authentication: User CRUD operations and subscription management.

💎 Global Error Handling: Input validation and middleware integration.

💎 Logging Mechanisms: For better debugging and monitoring.

💎 Email Reminders: Automating smart email reminders with workflows using Upstash.

and many more, including code architecture and reusability

## 🚀 Project Setup
Run:
```
npx express-generator --no-view --git ./
npm install --save-dev nodemon
npm install dotenv
npx eslint --init
```
## ▶ Start Server
Run:
```
npm run server
```
## 💾 Database Installation
Run:
```
npm install mongodb
npm install mongoose
```

## ✅ Auth Setup
Run:
```
npm install jsonwebtoken
npm install bcryptjs
```
## 🚫 Rate Limiting Setup
Run:
```
npm install @arcjet/node
npm install @arcjet/inspect
```
## ♻ Upstash Workflow Setup
Run:
```
npm install @upstash/workflow
```
## ⏰ Date-Time Calculation Library Setup
Run:
```
npm install dayjs
```
## ▶ Start Local QStash Server
Run:
```
npx @upstash/qstash-cli dev
```
## 📧 Email Sender Installation
Run:
```
npm install nodemailer
```