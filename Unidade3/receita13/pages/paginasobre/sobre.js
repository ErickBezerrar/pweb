import Link from 'next/link'
//import styles from '../styles/sobre.module.css';

export default function sobre(){
    return (
        <div>
            <div className="cabecalho">
                <Link href="/">Home</Link> 
                <Link href="/paginasobre/sobre">About Us</Link> 
                <Link href="/paginacontato/contato">Contato</Link> 
                <Link href="/paginacadastro/cadastro">Cadastro</Link> 
            </div>

            <p className ="">página sobre</p>
        </div>

    )
 
}

