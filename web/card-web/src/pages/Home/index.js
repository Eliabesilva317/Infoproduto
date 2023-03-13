import React, { useState } from "react";
import "../Home/index.css";
import img from "../../assets/foguete.gif";

import Modal from "react-modal";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

function Home() {
  Modal.setAppElement("#root");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const [itens, setItens] = useState([
    { id: 1, nome: "Item 1" },
    { id: 2, nome: "Item 2" },
    { id: 3, nome: "Item 3" },
    { id: 4, nome: "Item 4" },
    { id: 5, nome: "Item 5" },
    { id: 6, nome: "Item 6" },
  ]);

  const [filtro, setFiltro] = useState("");

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleFiltroChange = (event) => {
    setFiltro(event.target.value);
  };

  const itensFiltrados = itens.filter((item) =>
    item.nome.toLowerCase().includes(filtro.toLowerCase())
  );

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="container-principal">
      {/* Space TOP */}
      <div className="block-0">
        <div className="block-1">
          <img className="image-1" src={img} alt="Capa" />
        </div>

        <div className="block-2">
          <input
            className="input-1"
            type="search"
            id="searchInput"
            placeholder="Digite o que você procura..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <img
            className="perfil-1"
            src="https://github.com/Eliabesilva317.png"
            alt=" foto do Eliabe olhando para você de camisa preta"
          />
        </div>
      </div>

      {/* Space down */}

      <div className="space-1">
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          overlayClassName={"modal-overlay"}
          className="modal-content"
        >
          <AiOutlineCloseCircle
            onClick={closeModal}
            color="#FFF"
            size={60}
            className="icon-close"
          />
          <h2>Faça seu pedido</h2>
          <hr />
          <p>Nome: Batata Frita</p>

          <p>Preço: 20</p>

          <p>Descrição: Essa batata frita...</p>

          <p>
            Quantidade: <input type="number" />
          </p>
        </Modal>
        <div className="space-block">
          <button onClick={openModal}>Fazer pedido</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
