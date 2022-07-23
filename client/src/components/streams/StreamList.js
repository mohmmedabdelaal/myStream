import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';
import Card from '../UI/Card';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

function StreamList({ fetchStreams, streams }) {
  const { user } = useAuth0();
  const x = typeof user === 'undefined' ? 'default' : user.sub;

  console.log(streams);
  useEffect(() => {
    fetchStreams();
    // eslint-disable-next-line
  }, []);
  console.log(fetchStreams);
  const userBtn = (
    <div style={{ float: 'right' }}>
      <button className="del-btn">Delete</button>
      <button className="edit-btn">Edit</button>
    </div>
  );
  return (
    <section className="section">
      <div className="title">
        <h2>Streams</h2>
        <div className="underline"></div>
      </div>
      <div className="ui celled list">
        {streams.map((stream) => {
          const { title, description, id, userId } = stream;
          return (
            <Card key={id}>
              {x === userId ? userBtn : null}
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
