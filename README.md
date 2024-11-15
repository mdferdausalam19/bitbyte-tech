# 💻 BitByteTech

**BitByteTech** is a personalized platform for tech enthusiasts to read, bookmark, and explore technology-related blogs.

## 🌐 Live Website

[Visit BitByteTech](https://bitbyte-tech.vercel.app/)

## 📂 Repository

[GitHub Repository](https://github.com/mdferdausalam19/bitbyte-tech)

## 🔍 Project Overview

**BitByteTech** is a fully responsive web application built with:

- **Vite**
- **React**
- **React Router DOM**
- **Tailwind CSS**
- **DaisyUI**

Additional packages include **react-toastify**, **react-icons**, **react-markdown**, and more. Blog posts are dynamically fetched from the **Dev.to API**.

## ✨ Key Features

- **Responsive Navbar**

  - Navigation routes for Home, Blogs, and Bookmarks.
  - Theme toggler for switching between dark and light modes.

- **Hero Banner**

  - Showcases a title, description, and buttons for navigation.
  - **Read Blogs**: Links to the Blogs page.
  - **Bookmarks**: Links to the Bookmarks page.

- **Blog Page**

  - Displays a list of blog cards with images, titles, publish dates, and excerpts fetched from the **Dev.to API**.
  - Clicking a card navigates to a detailed blog page with full content, author details, and a bookmark button.
  - Bookmarking functionality includes toast notifications and prevents duplicate entries.

- **Bookmarks Page**
  - Lists bookmarked blogs with links to detailed views.
  - Includes a delete button for removing bookmarks, with updates to local storage and toast notifications.

## 🛠️ Technologies Used

- **Frameworks & Libraries**:

  - **React**
  - **React Router DOM**
  - **Tailwind CSS**
  - **DaisyUI**

- **Packages**:
  - `react-hot-toast`
  - `react-icons`
  - `react-markdown`
  - `react-spinners`
  - `rehype-raw`

## 🗂️ Project Structure

```plaintext
public
|-- logo.png

src
|-- assets
|   |-- 440.jpg
|   |-- wave.svg
|
|-- components
|   |-- Author.jsx
|   |-- BlogCard.jsx
|   |-- Content.jsx
|   |-- EmptyState.jsx
|   |-- Footer.jsx
|   |-- Hero.jsx
|   |-- Loader.jsx
|   |-- Navbar.jsx
|
|-- layouts
|   |-- MainLayout.jsx
|
|-- pages
|   |-- Blog.jsx
|   |-- Blogs.jsx
|   |-- Bookmarks.jsx
|   |-- Home.jsx
|
|-- routes
|   |-- Routes.jsx
|
|-- utils
|   |-- localStorage.js
|
|-- index.css
|-- main.jsx

gitignore
eslint.config.js
index.html
package-lock.json
package.json
postcss.config.js
README.md
tailwind.config.js
vercel.json
vite.config.js
```

## 🚀 Getting Started

To run the project locally, follow these steps:

### Prerequisites

Ensure that you have **Node.js** and **npm** installed on your system.

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/mdferdausalam19/bitbyte-tech.git
   ```

2. **Navigate to the Project Directory**:

   ```bash
   cd bitbyte-tech
   ```

3. **Install Dependencies**:

   ```bash
   npm install
   ```

4. **Run the Development Server**:

   ```bash
   npm run dev
   ```

5. **Access the Application**:
   Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

## 📚 Resources

- **Frameworks & Libraries**:

  - [React](https://react.dev/)
  - [React Router](https://reactrouter.com/)
  - [Tailwind CSS](https://tailwindcss.com/)
  - [DaisyUI](https://daisyui.com/)

- **Packages**:
  - [react-hot-toast](https://react-hot-toast.com/)
  - [react-icons](https://react-icons.github.io/react-icons/)
  - [react-markdown](https://github.com/remarkjs/react-markdown)
  - [react-spinners](https://www.npmjs.com/package/react-spinners)
  - [rehype-raw](https://github.com/rehypejs/rehype-raw)
