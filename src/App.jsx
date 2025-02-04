import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Counter from "./components/Counter";
import UserForm from "./components/UserForm";
import Dashboard from "./components/Dashboard";
import RichTextEditor from "./components/RichTextEditor";
import Home from "./pages/Home";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./context/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/counter"
            element={
              <PrivateRoute>
                <Counter />
              </PrivateRoute>
            }
          />
          <Route path="/form" element={<UserForm />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/editor"
            element={
              <PrivateRoute>
                <RichTextEditor />
              </PrivateRoute>
            }
          />
          {/* <Route path="/auth" element={<Auth />} /> */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
