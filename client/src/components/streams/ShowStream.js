import React, { useEffect, createRef } from 'react';
import flv from 'flv.js';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';
import LoadingSpinner from '../UI/LoadingSpinner';
import Card from '../UI/Card';

function ShowStream(props) {
  const { id } = useParams();
  const videoRef = createRef();
  console.log(flv);

  const { stream, fetchStream } = props;

  const buildPlayer = () => {
    if (flvPlayer || !stream) {
      return;
    }
    var flvPlayer = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${id}.flv`,
    });
    flvPlayer.attachMediaElement(videoRef.current);
    flvPlayer.load();
  };

  useEffect(() => {
    fetchStream(id);
    buildPlayer();
  }, []);

  // useEffect(buildPlayer(), []);

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
        <video ref={videoRef} style={{ width: '100%' }} controls />
        <Card>
          <h1>{stream.title}</h1>
          <p>{stream.description}</p>
        </Card>
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
