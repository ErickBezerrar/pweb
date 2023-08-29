import Link from 'next/link'
//import styles from '../styles/contato.module.css';

export default function contato(){
    return (
 
    <div>
        <div className="cabecalho">
            <Link href="/">Home</Link> 
            <Link href="/paginasobre/sobre">About Us</Link> 
            <Link href="/paginacontato/contato">Contato</Link> 
            <Link href="/paginacadastro/cadastro">Cadastro</Link> 
        </div>

        <div className="container">
            <h1>Entre em Contato</h1>
            <p>Se você tiver alguma dúvida ou comentário, por favor, preencha o formulário abaixo.</p>
            <form action="#" method="post">
                <label htmlFor="name">Nome:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">E-mail:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">Mensagem:</label>
                <textarea id="message" name="message" rows="4" required></textarea>

                <button type="submit">Enviar Mensagem</button>
            </form>
        </div>
    </div>
);
}





