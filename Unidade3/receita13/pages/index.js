import Link from 'next/link'

export default function principal(){
    return (

       <div>
         <div class="cabecalho">
            <Link href="/">Home</Link> 
            <Link href="/paginasobre/sobre">About Us</Link> 
            <Link href="/paginacontato/contato">Contato</Link> 
            <Link href="/paginacadastro/cadastro">Cadastro</Link> 
        </div>
       </div>
 
    )
 
 }

