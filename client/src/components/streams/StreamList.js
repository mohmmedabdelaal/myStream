import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';
import Card from '../UI/Card';

function StreamList({ fetchStreams, streams }) {
  console.log(streams);
  useEffect(() => {
    fetchStreams();
    // eslint-disable-next-line
  }, []);
  console.log(fetchStreams);
  return (
    <section className="section">
      <div className="title">
        <h2>Streams</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center">
        {streams.map((stream) => {
          const { title, description, id } = stream;
          return (
            <Card key={id}>
              <i className="large middle aligned icon camera" />
              <div className="content">
                <h3>{title}</h3>
                <div className="description">
                  <h4>{description}</h4>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
