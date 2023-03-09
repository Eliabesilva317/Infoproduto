
      //  <div className='container'>
      //   <div className='h1'>
      //     <img  />

      //      </div>
      
      //   <p>Olá, muito prazer em conce-lo pessuamente aqui seja bem vindo garoto </p>
      //  </div>


import React, { useState } from 'react';
import "../Home/index.css"
import img from "../../assets/foguete.gif";

function Home() {
  const [itens, setItens] = useState([
    { id: 1, nome: 'Item 1' },
    { id: 2, nome: 'Item 2' },
    { id: 3, nome: 'Item 3' },
    { id: 4, nome: 'Item 4' },
    { id: 5, nome: 'Item 5' },
    { id: 6, nome: 'Item 6' }
  ]);

  const [filtro, setFiltro] = useState('');

  const handleFiltroChange = (event) => {
    setFiltro(event.target.value);
  };

  const itensFiltrados = itens.filter(item => item.nome.toLowerCase().includes(filtro.toLowerCase()));

  return (
    <div className='container'>
       <img className="gif" src={img} alt="Capa" />
      <div className='div'>
      <img className='perfil' src="https://github.com/Eliabesilva317.png" alt=" foto do Eliabe olhando para você de camisa preta" />
      <input type="text" className='input2' value={filtro} onChange={handleFiltroChange} placeholder="Pesquisar produto" />
     
      </div>
      



      {/* <ul>
        {itensFiltrados.map((item) => (
          <li key={item.id}>{item.nome}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default Home;
