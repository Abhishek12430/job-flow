// src/utils/PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('logged');
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
