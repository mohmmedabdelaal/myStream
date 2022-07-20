import React from 'react';
import { Field, reduxForm } from 'redux-form';

function CreateStream() {
  const renderForm = ({ input, label }) => {
    console.log(input);
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
      </div>
    );
  };
  return (
    <section className="ui container">
      <div className="section-center">
        <form className="ui form">
          <Field name="title" component={renderForm} label="Enter title" />
          <Field
            name="description"
            component={renderForm}
            label="Enter description"
          />
        </form>
      </div>
    </section>
  );
}

export default reduxForm({ form: 'createStream' })(CreateStream);
