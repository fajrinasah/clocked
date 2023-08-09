import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function EmployeeProtectedRoute({ children }) {
  const { roleId } = useSelector((state) => {
    return state.auth?.user;
  });

  return roleId === 2 ? children : <Navigate to="/shifts/set-shift" replace />;
}
