import React from 'react';
import PropTypes from 'prop-types';
import DeleteIcon from '@material-ui/icons/Delete';
const TechItem = ({ tech }) => {
  return (
    <div>
      <li className="collection-item">
        <div>
          {tech.firstName}s {tech.lastName}
          <a href="#!" className="secondary-content">
            <DeleteIcon className="grey-text" />
          </a>
        </div>
      </li>
    </div>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
};

export default TechItem;
