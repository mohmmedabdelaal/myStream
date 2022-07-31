import React, { useEffect } from 'react';
import Modal from '../UI/Modal';
import { useNavigate, useParams, useLocation, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet-async';

import { fetchStream, deleteStream } from '../../actions';

function DeleteStream(props) {
  const { id } = useParams();
  console.log(id);
  const navigation = useNavigate();
  const location = useLocation();

  useEffect(() => {
    props.fetchStream(id);
  }, [id]);

  const actionsBtn = (
    <>
      <button
        onClick={() => props.deleteStream(id)}
        className="ui negative button"
      >
        Delete
      </button>
      <Link to="/" className="ui button">
        Cancel
      </Link>
    </>
  );
  const renderContent = () => {
    if (!props.stream) {
      return 'Are you sure you want to delete the stream';
    }
    return `Are you sure you want to delete ${props.stream.title}`;
  };
  return (
    <div>
    <Helmet>
      <title>
        Delete {props.stream.title}
      </title>
    </Helmet>
      <Modal
        title="Delete this stream"
        content={renderContent()}
        actions={actionsBtn}
        onDismiss={() => navigation('/')}
      />
    </div>
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

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  DeleteStream
);
