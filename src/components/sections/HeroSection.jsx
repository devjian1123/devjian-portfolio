import { useEffect, useRef } from 'react';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  const typedTextRef = useRef(null);

  useEffect(() => {
    const typedText = typedTextRef.current;
    if (!typedText) return;

    const text1 = 'Hello, World ?';
    const text2 = 'Hello, I\'m DEVJIAN !';
    const pauseDuration = 1500;
    const deleteIndex = 7;

    let index = 0;
    let isDeleting = false;
    let isText1Complete = false;
    let delay = 200;

    const typeHeroText = () => {
      if (isDeleting) {
        typedText.textContent = text1.substring(0, index);
        delay = 100;
        index--;

        if (index < deleteIndex) {
          isDeleting = false;
          index = deleteIndex;
          delay = 200;
          setTimeout(typeHeroText, delay);
          return;
        }
      } else {
        if (isText1Complete) {
          typedText.textContent = text2.substring(0, index);
        } else {
          typedText.textContent = text1.substring(0, index);
        }

        delay = 200;
        index++;

        if (index > text1.length && !isText1Complete) {
          isText1Complete = true;
          isDeleting = true;
          setTimeout(typeHeroText, pauseDuration);
          return;
        }

        if (isText1Complete && index > text2.length) {
          return;
        }
      }

      setTimeout(typeHeroText, delay);
    };

    typeHeroText();
  }, []);

  return (
    <section className={styles['hero-section']}>
      <div className={styles['hero-text']}>
        <div className="annotation-container">
          <p className={styles['annotation']}>@Junior</p>
          <p className={styles['annotation']}>@BackEnd</p>
        </div>

        <h1>
          <span ref={typedTextRef} id={styles['typed-text']}></span>
        </h1>

        <p className={styles['comments']}>
          A <span className={styles['constant']}>BACK_END_WIZARD</span> Who <span className={styles['method']}>solves(</span><span className={styles['plain-text']}>problems</span><span className={styles['method']}>)</span> with <span className={styles.keyword}>flair</span>.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
