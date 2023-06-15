import { useContext, useEffect, useState } from "react";
import { useNavigate, Link, Route, Routes } from "react-router-dom";
import "../../styles/Login.css";
import Navbar from "../Navbar";
import Register from "./Register";
import { AuthContext } from "./context/AuthContext";

function LoginForm() {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: undefined,
    password: undefined,
  });

  useEffect(() => {
    if (currentUser) navigate("/");
  }, [currentUser]);

  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: user.username,
          password: user.password,
          // expiresInMins: 60, // optional
        }),
      });

      if (response.status === 400) {
        window.alert("error autentificacion");
      } else {
        setCurrentUser(response);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          id="username"
          value={user.username}
          onChange={(e) => handleInputChange(e)}
          placeholder="Correo electrónico"
          className="login-input"
        />
        <input
          type="password"
          name="password"
          id="password"
          value={user.password}
          onChange={(e) => handleInputChange(e)}
          placeholder="Contraseña"
          className="login-input"
        />
        <button type="submit" className="login-button">
          Iniciar sesión
        </button>
      </form>
      <p>
        No tienes una cuenta? <Link to="/register">Regístrate aquí</Link>
      </p>
    </div>
  );
}

function LoginRoutes() {
  return (
    <>
      <Navbar />
      <div className="login-page-container">
        <div className="login-content-container">
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

const Login = () => {
  return <LoginRoutes />;
};

export default Login;
