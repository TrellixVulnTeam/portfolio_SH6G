import React, { Component } from 'react';
import styles from './resume.module.scss';
import ResumeList from '../../components/ResumeList';
import Experience from "../../data/experience.json";
import Education from "../../data/education.json";
import CodingSkillset from "../../data/codingSkillset.json";
import SoftwareSkillset from "../../data/softwareSkillset.json";
import Language from "../../data/language.json";

class Resume extends Component {
    render() {
        const experiencedata = Experience.data;
        const educationdata = Education.data;
        const codingSkillset = CodingSkillset.data;
        const softwareSkillset = SoftwareSkillset.data;
        const language = Language.data;
        return (
            <div>
            <section className={ styles.wrap }>
                <div className={ styles.title }>
                    <div className={ styles.square }></div>
                    <p>resume</p>
                </div>
            </section>
            <ResumeList experiencedata={ experiencedata } educationdata= { educationdata } codingSkillset = { codingSkillset } softwareSkillset = { softwareSkillset } language = { language }/>
        </div>
        )
    }
}

export default Resume;
