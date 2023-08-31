import React from 'react'; 
import Link from 'next/link'
import Navigation from '../navigation';
import styles from '../../styles/conselho.module.css';

export default function Sobre(){
    const click = () => {
        carregarConselho();
    };

    return (
        <div>
            <Navigation />
            <button id="botaoCarregar" className={styles.botaoCarregar} onClick={click}>Carregar um conselho</button>
            <div id="conselhoDiv" className={styles.conselhoDiv}></div> 
        </div>  

    );
}


async function carregarConselho() {
    try {
        let res = await fetch("https://api.adviceslip.com/advice");
        let resposta = await res.json();

        const propriedade = "advice";

        const div = document.getElementById("conselhoDiv");
        div.innerHTML = `${propriedade}: ${resposta.slip[propriedade]}`;
    } catch (err) {
        document.getElementById("conselhoDiv").innerHTML = "Erro ao carregar os conselhos da API";
    }
}
carregarConselho();

