// @flow
import { compose } from 'redux';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../store';
import withContext from './withContext';

export default compose(withRedux(initStore), withContext);
