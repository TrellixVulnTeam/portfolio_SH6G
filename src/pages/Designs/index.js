import React, { Component } from 'react';
import styles from './designs.module.scss';
import DesignList from '../../components/DesignList';
import DesignsData from "../../data/designsData.json";

class Designs extends Component {
    render() {
        const designsData = DesignsData.data;
        return (
            <div>
            <section className={ styles.wrap }>
                <div className={ styles.title }>
                    <div className={ styles.square }></div>
                    <p>Designs</p>
                </div>
                <p className={ styles.subtitle }>I am a creative and motivated designer have more than 3 years experience in various industries such as: <br />Web design, graphic design, UI/UX design and Project Management.</p>
            </section>
            <DesignList designsData={ designsData }/>
        </div>
        )
    }
}

export default Designs;
