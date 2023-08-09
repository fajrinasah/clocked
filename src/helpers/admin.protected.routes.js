import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function AdminProtectedRoute({ children }) {
  const { roleId } = useSelector((state) => {
    return state.auth?.user;
  });

  return roleId === 1 ? children : <Navigate to="/home" replace />;
}
