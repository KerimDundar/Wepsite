import React from 'react';
import styles from './Hakkimda.module.css';

function AboutUs() {
  return (
    <section className={styles.HakkimdaUs}>
      <div className={styles.container}>
        <h2 className={styles.title}>Hakkımızda</h2>
        <p className={styles.text}>
          Özderin Avukatlık Bürosu, 2002 yılında İstanbul'da kurulmuştur. Şirketimiz, uluslararası düzeyde müvekkillerine en iyi hizmeti sunmayı hedeflemektedir. Hukukun her alanında deneyimli avukatlarımızla, müvekkillerimize en etkili çözümleri sunmaktayız.
        </p>
      </div>
    </section>
  );
}

export default AboutUs;
