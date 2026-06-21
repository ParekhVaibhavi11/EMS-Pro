import {
  Navigate
}
from "react-router-dom";

import useAuthStore
from "../store/authStore";

function ProtectedRoute({

  children,

  allowedRoles

}) {

  const user =
    useAuthStore(
      (state) => state.user
    );

  if (!user) {

    return (
      <Navigate
        to="/"
        replace
      />
    );

  }

  if (

    !allowedRoles.includes(
      user.role
    )

  ) {

    return (
      <Navigate
        to="/"
        replace
      />
    );

  }

  return children;

}

export default ProtectedRoute;