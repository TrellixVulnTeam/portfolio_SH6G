import React, { Component } from 'react';
import styles from './salvation.module.scss';

class Salvation extends Component {
    render() {
        return (
            <div>
                <section className={ styles.wrap }>
                    <div className={ styles.title }>
                        <div className={ styles.square }></div>
                        <p>Salvation</p>
                    </div>
                    <section className={ styles.gallery }>
                        <img className={ styles.main} src="https://i.ibb.co/vxmCxcw/Processed-with-VSCO-with-c7-preset.jpg" />
                        <div className={ styles.notmain}>
                            <img src="https://i.ibb.co/1ZjXTnR/Processed-with-VSCO-with-c7-preset.jpg" />
                            <img src="https://i.ibb.co/3SMxcHY/Processed-with-VSCO-with-c7-preset.jpg" />
                        </div>
                    </section>
                </section>
            </div>
        )
    }
}

export default Salvation;
