import React, { Component } from 'react';
import styles from './resumeList.module.scss';

export default ({ experiencedata, educationdata, codingSkillset, softwareSkillset, language }) => {
    return (
        <div className= { styles.wrap }>
            <div><p className= { styles.title }>experience</p></div>
            {
               experiencedata.map(item => 
                <ul className= { styles.card }>
                    <div className= { styles.left}>
                        <li key={item.id} className= { styles.time }> { item.time } </li>
                        <li className= { styles.role }>{item.role }</li>
                        <li className= { styles.company }>{ item.company }</li>
                        <li className= { styles.location }>{ item.location }</li>
                    </div>
                    <div className= { styles.right}>
                        <li>{item.desc}</li>
                    </div>
                </ul>)
            }
        <div><p className= { styles.title }>education</p></div>
            {
               educationdata.map(item => 
                <ul className= { styles.card }>
                    <div className= { styles.left}>
                        <li key={item.id} className= { styles.time }> {item.time} </li>
                        <li className= { styles.role }>{ item.major }</li>
                        <li className= { styles.company }>{ item.school }</li>
                        <li className= { styles.location }>{ item.location }</li>
                    </div>
                    <div className= { styles.right}>
                    <li>{ item.desc }</li>
                    </div>
                </ul>)
            }
        <div><p className= { styles.title }>coding skillset</p></div>
        <div className= { styles.skills }>
            {
                codingSkillset.map(item =>
                    <div className={ styles.item }>
                        <div className={styles.square}></div>
                        <p>{ item.content }</p>
                    </div>
                    )
            }
        </div>
        <div><p className= { styles.title }>software skillset</p></div>
        <div className= { styles.skills }>
            {
                softwareSkillset.map(item =>
                    <div className={ styles.item }>
                        <div className={styles.square}></div>
                        <p>{ item.content }</p>
                    </div>
                    )
            }
        </div>
        <div><p className= { styles.title }>languages</p></div>
        <div className= { styles.skills }>
            {
                language.map(item =>
                    <div className={ styles.item }>
                        <div className={styles.square}></div>
                        <p>{ item.content }</p>
                    </div>
                    )
            }
        </div>
    </div>)
}
