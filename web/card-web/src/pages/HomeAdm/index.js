import { useState } from "react";
import { Link } from "react-router-dom";
import "../HomeAdm/styles.scss";

const HomeAdm = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div className="container">
      <div className="row"></div>
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
            <Link to="/Perfil">
              <img
                className="perfil-1"
                src="https://github.com/Eliabesilva317.png"
                alt=" foto do Eliabe olhando para você de camisa preta"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="category register-category">
          <h1>Cadastrar categoria:</h1>
          <form>
            <input type="text" placeholder="Digite o nome da categoria" />
            <br />
            <button type="submit">Cadastrar</button>
          </form>
        </div>

        <div className=" category list-category">
          <h1>Visualizar categorias:</h1>

          <h4>Clique no botão para ver todas as categorias.</h4>

          <button type="submit">Cadastrar</button>
        </div>

        <div className="category delete-category">
          <h1>Cadastrar categoria:</h1>
          <form>
            <input type="text" placeholder="Digite o nome da categoria" />
            <br />
            <button type="submit">Cadastrar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomeAdm;
