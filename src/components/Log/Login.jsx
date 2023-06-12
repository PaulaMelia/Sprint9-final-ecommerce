import { Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signInWithEmailAndPassword, fetchSignInMethodsForEmail } from "firebase/auth";
import { auth } from "../../Firebase";
import Register from "./Register";
import Navbar from "../Navbar";
import "../../styles/Login.css";


function LoginForm() {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const signInMethods = await fetchSignInMethodsForEmail(auth, user.email);

      if (signInMethods.includes("password")) {
        await signInWithEmailAndPassword(auth, user.email, user.password);
        navigate("/dashboard");
      } else {
        console.log("El usuario no está registrado");
        // Manejar el caso en el que el usuario no está registrado
      }
    } catch (error) {
      console.log("Error al iniciar sesión:", error.message);
    }
  };

  return (
    <div className="login-form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          id="email"
          value={user.email}
          onChange={handleInputChange}
          placeholder="Correo electrónico"
          className="login-input"
        />
        <input
          type="password"
          name="password"
          id="password"
          value={user.password}
          onChange={handleInputChange}
          placeholder="Contraseña"
          className="login-input"
        />
       <button type="submit" className="login-button">Iniciar sesión</button>
      </form>
    </div>
  );
}

function LoginRoutes() {
  return (
    <div className="login-page-container">
      <Navbar />
      <div className="login-content-container">
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </div>
  );
}

const Login = () => {
  return <LoginRoutes />;
};

export default Login;
