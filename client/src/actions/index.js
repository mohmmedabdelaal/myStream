import streams from '../apis';
import { SIGN_IN, SING_OUT } from './types';

export const createStream = (formValue) => async (dispatch) => {
  streams.post('/streams', formValue);
};

export const SignIn = () => {
  return {
    type: SIGN_IN,
  };
};

export const signOut = () => {
  return {
    type: SING_OUT,
  };
};
