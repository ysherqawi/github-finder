import React, { Fragment } from 'react';
import SpinnerGif from '../../assets/spinner.gif';

const Spinner = () => (
  <Fragment>
    <img
      src={SpinnerGif}
      alt='loading...'
      style={{ width: '128px', margin: 'auto', display: 'block' }}
    />
  </Fragment>
);

export default Spinner;
