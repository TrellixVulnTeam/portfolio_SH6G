import React, { Component, useState } from 'react';
import styles from './resume.module.scss';
import ResumeList from '../../components/ResumeList';
import { loadResumeData } from '../requests';

class Resume extends Component {
    constructor(props) {
        super(props);
        this.state = {
            experiencedata: [],
            educationdata: [],
            codingSkillset: [],
            softwareSkillset: [],
            languages: []
        };
    }

    async componentDidMount() {
        const returnData = await loadResumeData();
        const experiencedata = returnData.experiences;
        const educationdata = returnData.education;
        const codingSkillset = returnData.codingSkillset;
        const softwareSkillset = returnData.softwareSkillset;
        const languages = returnData.languages;
        this.setState({ experiencedata, educationdata, codingSkillset, softwareSkillset, languages });
    }

    render() {
        const { experiencedata } = this.state;
        const { educationdata } = this.state;
        const { codingSkillset } = this.state;
        const { softwareSkillset } = this.state;
        const { languages } = this.state;
        return (
            <div>
            <section className={ styles.wrap }>
                <div className={ styles.title }>
                    <div className={ styles.square }></div>
                    <p>resume</p>
                </div>
            </section>
            <ResumeList experiencedata={ experiencedata } educationdata= { educationdata } codingSkillset = { codingSkillset } softwareSkillset = { softwareSkillset } language = { languages }/>
        </div>
        )
    }
}

export default Resume;
