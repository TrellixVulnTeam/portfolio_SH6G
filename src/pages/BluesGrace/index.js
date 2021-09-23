import React, { Component } from 'react';
import styles from './bluesGrace.module.scss';

class BluesGrace extends Component {
    render() {
        return (
            <div>
                <section className={ styles.wrap }>
                    <div className={ styles.title }>
                        <div className={ styles.square }></div>
                        <p>Blues & Grace</p>
                    </div>
                <section className={ styles.gallery }>
                    <img src="https://i.ibb.co/2qy3cSb/IMG-0926-1.jpg" />
                    <img src="https://i.ibb.co/t4FZK1V/IMG-0927.jpg" />
                    <img src="https://i.ibb.co/W5WXk9K/IMG-0928.jpg" />
                </section>
                </section>
            </div>
        )
    }
}

export default BluesGrace;
