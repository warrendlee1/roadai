import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export default function ProtectedRoute({ children }) {
  const [user] = useAuth();

  return !user ? <Navigate to="/login" /> : children;
}
