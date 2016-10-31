import React from 'react';

export default function NotFound() {
  const styles = require('./notFound.scss');
  return (
     <div className={styles.notFound}>
      <span className={styles.error}>
        <h1>Oops!</h1>
        <h3>Wrong turn - nothing to see down this road</h3>
      </span>
      <img src="./cityStreet.jpg" alt="not found" />
    </div>
  );
}
