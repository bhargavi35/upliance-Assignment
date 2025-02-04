import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  // Get the user data from localStorage when the component mounts
  const [user, setUser] = useState(() => {
    // Check if there's user data in localStorage and parse it, or return null
    const savedUser = localStorage.getItem('userData');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('userData', JSON.stringify(userData)); // Store user data in localStorage
  };

  const logout = () => {
    setUser(null); // Set user state to null
    // Don't remove user data from localStorage here, only clear state
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
