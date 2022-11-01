import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.js';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        signOut(auth);
        navigate('/login');
      }}
    >
      Logout
    </button>
  );
}
