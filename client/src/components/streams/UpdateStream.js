import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchStream, updateStream } from '../../actions';

let myId;

function UpdateStream(props) {
  const { id } = useParams();
  console.log(id);
  myId = id;
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
  console.log(myId);
  return {
    stream: state.streams[myId],
  };
};

export default connect(mapStateToProps, { fetchStream, updateStream })(
  UpdateStream
);

// export default UpdateStream;
