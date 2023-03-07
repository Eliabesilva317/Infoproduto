import React, { useState } from 'react';
import './App.css';


function App() {

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
      <h1 className='top'>Login</h1>
    <div>  
      <input className='input'
          type="email"
          id="email-input"
          value={email}
          onChange={handleEmailChange}
          autoComplete="username"
        /> 
        </div>
        <div className='login'>
          <input className='input'
          type="password"
          id="password-input"
          value={password}
          onChange={handlePasswordChange}
          autoComplete="current-password"
        />
        </div>
      </div>


      <div className="right-pane"> 
   
      </div>
    </div>
  );
}

export default App;
