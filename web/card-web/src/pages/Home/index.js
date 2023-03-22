import React, { useState } from "react";
import "../Home/styles.css";
import img from "../../assets/foguete.gif";
import Modal from "react-modal";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";

function Home() {

  const [searchTerm, setSearchTerm] = useState("");
  const [count, setCount] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  Modal.setAppElement("#root");

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

  const handleFiltroChange = (event) => {
    setFiltro(event.target.value);
  };

  const itensFiltrados = itens.filter((item) =>
    item.nome.toLowerCase().includes(filtro.toLowerCase())
  );

  const openModal = () => {  setModalIsOpen(true); };
  const closeModal = () => { setModalIsOpen(false); }; 
  const handleCount = () => { setCount((count) => count + 1); }

  return (
    <div className="App">
    <div className="ROW">
        <div className="space">
          <div className="logo">
          <input
            className="input-1"
            type="search"
            id="searchInput"
            placeholder="Digite o que você procura..."
            value={searchTerm}
            onChange={handleSearch}
          />
          </div>

          <div className="logo-pesquisa">
          <img
            className="perfil-1"
            src="https://github.com/Eliabesilva317.png"
            alt=" foto do Eliabe olhando para você de camisa preta"
          />
          </div>
        </div>

        <div className="space-1">
          <title className="space-title"></title>
          <title className="space-title"></title>
          <title className="space-title"></title>
          <title className="space-title"></title>
         
        </div>


    </div>

        <div className="men">

      <div className="dolwn">
          <div className="red">
            <div className="separe">
            <img className="image-1" src={img} alt="Capa" />
            </div>
    <div className="pequno">
            <div className="separe-2">
              <p>Pizza de caju deve te um sabor bom rsrs</p>
            </div>
            <div className="separe-3">
            <button className="button-2" onClick={openModal}></button>
            </div>
            
            </div>
          </div>

          <div className="red">
            <div className="separe">
            <img className="image-1" src={img} alt="Capa" />
            </div>
    <div className="pequno">
            <div className="separe-2">
              <p>Pizza de caju deve te um sabor bom rsrs</p>
            </div>
            <div className="separe-3">
            <button className="button-2" onClick={openModal}></button>
            </div>
            
            </div>
          </div>

          <div className="red">
            <div className="separe">
            <img className="image-1" src={img} alt="Capa" />
            </div>
    <div className="pequno">
            <div className="separe-2">
              <p>Pizza de caju deve te um sabor bom rsrs</p>
            </div>
            <div className="separe-3">
            <button className="button-2" onClick={openModal}></button>
            </div>
            
            </div>
          </div>
         
      </div>

      <div className="dolwn">
          <div className="red">
            <div className="separe">
            <img className="image-1" src={img} alt="Capa" />
            </div>
    <div className="pequno">
            <div className="separe-2">
              <p>Pizza de caju deve te um sabor bom rsrs</p>
            </div>
            <div className="separe-3">
            <button className="button-2" onClick={openModal}></button>
            </div>
            
            </div>
          </div>

          <div className="red">
            <div className="separe">
            <img className="image-1" src={img} alt="Capa" />
            </div>
    <div className="pequno">
            <div className="separe-2">
              <p>Pizza de caju deve te um sabor bom rsrs</p>
            </div>
            <div className="separe-3">
            <button className="button-2" onClick={openModal}></button>
            </div>
            
            </div>
          </div>

          <div className="red">
            <div className="separe">
            <img className="image-1" src={img} alt="Capa" />
            </div>
    <div className="pequno">
            <div className="separe-2">
              <p>Pizza de caju deve te um sabor bom rsrs</p>
            </div>
            <div className="separe-3">
            <button className="button-2" onClick={openModal}></button>
            </div>
            
            </div>
          </div>
         

      </div>

      <div className="dolwn">
          <div className="red">
            <div className="separe">
            <img className="image-1" src={img} alt="Capa" />
            </div>
    <div className="pequno">
            <div className="separe-2">
              <p>Pizza de caju deve te um sabor bom rsrs</p>
            </div>
            <div className="separe-3">
            <button className="button-2" onClick={openModal}></button>
            </div>
            
            </div>
          </div>

          <div className="red">
            <div className="separe">
            <img className="image-1" src={img} alt="Capa" />
            </div>
    <div className="pequno">
            <div className="separe-2">
              <p>Pizza de caju deve te um sabor bom rsrs</p>
            </div>
            <div className="separe-3">
            <button className="button-2" onClick={openModal}></button>
            </div>
            
            </div>
          </div>

          <div className="red">
            <div className="separe">
            <img className="image-1" src={img} alt="Capa" />
            </div>
    <div className="pequno">
            <div className="separe-2">
              <p>Pizza de caju deve te um sabor bom rsrs</p>
            </div>
            <div className="separe-3">
            <button className="button-2" onClick={openModal}></button>
            </div>
            
            </div>
          </div>
         

      </div>
      
    
</div>
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

            <div className="modal-left">
              <p>Nome: Batata Frita</p>

              <p>Preço: 20</p>

              <p>Descrição: Essa batata frita...</p>

              <div className="count-container">
                <p>
                  Quantidade:
                  <input
                    type="text"
                    value={count}
                    onChange={(e) => setCount(e.target.value)}
                  />
                </p>
                <IoMdAdd
                  onClick={handleCount}
                  className="icon-add"
                  color="#FFF"
                  size={30}
                />
              </div>
            </div>

            <div className="modal-right">
              <h2>Total: R$ 40,00</h2>
              <button>Finalizar pedido</button>
            </div>
          </Modal>



    </div>
  );
}

export default Home;