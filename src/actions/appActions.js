import axios from 'axios';
import { actionTypes } from '../constants';

const { SET_LOADER } = actionTypes;

export const setLoader = (payload) => ({ type: SET_LOADER, payload });
