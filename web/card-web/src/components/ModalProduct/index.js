import styles from "./styles.module.scss";

const ModalProduct = () => {
  return (
    <div>
      <h2>Produtos cadastrados</h2>
      <hr />

      <div className={styles.products}>
        <ul>
          <li>Pizza de calabresa</li>
          <li>Suco de uva</li>
          <li>Torta de maçã</li>
          <li>Sorvete de baunilha</li>
          <li>Pizza de queijo</li>
          <li>Suco de maracujá</li>
          <li>Pizza de calabresa</li>
          <li>Suco de uva</li>
          <li>Torta de maçã</li>
          <li>Sorvete de baunilha</li>
          <li>Pizza de queijo</li>
          <li>Suco de maracujá</li>
        </ul>
      </div>
    </div>
  );
};

export default ModalProduct;
