import React, { Component } from 'react';
import styles from './salvation.module.scss';

class Salvation extends Component {
    render() {
        return (
            <div>
                <section className={ styles.wrap }>
                    <div className={ styles.title }>
                        <div className={ styles.square }></div>
                        <p>Savvation</p>
                    </div>
                <section className={ styles.gallery }>
                    <img src="https://i.ibb.co/vxmCxcw/Processed-with-VSCO-with-c7-preset.jpg" />
                    <img src="https://i.ibb.co/1ZjXTnR/Processed-with-VSCO-with-c7-preset.jpg" />
                    <img src="https://i.ibb.co/3SMxcHY/Processed-with-VSCO-with-c7-preset.jpg" />
                </section>
                </section>
            </div>
        )
    }
}

export default Salvation;
