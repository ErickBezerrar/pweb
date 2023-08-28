import React from 'react';

export default function Cadastro() {
    return (
        <div>
            <div className="container">
                <h1>Cadastre-se</h1>
                <form action="#" method="post">
                    <label htmlFor="name">Nome:</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">E-mail:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="password">Senha:</label>
                    <input type="password" id="password" name="password" required />

                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}
