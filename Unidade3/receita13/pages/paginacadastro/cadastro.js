import React from 'react'; 
import Link from 'next/link'
import Navigation from '../../pages/navigation';
import styles from '../../styles/cadastro.module.css';

export default function Cadastro() {
    return (
        <div>
            <Navigation></Navigation>
                <div className={styles.wrapper}>
                    <form action=''>
                        <h1 className={styles.nameLogin}>Login</h1>
                        <div className={styles.inputbox}>
                            <input type='text' placeholder='Username' required></input>
                        </div>
                        <div className={styles.inputbox}>
                            <input type='password' placeholder='Password' required></input>
                        </div>

                        <div className={styles.rememberForgot}>
                            <label><input type='checkbox'></input> Remember me</label>
                            <a href='#'>Forgot password?</a>
                        </div>


                        <button type='submit' className={styles.bnt}>Login</button>

                        <div className={styles.registerLink}>
                            <p>Don't have an account? <a href='#'>Register</a></p>
                        </div>
                    </form>
                </div>
        </div>
    );
}
