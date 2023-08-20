import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import useAuth from './hooks/useAuth';

export const PrivateRoute = () => {

  const { currentUser, checkAuth } = useAuth();
  const location = useLocation();

  useEffect(() => {
    checkAuth();
  });

  return (
    currentUser !== null
      ? <Outlet />
      : <Navigate to="/login" state={{ from: location }} replace />
  )
};
