import Link from 'next/link'

export default function sobre(){
    return (
        <div>
            <div class="cabecalho">
                <Link href="/principal">Home</Link> 
                <Link href="/">About Us</Link> 
                <Link href="/paginacontato/contato">Contato</Link> 
                <Link href="/paginacadastro/cadastro">Cadastro</Link> 
            </div>

            <p>página sobre</p>
        </div>

 
    )
 
 } 