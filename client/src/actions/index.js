import streams from '../apis';
import {
  SIGN_IN,
  SING_OUT,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
} from './types';
import {} from 'react-router-dom';

/// STREAMS FUNCTIONS
export const createStream = (fromValue) => async (dispatch) => {
  const response = streams.post('/streams', fromValue);
  dispatch({ type: CREATE_STREAM, payload: response.date });
};

const fetchStreams = (fromValue) => async (dispatch) => {
  const response = await streams.get('/streams', fromValue);
  dispatch({ type: FETCH_STREAMS, payload: response.data });
};

const fetchStream = (id) => async (dispatch) => {
  const response = await streams.get(`/streams/${id}`);
  dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const updateStream = (id, fromValue) => async (dispatch) => {
  const response = await streams.put(`/streams/${id}`, fromValue);
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
