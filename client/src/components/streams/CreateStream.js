import React from 'react';
import { Field, reduxForm } from 'redux-form';

function CreateStream(props) {
  const renderForm = ({ input, label }) => {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
      </div>
    );
  };

  const onSubmit = (formValue) => {
    console.log(formValue);
  };
  return (
    <section className="ui container">
      <div className="section-center">
        <form onSubmit={props.handleSubmit(onSubmit)} className="ui form">
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

export default reduxForm({ form: 'createStream' })(CreateStream);
