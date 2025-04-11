// src/components/AdminProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const AdminProtected = ({ children }) => {
  const role = localStorage.getItem('role');

  if (role === 'admin') {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default AdminProtected;
