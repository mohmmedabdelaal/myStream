import streams from '../apis';
import history from '../components/history';
import {
  SIGN_IN,
  SING_OUT,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
} from './types';

/// STREAMS FUNCTIONS
export const createStream = (formValue, userId) => async (dispatch) => {
  const response = await streams.post('/streams', { ...formValue, userId });
  dispatch({ type: CREATE_STREAM, payload: response.date });
  history('/');
};

export const fetchStreams = () => async (dispatch) => {
  const response = await streams.get('/streams');
  dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const fetchStream = (id) => async (dispatch) => {
  const response = await streams.get(`/streams/${id}`);
  dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const updateStream = (id, formValues) => async (dispatch) => {
  const response = await streams.patch(`/streams/${id}`, formValues);
  dispatch({ type: EDIT_STREAM, payload: response.data });
};

export const deleteStream = (id) => async (dispatch) => {
  await streams.delete(`/streams/${id}`);
  dispatch({ type: DELETE_STREAM, payload: id });
};

/// AUTH FUNCTIONS
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
