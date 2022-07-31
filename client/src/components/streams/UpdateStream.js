import React, { useEffect } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import LoadingSpinner from '../UI/LoadingSpinner';
import FormValues from './StreamForm';
import { fetchStream, updateStream } from '../../actions';
import { Helmet } from 'react-helmet-async';

function UpdateStream({ stream, updateStream }) {
  const navigation = useNavigate();
  const { id } = useParams();

  const location = useLocation();

  useEffect(() => {
    fetchStream(id);
  }, [id]);

  const onSubmit = (formValue) => {
    updateStream(id, formValue);
    navigation('/');
  };
  if (!stream) {
    return <LoadingSpinner />;
  }

  return (
    <section>
      <Helmet>
        <title>Update {stream.title} stream</title>
      </Helmet>
      <div className="section-center">
        <div className="title">
          <h2>Edit Stream</h2>
          <div className="underline"></div>
        </div>
        <FormValues
          onSubmit={onSubmit}
          initialValues={_.pick(stream, 'title', 'description')}
        />
      </div>
    </section>
  );
}

const mapStateToProps = (state) => {
  // get id
  const path = window.location.pathname.split('/');
  const id = path[path.length - 1];

  return {
    stream: state.streams[id],
  };
};

export default connect(mapStateToProps, { fetchStream, updateStream })(
  UpdateStream
);

// export default UpdateStream;
