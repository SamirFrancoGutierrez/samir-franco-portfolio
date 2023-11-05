import React from 'react';
import Profile from "../../assets/home.jpg";
import { Link } from 'react-router-dom';
import {FaArrowRight} from 'react-icons/fa';
import "./home.css";

const Home = () => {
    return(
        <section className="home section grid">
            <img src={Profile} alt='' className="home__img" />

            <div className="home__content">
                <div className="home__data">
                    <h1 className="home__title">
                    <span>Soy Samir Franco. </span> Programador Full-Stack
                    </h1>

                    <p className="home__description">Apasionado desarrollador de software especializado en soluciones innovadoras que mejoran la experiencia del usuario y la eficiencia empresarial. Mi versatilidad con diversas tecnologías me permite convertir ideas en soluciones prácticas. Mi objetivo es crear un impacto positivo al aplicar tecnología avanzada que se adapte  las demandas tecnológicas actuales.
                    </p>

                    <Link to ='/about' className='button'>
                        Más acerca de mí {' '}
                        <span className='button__icon'>
                            <FaArrowRight></FaArrowRight>
                        </span>
                    </Link>
                    

                </div>
            </div>

            <div className="color__block"></div>
        </section>
    )
}

export default Home