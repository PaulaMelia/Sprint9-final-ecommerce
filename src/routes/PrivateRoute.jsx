/*import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../components/Log/context/AuthContext";

function PrivateRoute({ element: Element, ...rest }) {
  const { currentUser } = useAuth();

  return (
    <Route
      {...rest}
      element={currentUser ? <Element /> : <Navigate to="/login" />}
    />
  );
}

export default PrivateRoute;*/
