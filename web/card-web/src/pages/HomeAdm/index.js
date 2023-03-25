import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const HomeAdm = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCategory, setVisibleCategory] = useState(false);
  const [visibleProduct, setVisibleProduct] = useState(false);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const visibleCategoryController = () => {
    setVisibleCategory(!visibleCategory);
    setVisibleProduct(false);
  };

  const visibleProductController = () => {
    setVisibleProduct(!visibleProduct);
    setVisibleCategory(false);
  };

  return (
    <div className={styles.container}>
      <div className="row"></div>
      <div className={styles.ROW}>
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

      <div className={styles.content}>
        <h1>Bem vindo!</h1>
        <h2>Quais itens você deseja modificar?</h2>

        <button
          type="button"
          className={styles.buttonCategory}
          onClick={visibleCategoryController}
        >
          Categorias
        </button>

        <button
          type="button"
          className={styles.buttonProduct}
          onClick={visibleProductController}
        >
          Produtos
        </button>

        {/* Area de categorias */}

        {visibleCategory && (
          <div className={styles.contentCategories}>
            <div className={`${styles.category} ${styles.registerCategory}`}>
              <h1>Cadastrar categoria:</h1>
              <form>
                <input type="text" placeholder="Digite o nome da categoria" />
                <br />
                <button type="submit" className={styles.buttonProduct}>
                  Cadastrar
                </button>
              </form>
            </div>

            <div className={`${styles.category} ${styles.listCategory}`}>
              <h1>Visualizar categorias:</h1>

              <h4>Clique no botão para ver todas as categorias.</h4>

              <button type="submit" className={styles.buttonProduct}>
                Visualizar
              </button>
            </div>

            <div className={`${styles.category} ${styles.deleteCategory}`}>
              <h1>Deletar categoria:</h1>
              <form>
                <select>
                  <option value="">Selecione uma categoria</option>
                  <option value="1">Pizzas</option>
                  <option value="2">Bebidas</option>
                  <option value="3">Comidas</option>
                  <option value="4">Sobremesas</option>
                </select>
                <br />
                <button type="submit" className={styles.buttonProduct}>
                  Deletar
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Area de produtos */}

        {visibleProduct && (
          <div className={styles.contentCategories}>
            <div className={`${styles.product} ${styles.registerCategory}`}>
              <h1>Cadastrar produto:</h1>
              <form>
                <input type="text" placeholder="Digite o nome do produto" />
                <br />
                <button type="submit" className={styles.buttonCategory}>
                  Cadastrar
                </button>
              </form>
            </div>

            <div className={`${styles.product} ${styles.listProduct}`}>
              <h1>Visualizar produtos:</h1>

              <h4>Clique no botão para ver todos os produtos.</h4>

              <button type="submit" className={styles.buttonCategory}>
                Visualizar
              </button>
            </div>

            <div className={`${styles.product} ${styles.deleteCategory}`}>
              <h1>Deletar produto:</h1>
              <form>
                <select>
                  <option value="">Selecione um produto</option>
                  <option value="1">Pizza de calabresa</option>
                  <option value="2">Suco de maracujá</option>
                  <option value="3">Sorvete de chocolate</option>
                  <option value="4">Batata frita</option>
                </select>
                <br />
                <button type="submit" className={styles.buttonCategory}>
                  Deletar
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeAdm;