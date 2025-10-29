import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children, adminOnly = false }) => {
  const { currentUser, loading } = useAuth();

  // Wait until authentication state is determined
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-rose-600"></div>
      </div>
    );
  }

  // Redirect if not authenticated
  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  // Check admin status if route requires admin
  if (adminOnly && !currentUser.isAdmin) {
    return <Navigate to="/" />;
  }

  // Render children if authenticated (and admin if required)
  return children;
};

export default ProtectedRoute;