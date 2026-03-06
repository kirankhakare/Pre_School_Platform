import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children, allowedRoles }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-sky-50">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-pink-500"></div>
            </div>
        );
    }

    if (!user) {
        // Redirect to login form if not authenticated
        if (location.pathname.startsWith('/admin')) {
            return <Navigate to="/admin/login" replace />;
        }
        return <Navigate to="/register" replace />; // Default login page is Register toggled to Login
    }

    // Check if user has the required role
    if (allowedRoles && !allowedRoles.includes(user.role)) {
        // If they shouldn't be here, redirect them to their respective dashboard
        if (user.role === 'admin') return <Navigate to="/admin/dashboard" replace />;
        if (user.role === 'teacher') return <Navigate to="/teacher/dashboard" replace />;
        return <Navigate to="/parent/dashboard" replace />;
    }

    return children;
};

export default ProtectedRoute;
