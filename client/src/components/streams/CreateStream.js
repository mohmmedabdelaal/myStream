import React from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import FormValues from './FormValues';
import { useAuth0 } from '@auth0/auth0-react';

function CreateStream(props) {
  const navigation = useNavigate();
  console.log(props);
  const { user } = useAuth0();
  const userId = typeof user === 'undefined' ? 'default' : user.sub;
  const onSubmit = (formValues) => {
    props.createStream(formValues, userId);
    navigation('/');
  };
  return (
    <section className="ui container">
      <div className="title">
        <h2>Create streams</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center">
        <FormValues onSubmit={onSubmit} />
      </div>
    </section>
  );
}

export default connect(null, { createStream })(CreateStream);
