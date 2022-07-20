import { SIGN_IN, SING_OUT } from './types';

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
