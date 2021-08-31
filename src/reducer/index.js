/**
 * We can Store, Retrieve, Edit and Delete states in this reducers.
 * Here Combining all Reducers into a single object
 */

import { combineReducers } from 'redux';
import app from './app';

export default combineReducers({
  app
});
