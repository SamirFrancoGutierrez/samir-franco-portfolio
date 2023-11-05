import React from 'react';
import {
    FaEnvelopeOpen,
    FaPhoneSquareAlt,
    FaFacebookF,
    FaLinkedin,
    FaGithub,
    FaInstagram
}    from "react-icons/fa";

import { FiSend } from 'react-icons/fi';
import "./contact.css";
const Contact = () => {
    return(
        <section className="contact section">
            <h2 className="section__title">Ponerse en <span>Contacto</span></h2>
            <div className="contact__container container grid" >
                <div className="contact__data">

                    <h3 className="contact__title">¡No seas tímido!</h3>

                    <p className="contact__description">No dudes en ponerte en contacto conmigo. Siempre estoy abierto a discutir nuevos proyectos, ideas creativas u oportunidades para ser parte de tus visiones.</p>

                    <div className="contact__info">
                        <div className="info__item">
                            <FaEnvelopeOpen className='info__icon' />

                            <div>
                                <span className="info__title">Escríbeme</span>
                                <h4 className="info__desc">contact@samirfranco.tech</h4>
                            </div>
                        </div>

                        <div className="info__item">
                            <FaPhoneSquareAlt className='info__icon' />

                            <div>
                                <span className="info__title">Llámame</span>
                                <h4 className="info__desc">+51 934 714 383</h4>
                            </div>
                        </div>
                    </div>

                    <div className="contact__socials">
                        <a href="https://www.linkedin.com/in/samir-francog/" className="contact__social-link">
                            <FaLinkedin />
                        </a>

                        <a href="https://github.com/SamirFrancoGutierrez" className="contact__social-link">
                            <FaGithub />
                        </a>

                        <a href="https://www.facebook.com/SamirFranco20?mibextid=LQQJ4d" className="contact__social-link">
                            <FaFacebookF />
                        </a>

                        <a href="https://instagram.com/mr.samir_fg?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr" className="contact__social-link">
                            <FaInstagram />
                        </a>
                        
                    </div>
                </div>

                <form  action="https://formsubmit.co/7ff4641ba9a83c9e671b0a8b22b359a5" method="POST" className="contact__form">
                    <div className="form__input-group">
                        <div className="form__input-div" >
                            <input 
                            type="text"
                             placeholder='Nombre' 
                             className="form__control" 
                             name="name"
                             />
                        </div>

                        <div className="form__input-div">
                            <input 
                            type="email"
                             placeholder='Correo Eléctronico' 
                             className="form__control" 
                             name="email"
                             />
                        </div>

                        <div className="form__input-div">
                            <input 
                            type="text"
                             placeholder='Asunto' 
                             className="form__control" 
                             name="subject"
                             />
                        </div>
                    </div>

                    <div className="form__input-div">
                            <textarea 
                            placeholder='Mensaje' 
                            className="form__control textarea">
                            </textarea>
                    </div>

                    <button className='button'>
                        Enviar mensaje
                        <span className="button__icon contact__button-icon">
                            <FiSend/>
                        </span>
                    </button>
                    <input type='hidden' name="_next" value="http://localhost:5173/"/>
                    <input type='hidden' name="_captcha" value="false"/>
                </form>
            </div>
        </section>
    )
}

export default Contact