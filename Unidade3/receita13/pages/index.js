import React from 'react';
import Link from 'next/link';
import styles from '../styles/index.module.css';
import Navigation from '../pages/navigation';

export default function Principal(){
    return (
        <div>
            <Navigation></Navigation>
            <div className={styles.divinfo}>
                <h1 className={styles.bemvindo}>Bem-vindo ao <br></br>Nosso Website!</h1>
                <img className={styles.imagem} src='https://www.proyectum.com/sistema/wp-content/uploads/2020/02/Empresa-de-tecnolog%C3%ADa.jpg'></img>
            </div>
                <h2 className={styles.somosempresa}>
                    Somos uma empresa dedicada <br></br>a fornecer soluções inovadoras...
                </h2>
            <div className={styles.divinfo2}>
                <img className={styles.imagem2} src='https://agendor-blog-uploads.s3.sa-east-1.amazonaws.com/2018/03/15112351/estrategia-de-crescimento-de-uma-empresa1.jpg'></img>
                <p className={styles.paragrafo}>"Somos uma empresa inovadora dedicada a oferecer soluções tecnológicas para seus desafios. Nossa paixão é transformar ideias em realidade por meio de desenvolvimento de software, design criativo e estratégias digitais. Trabalhamos para impulsionar o seu sucesso com eficiência e qualidade."</p>
            </div>
        </div>
        
    )
}

