import React from 'react';
import { Link } from 'react-router-dom';
import styles from './nav.module.css';

const Nav = () => (
  <div className={styles.navBar}>
    <div>
      <a className={styles.logo} href="/">Calculator</a>
    </div>
    <ul className={styles.menu}>
      <li className={styles.menu__item}><Link to="/">Home</Link></li>
      <li className={styles.menu__item}><Link to="/calculator">Calculator</Link></li>
      <li className={styles.menu__item}><Link to="/quotes">Quotes</Link></li>
    </ul>
  </div>
);

export default Nav;
