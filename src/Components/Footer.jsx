import React from "react";
import styles from "./Footer.module.css";
import Dogs from "../Assets/dogs.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src={Dogs} className={styles.img} />
      <span>Copyright © 2024 Tais Defante . Todos os direitos reservados.</span>
      <br />
      <span>Contato: taisadefante@hotmail.com</span>
    </footer>
  );
};

export default Footer;
