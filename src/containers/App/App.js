import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { IndexLink } from 'react-router';
// import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Helmet from 'react-helmet';
import { isLoaded as isInfoLoaded, load as loadInfo } from 'redux/modules/info';
import { isLoaded as isAuthLoaded, load as loadAuth, logout } from 'redux/modules/auth';
// import { InfoBar } from 'components';
import { push } from 'react-router-redux';
import config from '../../config';
import { asyncConnect } from 'redux-async-connect';

@asyncConnect([{
  promise: ({store: {dispatch, getState}}) => {
    const promises = [];

    if (!isInfoLoaded(getState())) {
      promises.push(dispatch(loadInfo()));
    }
    if (!isAuthLoaded(getState())) {
      promises.push(dispatch(loadAuth()));
    }

    return Promise.all(promises);
  }
}])
@connect(
  state => ({user: state.auth.user}),
  {logout, pushState: push})
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    user: PropTypes.object,
    logout: PropTypes.func.isRequired,
    pushState: PropTypes.func.isRequired
  };

  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  componentWillReceiveProps(nextProps) {
    if (!this.props.user && nextProps.user) {
      // login
      this.props.pushState('/loginSuccess');
    } else if (this.props.user && !nextProps.user) {
      // logout
      this.props.pushState('/');
    }
  }

  handleLogout = (event) => {
    event.preventDefault();
    this.props.logout();
  };

  render() {
    const {user} = this.props;
    const styles = require('./App.scss');

    return (
      <div className={styles.app}>
        <Helmet {...config.app.head}/>
        <Navbar fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <IndexLink to="/" activeStyle={{color: '#000'}}>
                <div className={styles.brand}/>
                <span>{config.app.title}</span>
              </IndexLink>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>

          <Navbar.Collapse eventKey={0}>
            <Nav navbar />
            {user &&
            <p className={styles.loggedInMessage + ' navbar-text'}>Logged in as <strong>{user.name}</strong>.</p>}
            <Nav navbar pullRight>
              <NavItem eventKey={1} target="_blank" title="View on Github" href="https://github.com/golgistudio">
                <i className="fa fa-github"/>
              </NavItem>
              <NavItem eventKey={2} target="_blank" title="LinkedIn" href="https://www.linkedin.com/in/lauriesreynolds">
                <i className="fa fa-linkedin"/>
              </NavItem>
              <NavItem eventKey={3} title="Contact Laurie" href="mailto:lauriesreynolds@gmail.com?Subject=Golgi%20Studio%20inquiry">
                <i className="fa fa-envelope-o"/>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div className={styles.appContent}>
          {this.props.children}
        </div>

        <footer className="footer">
          <div className="text-center">
            <span className="fa fa-copyright"> 2016
              <a href="mailto:lauriesreynolds@gmail.com?Subject=Golgi%20Studio%20inquiry" target="_top"> Laurie Reynolds</a>
            </span>
          </div>
       </footer>
      </div>
    );
  }
}

  // {user && <LinkContainer to="/chat">
  //               <NavItem eventKey={1}>Chat</NavItem>
  //             </LinkContainer>}

  //             <LinkContainer to="/widgets">
  //               <NavItem eventKey={2}>Widgets</NavItem>
  //             </LinkContainer>
  //             <LinkContainer to="/survey">
  //               <NavItem eventKey={3}>Survey</NavItem>
  //             </LinkContainer>
  //             <LinkContainer to="/about">
  //               <NavItem eventKey={4}>About Us</NavItem>
  //             </LinkContainer>

  //             {!user &&
  //             <LinkContainer to="/login">
  //               <NavItem eventKey={5}>Login</NavItem>
  //             </LinkContainer>}
  //             {user &&
  //             <LinkContainer to="/logout">
  //               <NavItem eventKey={6} className="logout-link" onClick={this.handleLogout}>
  //                 Logout
  //               </NavItem>
  //             </LinkContainer>}
