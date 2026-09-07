# HoverHub

> A modern React-based UI component library featuring interactive, animated, and reusable components.

HoverHub is a frontend component showcase and library designed to help developers discover, preview, understand, and reuse interactive UI components in their React applications.

The project focuses heavily on reusable components, animations, clean architecture, and developer experience.

---

## 🌐 Live Demo

**Live Website:**  
https://hover-hub-nine.vercel.app/

**GitHub Repository:**  
https://github.com/justMridul/HoverHub

---

## 📌 Overview

HoverHub provides a collection of reusable UI components such as:

- Animated Buttons
- Interactive Cards
- Animated Icons
- Hover Effects
- Micro-interactions
- Other reusable UI elements

The main goal is to make it easier for developers to find interesting UI components without having to implement every animation or interaction from scratch.

A developer can:

1. Browse the available components
2. Search for a specific component
3. Preview the component
4. View its source code
5. Copy the source code
6. Download the component as a `.jsx` file
7. Integrate it into their own React project

---

## ✨ Features

### 1. Reusable UI Components

HoverHub contains 50+ reusable UI components organized into different categories.

Examples include:
- Buttons
- Cards
- Icons
- Interactive elements

Each component is designed independently so that it can be reused across different parts of the application.

---

### 2. Component Search

Users can search through the component library using the search bar. The search functionality dynamically filters the available components based on the user's input.

---

### 3. Live Component Preview

Users can select a component and open a Preview Modal. The modal allows users to see the component in action before using it, while also providing access to its source code.

---

### 4. Copy to Clipboard & File Download

- **Copy:** Users can instantly copy component source code using the native browser Clipboard API (`navigator.clipboard.writeText`).
- **Download:** Users can download standalone `.jsx` component files directly on the client side using the Blob API without requiring backend processing.

- ## 🛠️ Tech Stack

* **Frontend:** React.js, Vite, React Router DOM, Framer Motion, CSS / Tailwind CSS, Lucide React
* **Deployment & Tooling:** Git, GitHub, Vercel

---

## 🏗️ Architecture & Data Flow

HoverHub utilizes a centralized data layer (`componentsData.js`) to decouple UI presentation from layout logic.

## 🚀 Local Development Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/justMridul/HoverHub.git](https://github.com/justMridul/HoverHub.git)
