import { useAuth } from "../../utils/authContext/authContext";
import { Outlet, Navigate, useLocation } from "react-router-dom";
const RequireAuth = () => {
  const auth = useAuth();
  const location = useLocation();
  if (!auth?.testValue) {
    return (
      <Navigate to="/" state={{ from: location?.pathname }} replace={true} />
    );
  }

  return <Outlet />;
};

export default RequireAuth;
