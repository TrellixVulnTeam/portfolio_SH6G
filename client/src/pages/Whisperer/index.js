import React, { Component } from 'react';
import styles from './whisperer.module.scss';

class Whisperer extends Component {
    render() {
        return (
            <div>
                <section className={ styles.wrap }>
                    <div className={ styles.title }>
                        <div className={ styles.square }></div>
                        <p>Whisperer</p>
                    </div>
                    <div className={ styles.subtitle }>
                        <img src="https://i.ibb.co/7zLNys9/hidahfiaf4.jpg" />
                        <h1>The Story</h1>
                        <div className= { styles.line }></div>
                        <h6>I think everyone's life is a book.
                        <br />In the process of meeting and knowing people every day, I am always curious, if I were them, and replaced by their life background and environment, what kind of person would I become? What's their thoughts about this world and how they are defining themselves are very interesting to me.
                        <br />Before starting this project, I randomly selected twelve female friends for interviews. Some are friends of mine, some are I met online. Because this interview was anonymous so the interviewees were very relaxed.
                        <br />Every interviewer has chosen one quote that she think could represent her attitude of her life. After the interview, I took a picture of her portrait and use watercolour to draw her portrait to present the feeling that she gave me.</h6>
                    </div>
                    <div className={ styles.subtitle }>
                        <h1>The Illustrations</h1>
                        <div className= { styles.line }></div>
                    </div>
                    <section className={ styles.gallery }>
                        <div className={ styles.card}>
                            <img src="https://i.ibb.co/H4vwNc8/img014.jpg" />
                            <h6>Britney C</h6>
                            <p>"We only live once."</p>
                        </div>
                        <div className={ styles.card}>
                            <img src="https://i.ibb.co/gyYrWKB/4.jpg" />
                            <h6>Ivy H</h6>
                            <p>"I am not what happened to me. I am what I choose to become."</p>
                        </div>
                        <div className={ styles.card}>
                            <img src="https://i.ibb.co/SRRgx5n/5.jpg" />
                            <h6>Yolanda W</h6>
                            <p>"Being deeply loved gives you strength; Loving deeply gives you courage."</p>
                        </div>
                        <div className={ styles.card}>
                            <img src="https://i.ibb.co/Scm7RhW/3.jpg" />
                            <h6>Lisa R</h6>
                            <p>"Believe in yourself a little more."</p>
                        </div>
                        <div className={ styles.card}>
                            <img src="https://i.ibb.co/QDp2vnN/1.jpg" />
                            <h6>Kelly N</h6>
                            <p>"Above all, be the heroine of your life, not the victim."</p>
                        </div>
                        <div className={ styles.card}>
                            <img src="https://i.ibb.co/y0rQDtP/2.jpg" />
                            <h6>Sally H</h6>
                            <p>"Make a fairy tale and go live in it."</p>
                        </div>
                        <div className={ styles.card}>
                            <img src="https://i.ibb.co/kcGCx1v/8.jpg" />
                            <h6>Angele B</h6>
                            <p>"Keep your hopes up."</p>
                        </div>
                        <div className={ styles.card}>
                            <img src="https://i.ibb.co/PtxchKV/11.jpg" />
                            <p>Isabella C</p>
                            <h6>"Don’t let anyone ever dull your sparkle."</h6>
                        </div>
                        <div className={ styles.card}>
                            <img src="https://i.ibb.co/pdSdrdd/9.jpg" />
                            <p>Celia G</p>
                            <h6>"Having a soft heart in a cruel world is courage, not weakness.</h6>
                        </div>
                    </section>
                </section>
            </div>
        )
    }
}

export default Whisperer;
