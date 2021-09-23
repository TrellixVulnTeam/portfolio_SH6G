import React from 'react';
import styles from './illustrationList.module.scss';
import { Link, withRouter} from "react-router-dom";

const IllustrationsList = ({ illustrationsData })  => {
    // const { location } = this.props;
    return (
        <div className={ styles.wrap }>
            <ul>
                {
                    illustrationsData.map(item =>
                        <ul className= { styles.card }>
                            <div className= { styles.left}>
                                <div className= { styles.top }>
                                    <li key={item.id} className= { styles.time }> { item.name } </li>
                                    <li className= { styles.type }>{item.type }</li>
                                    <li className= { styles.company }>{ item.time }</li>
                                </div>
                                <div className= { styles.buttom }>
                                    <p className= { styles.desc }>{ item.desc }</p>
                                    {/* location.pathname===`/illustrations/${item.id}` ?  */}
                                    {/* <Route path={ `/illustrations/${item.id}`} component={ item.page } /> */}
                                    <Link to={ `/illustrations/${item.id}`}><p className= { styles.button }>check more</p></Link>
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
export default withRouter(IllustrationsList);