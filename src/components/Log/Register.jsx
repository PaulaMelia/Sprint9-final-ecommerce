import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import Navbar from "../Navbar";
import "../../styles/Register.css";

function RegisterForm() {
  const { setCurrentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Send a request to your registration API endpoint
      const response = await fetch("https://dummyjson.com/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: user.username,
          password: user.password,
        }),
      });

      if (response.status === 400) {
        window.alert("Error de registro");
      } else {
        setCurrentUser(response);
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="register-form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            id="username"
            value={user.username}
            onChange={handleInputChange}
            placeholder="Correo electrónico"
            className="register-input"
          />
          <input
            type="password"
            name="password"
            id="password"
            value={user.password}
            onChange={handleInputChange}
            placeholder="Contraseña"
            className="register-input"
          />
          <button type="submit" className="register-button">
            Registrarse
          </button>
        </form>
      </div>
    </>
  );
}

function Register() {
  return (
    <div>
      <h2>Registrarse</h2>
      <RegisterForm />
    </div>
  );
}

export default Register;
