import React from 'react'

/* BIBLIOTECAS */
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination, Parallax } from 'swiper';
// import { BsGithub } from 'react-icons/bs';
// import AOS from 'aos';

/* ESTILOS */
import styles from './Projects.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/parallax';

const Projects = () => {
  // AOS.init();
  return (
    <div className={ styles.mainProjects } id="project">
      {/* <div className={styles.projectContainer}> */}
        {/* <section className={styles.section}> */}
          <Swiper
            modules={[Navigation, Pagination, A11y, Parallax]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            className={ styles.swipes }
          >
            <SwiperSlide>
              <div className={styles.element}>
                  <a href="#">Projeto trybeWallet</a>
                    <a href="https://imusic-mauve.vercel.app/" target="_blank" rel="noreferrer">
                  </a>
                  <img src="https://conteudo.imguol.com.br/c/noticias/1c/2022/05/24/imagem-criada-no-imagen-prototipo-do-google-que-cria-imagens-baseadas-em-texto-neste-caso-um-cachorro-corgi-andando-de-bicicleta-na-times-square-usando-oculos-de-sol-e-chapeu-de-praia-1653397634334_v2_900x506.jpg" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.element}>
                <a href="#">Projeto trybeWallet</a>
                <a href="#" target="_blank" rel="noreferrer">
                </a>
                <img src="https://ogimg.infoglobo.com.br/in/24208684-5a4-9dd/FT1086A/Japa-Nao_Rodizio-Foto-Selmy-Yassuda_05.jpg" alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
        {/* </section> */}
      {/* </div> */}
    </div>
  )
}

export default Projects;
