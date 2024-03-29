import React, { useState } from "react";
import "../login/styles.css";

import img from "../../assets/preview.gif";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
    // Adicione aqui o código para enviar o email e senha para o servidor
  };

  return (
    <div className="container">
      <div className="left-pane">
        <h1 className="top">Login</h1>
        <div>
          <input
            className="input"
            placeholder="Email"
            type="email"
            id="email-input"
            value={email}
            onChange={handleEmailChange}
            autoComplete="username"
          />
        </div>
        <div className="login">
          <input
            className="input"
            placeholder="Senha"
            type="password"
            id="password-input"
            value={password}
            onChange={handlePasswordChange}
            autoComplete="current-password"
          />
        </div>

        <div>
          <button className="button">Entrar como cliente</button>
          <button className="button">Entrar como gerente</button>

          <p className="link">
            Não possui conta? <Link to="/register">Cadastre-se!</Link>
          </p>
        </div>
      </div>

      <div className="right-pane">
        <img className="image" src={img} alt="Capa" />
      </div>
    </div>
  );
}

export default Login;
