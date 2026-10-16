# Practical 12: CI/CD Pipeline with GitHub Actions

[![CI Pipeline](https://github.com/Dhyey-Ghoniya/Practical_12/actions/workflows/ci.yml/badge.svg)](https://github.com/Dhyey-Ghoniya/Practical_12/actions/workflows/ci.yml)

**Student Name:** Ghoniya Dhyey  
**Student ID:** 24CS024  
**Subject:** ITUE301 - AWDF (Advanced Web Development Frameworks)  
**Academic Year:** 2025-26  
**Institution:** Charotar University of Science and Technology (CHARUSAT), CSPIT  

---

## 🎯 Aim
To automate testing and integration of the application using a continuous integration (CI) pipeline with GitHub Actions, validating automated test runs on push and pull request triggers with diagnostics for failing and passing builds.

## 🛠️ CI Pipeline Architecture
```
git push origin main
        │
        ▼
GitHub Actions Trigger (push / PR)
        │
        ▼
Job: build-and-test (Node matrix: 18.x, 20.x)
├── 📥 actions/checkout@v4
├── ⚙️ actions/setup-node@v4
├── 📦 npm ci (Dependency installation)
├── 🧪 npm test (Node.js Test Runner: tests/task.test.js)
└── 📢 Report status
        │
        ▼
Status: ✔ Passed (Green Checkmark) or ✖ Failed (Red X)
```

## 📂 Project Structure
```
Practical_12/
├── .github/
│   └── workflows/
│       └── ci.yml          # GitHub Actions workflow specification
├── src/
│   ├── controllers/
│   │   └── taskController.js
│   ├── routes/
│   │   └── taskRoutes.js
│   └── app.js
├── tests/
│   └── task.test.js        # Automated API test suite
├── server.js
├── package.json
└── README.md
```

## 🚀 Running Tests Locally
```bash
npm install
npm test
```
