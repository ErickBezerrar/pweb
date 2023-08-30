import React from 'react'; 
import Link from 'next/link'
import styles from '../styles/index.module.css';
import Navigation from '../pages/navigation';

export default function Principal(){
    return (
        <div>
            <Navigation></Navigation>
            <h1 className={styles.bemvindo}>Bem-vindo ao <br></br>Nosso Website!</h1>
            <h2 className={styles.somosempresa}>
               Somos uma empresa dedicada <br></br>a fornecer soluções inovadoras...
            </h2>
                <p className={styles.paragrafo}>"Somos uma empresa inovadora dedicada a oferecer<br></br> soluções tecnológicas para seus desafios.<br></br> Nossa paixão é transformar ideias em realidade por meio de<br></br> desenvolvimento de software, design criativo e estratégias digitais.<br></br> Trabalhamos para impulsionar o seu sucesso com eficiência e qualidade."</p>
                    <div>

                    </div>
        </div>
        
    )
}

