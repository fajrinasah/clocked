/*-------------------------------------------------*/
// IMPORT FROM DEPENDENCIES
/*-------------------------------------------------*/
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

/*-------------------------------------------------*/
// IMPORT FROM PROJECT'S FILES
/*-------------------------------------------------*/
import { logout, keepLogin } from "./store/slices/auth/thunks";
import GeneralProtectedRoute from "./helpers/general.protected.routes";
import AdminProtectedRoute from "./helpers/admin.protected.routes";
import EmployeeProtectedRoute from "./helpers/employee.protected.routes";

import Header from "./components/03-organisms/Header";

import PageAccountActivation from "./components/05-pages/PageAccountActivation";
import PageAddEmployee from "./components/05-pages/PageAddEmployee";
import PageAddShift from "./components/05-pages/PageAddShift";
import PageHome from "./components/05-pages/PageHome";
import PageLogin from "./components/05-pages/PageLogin";
import PageLogs from "./components/05-pages/PageLogs";
import PageNotFound from "./components/05-pages/PageNotFound";
import PageReports from "./components/05-pages/PageReports";
import PageSetSalary from "./components/05-pages/PageSetSalary";
import PageSetShift from "./components/05-pages/PageSetShift";
import PageTokenVerification from "./components/05-pages/PageTokenVerification";

import "./App.css";

function App() {
  const dispatch = useDispatch();

  const { fullName, roleId } = useSelector((state) => {
    return state.auth?.user;
  });

  useEffect(() => {
    dispatch(keepLogin());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logout());
    return <Navigate to="/auth/login" replace />;
  };

  return (
    <div className="App">
      {fullName && (
        <Header
          fullName={fullName}
          roleId={roleId}
          handleLogout={handleLogout}
        />
      )}
      <Routes>
        <Route path="/auth/login" element={<PageLogin />} />
        <Route
          path="/auth/verify/:uuidWithContext"
          element={<PageTokenVerification />}
        />
        <Route
          path="/auth/activate-account/:uuidWithContext"
          element={<PageAccountActivation />}
        />

        <Route
          path="/employees/add-employee"
          element={
            <GeneralProtectedRoute>
              <AdminProtectedRoute>
                <PageAddEmployee />
              </AdminProtectedRoute>
            </GeneralProtectedRoute>
          }
        />
        <Route
          path="/shifts/add-shift"
          element={
            <GeneralProtectedRoute>
              <AdminProtectedRoute>
                <PageAddShift />
              </AdminProtectedRoute>
            </GeneralProtectedRoute>
          }
        />
        <Route
          path="/shifts/set-shift"
          element={
            <GeneralProtectedRoute>
              <AdminProtectedRoute>
                <PageSetShift />
              </AdminProtectedRoute>
            </GeneralProtectedRoute>
          }
        />
        <Route
          path="/salaries/set-salary"
          element={
            <GeneralProtectedRoute>
              <AdminProtectedRoute>
                <PageSetSalary />
              </AdminProtectedRoute>
            </GeneralProtectedRoute>
          }
        />

        <Route
          path="/home"
          element={
            <GeneralProtectedRoute>
              <EmployeeProtectedRoute>
                <PageHome />
              </EmployeeProtectedRoute>
            </GeneralProtectedRoute>
          }
        />
        <Route
          path="/logs"
          element={
            <GeneralProtectedRoute>
              <EmployeeProtectedRoute>
                <PageLogs />
              </EmployeeProtectedRoute>
            </GeneralProtectedRoute>
          }
        />
        <Route
          path="/salaries/reports"
          element={
            <GeneralProtectedRoute>
              <EmployeeProtectedRoute>
                <PageReports />
              </EmployeeProtectedRoute>
            </GeneralProtectedRoute>
          }
        />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <main></main>
      <Toaster />
    </div>
  );
}

export default App;
