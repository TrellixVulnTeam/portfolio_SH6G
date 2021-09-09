import logo from './logo.svg';
import styles from './App.module.scss';
import { Link, Route, withRouter} from "react-router-dom";
import Homepage from "./Homepage";
import Resume from "./Resume";
import Codings from "./Codings";
import Design from "./Design";
import Designs from "./Designs";
import Illustration from "./Illustration";
import Illustrations from "./Illustrations";
import { render } from '@testing-library/react';
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
              <Link to="/" className={location.pathname==="/" ? styles.selected  : null }><p>about me</p></Link>
              <Link to="/resume" className={location.pathname==="/resume" ? styles.selected  : null }><p>resume</p></Link>
              <Link to="/codings" className={location.pathname==="/codings" ? styles.selected  : null }><p>coding</p></Link>
              <Link to="/designs" className={location.pathname==="/designs" ? styles.selected  : null }><p>design</p></Link>
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
          <Route path="/designs/:id" exact component={ Design }></Route>
          <Route path="/illustrations" exact component={ Illustrations }></Route>
          <Route path="/illustrations/:id" exact component={ Illustration }></Route>
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
