import { Navigate } from "react-router-dom";
import useAuthStore from "../../store/authStore";

function ProtectedRoute({
  children,
  allowedRoles,
}) {

  const user =
    useAuthStore(
      (state) => state.user
    );

  const token =
    useAuthStore(
      (state) => state.token
    );

  if (!token) {

    return <Navigate to="/" />;

  }

  if (
    allowedRoles &&
    !allowedRoles.includes(
      user?.role
    )
  ) {

    return <Navigate to="/" />;

  }

  return children;
}

export default ProtectedRoute;