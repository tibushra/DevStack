# React + TypeScript + Vite

# Dev Stack Builder

## Project Description

**Dev Stack Builder** is a React application that lets users browse development technologies and create a personalized technology stack by adding or removing technologies.

## Technologies Used

* React
* TypeScript
* Vite
* Tailwind CSS
* React Toastify
* JSON

## Features

* Browse development technologies
* Build a personalized technology stack
* Add and remove technologies dynamically

---

# Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a JavaScript syntax that allows us to write HTML-like code inside JavaScript. It makes React UI code easier to write and understand.

### 2. What is the difference between props and state?

**Props** are used to pass data from parent to child and are read-only. **State** is managed inside a component and can change over time.

### 3. What does the `useState` hook do, and where did you use it?

`useState` is used to manage component state. In this project, it is used to store the user's selected technologies.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` handles side effects such as data fetching. It can be used to fetch and load the technology data from the JSON file when the component loads.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each list item and efficiently update the UI when items change.

### 6. What is conditional rendering?

Conditional rendering means showing different UI elements based on a condition. For example, showing an empty message when no technology is selected.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child using **props**. A child can send data back using a **callback function passed through props**.
