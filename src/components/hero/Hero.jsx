import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          I'm Devjian
        </h1>
        <p className={styles.subtitle}>
          Making Complex Tech Simple and Accessible.
        </p>
      </header>
    </section>
  );
}

export default Hero;
