import { auth } from "../firebase/firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";

export function useAuth() {
  const [user, loading, error] = useAuthState(auth);
  return [user, loading, error];
}
