import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Auth from '../../Auth';

import styles from './profile.module.scss';
export default class Profile extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }

  componentWillMount = () => {
    const profile = Auth.getProfile();
    this.setState({ profile });
  }

  state = {
    profile: {
      email: '',
      picture: '',
    }
  }

  render() {
    const { profile: { email, nickname, picture } } = this.state;

    return (
      <div className={ styles.pageContainer} >
      <p>You are on the profile route.</p>

      <div className={ styles.profileCard }>
        <img src={picture} alt="user avatar" className={ styles.avatar } />
        <div className={ styles.details }>
        <ul>
          <li>Email: { email }</li>
          <li>Username: { nickname }</li>
        </ul>
        </div>
      </div>
    </div>
    )
  }
}
