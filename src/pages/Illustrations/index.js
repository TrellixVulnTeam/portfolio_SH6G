import React, { Component } from 'react';
import styles from './illustrations.module.scss';
import IllustrationsList from '../../components/IllustrationsList';
import IllustrationsData from "../../data/illustrationsData.json";

class Illustrations extends Component {
    render() {
        const illustrationsData = IllustrationsData.data;
        return (
            <div>
            <section className={ styles.wrap }>
                <div className={ styles.title }>
                    <div className={ styles.square }></div>
                    <p>Illustrations</p>
                </div>
                <p className={ styles.subtitle }>Drawing is my way of expressing my connection with this world.<br />Hope you can feel my emotional fluctuations from them.</p>
            </section>
            <IllustrationsList illustrationsData={ illustrationsData }/>
        </div>
        )
    }
}

export default Illustrations;
