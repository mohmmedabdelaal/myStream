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
              {x === userId ? (
                <div style={{ float: 'right' }}>
                  <Link to={`/streams/update/${id}`} className="edit-btn">
                    <i className="ui icon edit"></i>
                    Edit
                  </Link>
                  <button className="del-btn">
                    <i className="ui icon trash"></i> Delete
                  </button>
                </div>
              ) : null}
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
