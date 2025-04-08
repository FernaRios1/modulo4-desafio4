import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setMessage("Todos los campos son obligatorios");
      return;
    }
    if (password.length < 6) {
      setMessage("La contraseña debe tener al menos 6 caracteres");
      return;
    }
    setMessage("Inicio de sesión exitoso");
  };

  return (
    <div className="form-container"> {/* Agregamos el contenedor */}
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <div className="form-group">
          <label>Contraseña</label>
          <input 
            type="password" 
            placeholder="Contraseña" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        <button className="btn btn-primary" type="submit">Ingresar</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;
