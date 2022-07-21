import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions';

function CreateStream(props) {
  console.log(props);
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
    props.createStream(formValue);
  };
  return (
    <section className="ui container">
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
