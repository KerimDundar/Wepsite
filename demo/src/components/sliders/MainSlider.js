import React from 'react';
import styles from './MainSlider.module.css';

function MainSlider() {
  return (
    <section className={styles.mainSlider}>
      <div className={styles.sliderItem}>
        <img src="https://dummyimage.com/1200x500/000/fff" alt="Resim" style={{width: "100%", height: "100%"}} />
      </div>  
    </section>
  );
}

export default MainSlider;
