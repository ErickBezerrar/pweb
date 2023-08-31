import React from 'react';
import Link from 'next/link';
import Navigation from '../../pages/navigation';
import styles from '../../styles/contato.module.css';

export default function Contato() {
  return (
    <div>
      <Navigation />
      <div className={styles.containerContato}>
        <h1 className={styles.entreemcontato}>Entre em Contato</h1>
        <p>Se você tiver alguma dúvida ou comentário, por favor, preencha o formulário abaixo.</p>

        <div className={styles.contactDetails}>
          <div className={styles.contactInfo}>
            <h2>Informações de Contato</h2>
            <p>
              Você pode entrar em contato conosco através do formulário ou pelos seguintes meios:
            </p>
            <ul>
              <li>Email: contato@example.com</li>
              <li>Telefone: (XX) XXXX-XXXX</li>
            </ul>
          </div>

          <div className={styles.contactForm}>
            <h2>Envie uma Mensagem</h2>
            <form action="#" method="post">
              <label className={styles.label} htmlFor="name">Nome:</label>
              <input className={styles.inputField} type="text" id="name" name="name" required />

              <label className={styles.label} htmlFor="email">E-mail:</label>
              <input className={styles.inputField} type="email" id="email" name="email" required />

              <label className={styles.label} htmlFor="message">Mensagem:</label>
              <textarea className={styles.textArea} id="message" name="message" rows="4" required></textarea>

              <button className={styles.submitButton} type="submit">Enviar Mensagem</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
