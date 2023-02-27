import React from 'react';
import styles from './Home.module.css';

// imgs
import profile from '../../img/profile.png';
import background from '../../img/background.png';


const Home = () => {
  return (
    <div className={ styles.homeMain }>

      <section className={`${styles.cols} ${styles.cols0}`}>

        <span className={ styles.topLine }>Hello</span>

        <h1>I'm <span className={ styles.multiText }>Coder</span></h1>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>

        <div className={ styles.btns }>

          <button>download CV</button>
          <button>hice me</button>

        </div>

      </section>

      <section className={`${styles.cols} ${styles.cols1}`}>

        <div className={styles.imgbox}>
          <img className={ styles.imgBackground } src={ background } alt="" />
          {/* <img className={ styles.imgProfile } src={ profile } alt="" /> */}
        </div>

      </section>

    </div>
  )
}

export default Home;
