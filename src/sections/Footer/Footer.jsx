import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        Contact at:akshatyagyasaini@gmail.com
        <br></br>
        &copy; 2024 Akshat Gupta. <br />
        All rights reserved.
      </p>
    </section>
  );
}

export default Footer;
