import type { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const isLoggiedIn = useSelector((state: any) => state.auth.isLoggedIn);

  if (!isLoggiedIn) {
    return <Navigate to="/auth" replace />;
  }

  return <div>{children}</div>;
};

export default ProtectedRoute;
