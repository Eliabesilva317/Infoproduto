import React, { useState, useEffect } from "react";
import "../Home/styles.css";
import img from "../../assets/preview-hamburger.gif";




function Home() {

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


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

  const handleFiltroChange = (event) => {
    setFiltro(event.target.value);
  };

  const itensFiltrados = itens.filter((item) =>
    item.nome.toLowerCase().includes(filtro.toLowerCase())
  );

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
   
        <div className="space-block">
             <img className="image-3" src={img} alt="capa" />
             <div className="deteles" >
              <p>Eliabe cruz silva</p>
             </div>
             </div> 
          <div className="space-block">
          <img className="image-3" src={img} alt="capa" />
          <div className="deteles" >
              <p>Eliabe cruz silva</p>
             </div>
             </div>

        <div className="space-block">
        <img className="image-3" src={img} alt="capa" />
        <div className="deteles" >
              <p>Eliabe cruz silva</p>
             </div>
          </div>
           
        <div className="space-block">
        <img className="image-3" src={img} alt="capa" />
        <div className="deteles" >
              <p>Eliabe cruz silva</p>
             </div>
           </div>
         </div>

         {/* Space-2 */}

         <div className="space-2">
          <div className="space-block">
          <img className="image-3" src={img} alt="capa" />
          <div className="deteles" >
              <p>Eliabe cruz silva</p>
             </div>
          </div>

          <div className="space-block">
          <img className="image-3" src={img} alt="capa" />
          <div className="deteles" >
              <p>Eliabe cruz silva</p>
             </div>
          </div>

          <div className="space-block">
          <img className="image-3" src={img} alt="capa" />
          <div className="deteles" >
              <p>Eliabe cruz silva</p>
             </div>
          </div>

          <div className="space-block">
          <img className="image-3" src={img} alt="capa" />
          <div className="deteles" >
              <p>Eliabe cruz silva</p>
             </div>
          </div>
         </div>
    
              {/* Space-3 */}

            <div className="space-3">
            <div className="space-block">
            <img className="image-3" src={img} alt="capa" />
            <div className="deteles" >
              <p>Eliabe cruz silva</p>
             </div>
            </div>

            <div className="space-block">
            <img className="image-3" src={img} alt="capa" />
            <div className="deteles" >
              <p>Eliabe cruz silva</p>
             </div>
            </div>

            <div className="space-block">
            <img className="image-3" src={img} alt="capa" />
            <div className="deteles" >
              <p>Eliabe cruz silva</p>
             </div>
            </div>

            <div className="space-block">
            <img className="image-3" src={img} alt="capa" />
             <div className="deteles" >
              <p>Eliabe cruz silva</p>
             </div>
            </div>

            </div>

        </div>
      
  );
}

export default Home;
