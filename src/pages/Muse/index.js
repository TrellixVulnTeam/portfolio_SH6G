import React, { Component } from 'react';
import styles from './muse.module.scss';

class Muse extends Component {
    render() {
        return (
            <div>
                <section className={ styles.wrap }>
                    <img src="https://i.ibb.co/b7Vsy9J/1632433196791.jpg" />
                    <div className={ styles.subtitle }>
                        <h1>Muse Runner</h1>
                        <div className= { styles.line }></div>
                        <h5>Electric music mobile game for Ios and Android.</h5>
                        <div className= { styles.buttonwrap}>
                                <a href="https://apps.apple.com/us/app/muse-runner/id1221894773" className= { styles.button }><p>ios download</p></a>
                                <a href="https://outexp-beta.cdn.qq.com/outbeta/2021/09/23/comrinzzprojectmuse_5.9.1_c4116c5e-b94d-5a34-aaec-7c8cd8cc3345.apk" className= { styles.button }><p>Android download</p></a>
                        </div>
                    </div>
                    <div className={ styles.subtitle }>
                        <h1>UI / UX Design</h1>
                        <div className= { styles.line }></div>
                        <section className={ styles.gallery }>
                            <img src="https://i.ibb.co/ZxNTrcZ/muse-bonus.jpg" />
                            <img src="https://i.ibb.co/jRMfDz8/muse-store.png" />
                            <img src="https://i.ibb.co/1dQ07hG/muse-character.jpg" />
                            <img src="https://i.ibb.co/Br5RMHL/muse-gifts.png" />
                        </section>
                    </div>
                </section>
            </div>
        )
    }
}

export default Muse;
