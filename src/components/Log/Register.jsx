import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, user.email, user.password);
      navigate("/dashboard");
    } catch (error) {
      console.log("Error al registrar usuario:", error.message);
    }
  };

  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          id="email"
          value={user.email}
          onChange={handleInputChange}
          placeholder="Correo electrónico"
        />
        <input
          type="password"
          name="password"
          id="password"
          value={user.password}
          onChange={handleInputChange}
          placeholder="Contraseña"
        />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;
