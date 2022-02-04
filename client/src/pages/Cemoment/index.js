import React, { Component } from 'react';
import styles from './cemoment.module.scss';

class Cemoment extends Component {
    render() {
        return (
            <div>
                <section className={ styles.wrap }>
                    <div className={ styles.title }>
                        <div className={ styles.square }></div>
                        <p>« Ce moment, ces dix ans »</p>
                    </div>
                <section className={ styles.gallery }>
                    <img src="https://i.ibb.co/HC3zY7q/142.jpg" />
                    <img src="https://i.ibb.co/rtt9BCW/373.jpg" />
                    <img src="https://i.ibb.co/9qWpNNG/391.jpg" />
                    <img src="https://i.ibb.co/rdqXP6H/image.jpg" />
                </section>
                </section>
            </div>
        )
    }
}

export default Cemoment;
