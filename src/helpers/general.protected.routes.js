import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function GeneralProtectedRoute({ children }) {
  const { email } = useSelector((state) => {
    return state.auth?.user;
  });

  return email ? children : <Navigate to="/auth/login" replace />;
}
