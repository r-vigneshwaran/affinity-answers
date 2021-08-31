/**
 * This Reducer contains the global state which holds keycloakuserInfo, userPermissions,
 * iframeUrl, loader, userSelectedRole, registeredPatient, toast, myProfile,
 * redirectTo Inforamtions dedicated for Authencitations, loading Function, Pop in and Pop out Toast, Roles, Force logout,
 * permissions, redirecting, register and verifying patients. Reducer takes initialState,
 * action type and payload as argument and returns the payload to state corresponding to action type
 * IMPORTANT:
 * Should return state as default in case of no action is produced
 */

import { actionTypes } from '../constants';
const { SET_PRODUCTS_LIST } = actionTypes;

const initialState = {
  productsList: null
};
export default function products(state = initialState, { type, payload }) {
  switch (type) {
    case SET_PRODUCTS_LIST:
      return { ...state, productsList: payload };
    default:
      return state;
  }
}
