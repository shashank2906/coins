import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from './header.module.css';

const Header = () => {
  return (
    <>
      <div className={styles.headContainer}>
        <div className={styles.header}>
          <h1 className={styles.brand}><lord-icon
    src={`https://cdn.lordicon.com/vaeagfzc.json`}
    trigger="loop"
    style={{width: "60px", height:"60px"}}>
</lord-icon>Desk</h1>
          <form>
            <input
              className={styles.inputField}
              type='text'
              placeholder='Search a Coin'
            />
          </form>
        </div>
      </div>

      <script src="https://cdn.lordicon.com/lusqsztk.js"></script>
    </>
  );
};

export default Header;
