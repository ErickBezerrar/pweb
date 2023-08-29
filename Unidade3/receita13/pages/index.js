import Link from 'next/link'
import styles from '../styles/index.module.css';
import { Html, Head, Main, NextScript } from 'next/document'

export default function principal(){
    return (

       <div>
            <body className={styles.body}>
                <div className={styles.cabecalho}>
                    <Link href="/">Home</Link> 
                    <Link href="/paginasobre/sobre">About Us</Link> 
                    <Link href="/paginacontato/contato">Contato</Link> 
                    <Link href="/paginacadastro/cadastro">Cadastro</Link> 
                    
                </div>
            </body>
       </div>
 
    )
 
}