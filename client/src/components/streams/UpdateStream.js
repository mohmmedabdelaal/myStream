import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStream, updateStream } from '../../actions';

function UpdateStream(props) {
  console.log(props);
  useEffect(() => {
    fetchStream();
  }, []);

  return (
    <section>
      <div className="section-center">
        <div className="title">
          <h2>Edit Stream</h2>
          <div className="underline"></div>
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return {
    stream: state.streams,
  };
};

export default connect(mapStateToProps, { fetchStream, updateStream })(
  UpdateStream
);
