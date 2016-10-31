import React, {Component, PropTypes} from 'react';
// import {bindActionCreators} from 'redux';
// import {connect} from 'react-redux';
import lodash from 'lodash';

export default class Project extends Component {
  static propTypes = {
    project: PropTypes.object
  }

  render() {
    const {project} = this.props; // eslint-disable-line no-shadow
    const styles = require('./Project.scss');

    let src = '';

    if ((lodash.trim(project.srcUrl)).length > 0) {
      src = (<div className={styles.projectSrc}>
                    <a href={project.srcUrl} target="_blank">
                      Github
                    </a>
                  </div>);
    }

    let demo = '';

    if ((lodash.trim(project.demoUrl)).length > 0) {
      demo = (<div className={styles.projectSrc}>
              <a href={project.demoUrl} target="_blank">
                Demo
              </a>
            </div>);
    }

    return (
      <div className={styles.project}>
        <div className={styles.projectInfo}>
          <div className={styles.projectTitle}>
             {project.title}
          </div>
          <div className={styles.projectDescription}>
            {project.description}
          </div>
          <div className={styles.projectLinkGroup}>
           {demo}
           {src}
          </div>
        </div>
        <div className={styles.projectScreenshot}>
          <img src={project.screenshot} alt={project.alt} />
        </div>
      </div>
    );
  }
}
