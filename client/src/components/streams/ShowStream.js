import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';
import LoadingSpinner from '../UI/LoadingSpinner';

function ShowStream(props) {
  const { id } = useParams();
  console.log(id);
  const { stream, fetchStream } = props;

  useEffect(() => {
    fetchStream(id);
  }, [id]);
  if (!stream) {
    return <LoadingSpinner />;
  }

  return (
    <section className="section">
      <div className="title">
        <h2>Stream Details</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center">
        <h1>{stream.title}</h1>
        <p>{stream.description}</p>
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

export default connect(mapStateToProps, { fetchStream })(ShowStream);
