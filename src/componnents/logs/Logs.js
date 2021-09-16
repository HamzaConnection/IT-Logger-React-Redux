import React, { useEffect } from 'react';
import LogItem from './LogItem';
import Preloader from '../layouts/Preloader';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLogs } from '../../actions/logActions';
const Logs = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  if (loading || logs === null) {
    return <Preloader />;
  }

  return (
    <div>
      <ul className="collection with-header">
        <li className="collection-header">
          <h4 className="center">Systems Logs</h4>
        </li>
        {!loading && logs.length === 0 ? (
          <p className="center"> No logs to show... </p>
        ) : (
          logs.map((log) => <LogItem log={log} key={log.id} />)
        )}
      </ul>
    </div>
  );
};

Logs.prototype = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  log: state.log, // state.log comes from out root reducer in /reducers/index.js
});
// connect() connects a React component to a Redux store
export default connect(mapStateToProps, { getLogs })(Logs);
