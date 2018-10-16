import React, { Component } from 'react'
import styles from './header.module.scss';
import { Link } from 'react-router-dom';
import Auth from '../../Auth';

export default class Header extends Component {

  handleLogin = () => {
    Auth.login();
  }

  handleLogout = () => {
    Auth.logout();
  }

  render() {
    const actionButton =
     Auth.isAuthenticated()
     ? (<button className={`${ styles.link } ${ styles.btnLink}`} onClick={ this.handleLogout }>Log Out</button>)
     : (<button className={`${ styles.link } ${ styles.btnLink}`} onClick={ this.handleLogin }>Log In</button>);
    return (
      <header className={ styles.header }>
        <h1 className={ styles.brand }>My Auth0 App</h1>
        <nav>
          <Link className={ styles.link } to="/">Home</Link>
          <Link className={ styles.link } to="/profile">Profile</Link>
          { actionButton }
        </nav>
      </header>
    )
  }
}
