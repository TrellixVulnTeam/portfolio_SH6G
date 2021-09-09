import React, { Component } from 'react';
import styles from './designList.module.scss';
import { Link } from 'react-router-dom';

export default ( { designsData } ) => {
    return (
        <div className={ styles.wrap }>
            <ul>
                {
                    designsData.map(item =>
                        <ul className= { styles.card }>
                            <div className= { styles.left}>
                                <div className= { styles.top }>
                                    <li key={item.id} className= { styles.time }> { item.name } </li>
                                    <li className= { styles.role }>{item.role }</li>
                                    <li className= { styles.company }>{ item.time }</li>
                                </div>
                                <div className= { styles.buttom }>
                                    <p className= { styles.desc }>{ item.desc }</p>
                                    {/* <Link to={ `/designs/${item.id}` }><p className= { styles.button }>check more</p></Link> */}
                                </div>
                            </div>
                            <div className= { styles.right}>
                                <img src={ `${ item.url }` } className={ styles.photo }/>
                            </div>
                        </ul> 
                    )
                }
            </ul>
        </div>
    )
}