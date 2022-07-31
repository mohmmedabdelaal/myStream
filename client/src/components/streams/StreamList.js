import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';
import Card from '../UI/Card';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

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
    <Helmet>
      <title>Streams</title>
    </Helmet>
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
                  <Link to={`/streams/delete/${id}`} className="del-btn">
                    <i className="ui icon trash"></i> Delete
                  </Link>
                </div>
              ) : null}
              <i className="large middle aligned icon camera" />
              <div className="content">
                <Link to={`/streams/${id}`}>
                  <h3>{title}</h3>
                </Link>
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
