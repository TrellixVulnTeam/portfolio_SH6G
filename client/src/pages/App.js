import logo from './logo.svg';
import styles from './App.module.scss';
import { Link, Route, withRouter} from "react-router-dom";
import Homepage from "./Homepage";
import Resume from "./Resume";
import Codings from "./Codings";
import Designs from "./Designs";
import GastonLuga from "./GastonLuga";
import Rinzz from "./Rinzz";
import Muse from "./Muse";
import Cemoment from "./Cemoment";
import Salvation from "./Salvation";
import BluesGrace from "./BluesGrace";
import Whisperer from "./Whisperer";
import Illustrations from "./Illustrations";
import { Component } from 'react';

class App extends Component {
  render() {
    const { location } = this.props;
    return (
      <div className={styles.App}>

        {/* Header */}
        <header className={styles.header}>
          <div className={styles.box}>
            <div className={styles.boxleft}>
              <div className={styles.square}></div>
              <div>Jiayu Wen</div>
            </div>
            <div className={styles.boxright}>
              <Link to="/" className={location.pathname==="/" ? styles.selected  : styles.unselected }><p>about</p></Link>
              <Link to="/resume" className={location.pathname==="/resume" ? styles.selected  : styles.unselected }><p>resume</p></Link>
              <Link to="/codings" className={location.pathname==="/codings" ? styles.selected  : styles.unselected }><p>coding</p></Link>
              <Link to="/designs" className={location.pathname==="/designs" ? styles.selected  : styles.unselected }><p>design</p></Link>
              <Link to="/illustrations" className={location.pathname==="/illustrations" ? styles.selected  : null }><p>illustration</p></Link>
            </div>
          </div>
        </header>

        {/* Content */}
        <section className={styles.content}>
          <Route path="/" exact component={ Homepage }></Route>
          <Route path="/resume" exact component={ Resume }></Route>
          <Route path="/codings" exact component={ Codings }></Route>
          {/* <Route path="/codings/:id" exact component={ Coding }></Route> */}
          <Route path="/designs" exact component={ Designs }></Route>
          <Route path="/designs/1" exact component={ GastonLuga }></Route>
          <Route path="/designs/2" exact component={ Rinzz }></Route>
          <Route path="/designs/3" exact component={ Muse }></Route>
          <Route path="/illustrations" exact component={ Illustrations }></Route>
          <Route path="/illustrations/1" exact component={ Cemoment }></Route>
          <Route path="/illustrations/2" exact component={ Salvation }></Route>
          <Route path="/illustrations/3" exact component={ BluesGrace }></Route>
          <Route path="/illustrations/4" exact component={ Whisperer }></Route>
        </section>

        {/* Footer */}
        <footer className={ styles.footer }>
          <div className={ styles.left }>
            <p>© 2021 by Jiayu Wen</p>
          </div>
          <div className={ styles.middle }>
            <p className={ styles.title }>email</p>
            <p>jiayuwaern@gmail.com</p>
          </div>
          <div className={ styles.right }>
            <p className={ styles.title }>Location</p>
            <p>Stockholm, Sweden</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default withRouter(App);
