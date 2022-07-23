import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

function StreamList({ fetchStreams }) {
  console.log(fetchStreams);
  return <div>StreamList</div>;
}

// const mapStateToProps = (state) =>{
//   return {
//     state
//   }
// }

export default connect(null, { fetchStreams })(StreamList);
