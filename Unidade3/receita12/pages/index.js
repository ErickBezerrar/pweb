import React from 'react';
import { About } from "./about";
import { Contact } from "./contact";
import styles from '../style/style.module.css';

export default function Home(){

    return (
       <div className='container'>{styles.container}
          <h2>
            Viva a Jesus!!
          </h2>
         <About></About>
         <Contact></Contact>
       </div>
    )
}
