import React from 'react';
import Link from 'next/link';
import styles from '../styles/index.module.css';

export default function Navigation() {
    return (
        <div className={styles.cabecalho}>
            <Link href="/">Home</Link>
            <Link href="/paginasobre/sobre">About Us</Link>
            <Link href="/paginacontato/contato">Contato</Link>
            <Link href="/paginacadastro/cadastro">Cadastro</Link>
        </div>
    );
}