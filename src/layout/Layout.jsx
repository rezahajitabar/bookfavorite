import React from "react";
import styles from '../layout/Layout.module.css'
function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Book App</h1>
        <p>
          <a href="https://google.com">Library Reza.Hajitabar</a> | React
          js.full course
        </p>
      </header>
      {children}
      <footer className={styles.footer}><p>Developed by Milad with ❤</p></footer>
    </>
  );
}

export default Layout;
