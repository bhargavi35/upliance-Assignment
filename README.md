# React Web Application with Vite

This is a React-based web application built with Vite, featuring a counter, user data form, and a rich text editor. The application uses Material UI for styling, React Spring for animations, and React Router for routing. It also includes a mock authentication feature, Google Sign-In, and a dashboard for visualizing user data trends.

## Features

### 1. **Counter Component**
- Buttons for increment, decrement, and reset.
- Maintains count across re-renders.
- Background color changes linearly (using a Bezier curve) based on the counter value.
- Reset button resets both the counter and background color.

### 2. **User Data Form**
- Form for collecting user data: Name, Address, Email, and Phone.
- Autogenerates a user ID and saves data to LocalStorage.
- Unsaved changes prompt when attempting to close the form with unsaved data.

### 3. **Rich Text Editor**
- Visualizes user data in a rich text editor.
- Includes basic text formatting options (bold, italic, underline, lists).
- Ensures data persistence in the editor.

### 4. **Additional Features (Optional)**
- **User Authentication**: Google Sign-In, with safe private and public routes.
- **Dashboard Visualization**: Dashboard displaying user profile trends using React Charts.

## Technologies Used
- **React** (Functional Components, Hooks)
- **Vite** (Build tool)
- **Material UI** (UI components)
- **React Router** (Routing)
- **React Spring** (Animations)
- **React Charts** (Data visualization)
- **React Quill** (Rich text editor)
- **Mock Authentication** (Google Sign-In for validation)

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repository.git
   ```

2. Install dependencies:
   ```bash
   cd your-repository
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open the app in your browser at `http://localhost:5173`.

## Deliverables
- Source code repository with commits.
- A report explaining component structure and state management choices.

## Vercel-Deployment Link
-  https://upliance-assignment-theta.vercel.app/form