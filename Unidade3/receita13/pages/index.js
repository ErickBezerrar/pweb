import React from 'react';
import { About } from "./about";
import { Contact } from "./contact";
import styles from '../style/style.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <h2>
                Viva a Jesus!!
            </h2>
            <About />
            <Contact />
            <img width='375'src="https://arquivos.info.ufrn.br/arquivos/20202020440d2c7471879040a453273e7/IMG_20200423_120408753-01.jpeg"></img>
            <p>Obrigado por iluminar o caminho do código e transformar o complexo em algo compreensível. Sua orientação é a faísca que acende minha paixão pela programação.</p>
        </div>
    )
}
