import React, { Component } from 'react';
import styles from './rinzz.module.scss';

class Rinzz extends Component {
    render() {
        return (
            <div>
                <section className={ styles.wrap }>
                    <img src="https://i.ibb.co/5BmXRQh/rinzz-logo.jpg" />
                    <div className={ styles.subtitle }>
                        <h1>Rinzz App</h1>
                        <div className= { styles.line }></div>
                        <h5>An application that helps you connect with people who loves mobile game.</h5>
                        <div className= { styles.buttonwrap}>
                                <a href="http://www.rinzz.com/home/" className= { styles.button }><p>Visit website</p></a>
                        </div>
                    </div>
                    <div className={ styles.card }>
                        <div className={ styles.text }>
                            <h1>APP Storytelling</h1>
                            <div className= { styles.line }></div>
                            <h5>Design with an interesting story theme to give the user a fun experience and igniting their imagination. By following the story atmosphere and colour scheme, to create a coherent experience for the users.</h5>
                        </div>
                        <img src="https://i.ibb.co/4W7GGK5/rinzz-landing.png" />
                    </div>
                    <div className={ styles.card }>
                        <div className={ styles.text }>
                            <h1>APP ICON</h1>
                            <div className= { styles.line }></div>
                            <h5>This icon was created to display both the letters RINZZ and the chinese character for HOT - 热.</h5>
                        </div>
                        <img src="https://i.ibb.co/7pJWnT6/rinzz-logo.png" />
                    </div>
                    <div className={ styles.card }>
                        <div className={ styles.text }>
                            <h1>User flow</h1>
                            <div className= { styles.line }></div>
                        <h5>Not only nice looking user interface but also great user experience. Easy to understand process and clean interface is the key of the design.</h5>
                        </div>
                        <img src="https://i.ibb.co/T11ntb0/rinzz-flow.png" />
                    </div>
                    <div className={ styles.card }>
                        <div className={ styles.text }>
                            <h1>APP THEME</h1>
                            <div className= { styles.line }></div>
                            <h5>We selected red as our main colour for this project. As red is a highly visible colour that is able to focus attention quickly as well as it's the colour of passionate love. Cute & fun icons and theme in order to make the app more appealing and friendly  for users so they can become fully immersed.</h5>
                        </div>
                        <img src="https://i.ibb.co/w6rM9ds/rinzz-theme.png" />
                    </div>
                </section>
            </div>
        )
    }
}

export default Rinzz;
