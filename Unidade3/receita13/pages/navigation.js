import React from 'react';
import Link from 'next/link';
import styles from '../styles/index.module.css';

export default function Navigation() {
    return (
        <div className={styles.cabecalho}>
            <Link href="/">Home</Link>
            <Link href="/paginasobre/sobre">About</Link>
            <Link href="/paginacontato/contato">Contact</Link>
            <Link href="/paginacadastro/cadastro">Register</Link>
        </div>
    );
}