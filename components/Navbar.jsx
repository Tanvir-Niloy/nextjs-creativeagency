import React from 'react';
import styles from '../styles/Navbar.module.css';
import Link from 'next/link';


const Navbar = () => {
  return (
    <div className={styles.container}>
     <Link href='/'><h2>AVOCADO</h2></Link>
      <ul className={styles.list}>
        <li className={styles.listItem}>
        <Link href='/products/design'>Design</Link>
        </li>
        <li className={styles.listItem}>
        <Link href='/products/development'>Development</Link>
        </li>
        <li className={styles.listItem}>
        <Link href='/products/photography'>Photography</Link>
        </li>
        <li className={styles.listItem}>
        <Link href='/contact'>Contact</Link>
        </li>
     </ul>
    </div>
  )
}

export default Navbar
