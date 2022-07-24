import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';
import LoadingSpinner from '../UI/LoadingSpinner';
import { fetchStream, updateStream } from '../../actions';

function UpdateStream({ stream }) {
  const { id } = useParams();

  const location = useLocation();

  useEffect(() => {
    fetchStream(id);
  }, [id]);

  if (!stream) {
    return <LoadingSpinner />;
  }
  console.log(stream);
  return (
    <section>
      <div className="section-center">
        <div className="title">
          <h2>Edit Stream</h2>
          <div className="underline"></div>
        </div>
        <h1>{stream.title}</h1>
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
