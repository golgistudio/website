import React, { Component } from 'react';
// import { Link } from 'react-router';
// import { CounterButton } from 'components';
import config from '../../config';
import Helmet from 'react-helmet';
import { Project } from 'components';

export default class Home extends Component {
  render() {
    const styles = require('./Home.scss');
    // require the logo image both from client and server
    // const logoImage = require('./logo.png');
    const sjProject = {
      title: 'San Jose Economic Indicators',
      screenshot: './sjeconomy-indicators.png',
      description: 'Collaboration with the San Jose office of Economic Development.  Built a configurable dashboard with drill down capabilities.',
      demoUrl: 'http://sjeconomy.com/indicators',
      srcUrl: 'https://github.com/codeforsanjose/economic-indicators-dashboard'
    };
    const csixProject = {
      title: 'CSIX Website',
      screenshot: './csix.png',
      description: '2015 Website redesign - Migrated existing site to new Wordpress platform.  Extended the custom theme through plugins and custom php and css. ',
      demoUrl: 'http://csix.org',
      srcUrl: ''
    };
    return (
      <div className={styles.home}>
        <Helmet title="Home"/>
        <div className={styles.masthead}>
          <div className="container">
            <h2>{config.app.description}</h2>

            <div className={styles.city}>
              <img src="./city-1117433_1280.png" />
            </div>
          </div>
        </div>

        <div className="container">
          <Project
            project={sjProject}
           />
           <div/>
          <Project
            project={csixProject}
           />
        </div>
      </div>
    );
  }
}
