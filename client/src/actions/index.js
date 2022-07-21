import streams from '../apis';
import { SIGN_IN, SING_OUT, CREATE_STREAM } from './types';

export const createStream = (fromValue) => async (dispatch) => {
  const response = streams.post('/streams', fromValue);
  dispatch({ type: CREATE_STREAM, payload: response.date });
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
