import React, { Component } from 'react';
import styles from './codings.module.scss';
import CodingsList from '../../components/CodingsList';
import { loadCodingsData } from '../requests';

class Codings extends Component {
    constructor(props) {
        super(props);
        this.state = {codingsData: []};
    }

    async componentDidMount() {
        const returnData = await loadCodingsData();
        const codingsData = returnData.codingsData;
        this.setState({ codingsData });
    }

    render() {
        const { codingsData }  = this.state;
        return (
            <div>
            <section className={ styles.wrap }>
                <div className={ styles.title }>
                    <div className={ styles.square }></div>
                    <p>Codings</p>
                </div>
                <p className={ styles.subtitle }>I am passionate about human interaction and creating useful and user-friendly products.<br />I have a big interest in front-end and UI/UX design!</p>
            </section>
            <CodingsList codingsData={ codingsData }/>
        </div>
        )
    }
}

export default Codings;
