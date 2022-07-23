import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import { useAuth0 } from '@auth0/auth0-react';

function CreateStream(props) {
  const { user } = useAuth0();
  // const [myUser, setMyUser] = useState('');
  const x = typeof user === 'undefined' ? 'default' : user.sub;
  // setMyUser(theUser);

  // setMyUser(user);

  // console.log(x);

  const renderError = ({ touched, error }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };

  const renderForm = ({ input, meta, label }) => {
    const { touched, error } = meta;
    const classNamed = `field ${touched && error ? 'error' : ''}`;
    return (
      <div className={classNamed}>
        <label>{label}</label>
        <input {...input} />
        <div>{renderError(meta)}</div>
      </div>
    );
  };

  const onSubmit = (formValue) => {
    props.createStream(formValue, x);
  };
  return (
    <section className="ui container">
      <div className="title">
        <h2>Create streams</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center">
        <form onSubmit={props.handleSubmit(onSubmit)} className="ui form error">
          <Field name="title" component={renderForm} label="Enter title" />
          <Field
            name="description"
            component={renderForm}
            label="Enter description"
          />
          <button className="ui primary button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

const validate = (formValue) => {
  const errors = {};
  if (!formValue.title) {
    errors.title = 'Please enter valid title';
  }
  if (!formValue.description) {
    errors.description = 'Please enter valid description';
  }
  return errors;
};

// const mapToStateProps = (state) => {
//   return {};
// };

const formWrapped = reduxForm({ form: 'createStream', validate })(CreateStream);

export default connect(null, { createStream })(formWrapped);
