import React from "react";
import Modal from "react-modal";
import { useState } from "react";
import styles from "./styles.module.scss";
import { AiOutlineCloseCircle } from "react-icons/ai";

const ModalCategory = () => {
  Modal.setAppElement("#root");
  return (
    <div>
      <h2>Categorias cadastradas</h2>
      <hr />

      <div className={styles.categories}>
        <ul>
          <li>Pizzas</li>
          <li>Bebidas</li>
          <li>Comidas</li>
          <li>Sobremesas</li>
          <li>Pizzas</li>
          <li>Bebidas</li>
          <li>Comidas</li>
          <li>Sobremesas</li>
          <li>Pizzas</li>
          <li>Bebidas</li>
          <li>Comidas</li>
          <li>Sobremesas</li>
        </ul>
      </div>
    </div>
  );
};

export default ModalCategory;
