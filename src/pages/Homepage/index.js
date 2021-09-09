import React, { Component } from 'react';
import styles from './home.module.scss';
import photo from '../../assets/photo.jpg';
import { Link } from "react-router-dom";

export default () => {
    return <div className={ styles.wrap }>
        <section className={ styles.brief }>
            <div className={ styles.card }>
                <img src={ photo } className={ styles.photo }/>
                <p>Jiayu</p>
                <p>Wen</p>
                <div className= { styles.line }></div>
                <p className={ styles.subtitle }>Web designer</p>
                <p className={ styles.subtitle }>Graphic designer/ Illustrator</p>
            </div>
        </section>
        <section className={ styles.info }>
            <p className={ styles.title }>Hej</p>
            <p className={ styles.subtitle }>Here's who I am & what I do</p>
            <div className={ styles.buttons }>
                <Link to="/resume" className={ styles.button }><p>resume</p></Link>
                <Link to="/design" className={ styles.button }><p>design</p></Link>
                <Link to="/illustration" className={ styles.button }><p>illustration</p></Link>
            </div>
            <p className={ styles.desc }>I am passionate about human interaction and creating useful and user-friendly products. I have a big interest in front-end and UI/UX design and have previously worked as a digital/graphic designer in Stockholm.</p>
        </section>
    </div>
}
