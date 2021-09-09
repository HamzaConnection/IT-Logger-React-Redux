import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import AddIcon from '@material-ui/icons/Add';

const AddBtn = () => {
  return (
    <div className="fixed-action-btn">
      <a
        href="#add-log-modal"
        className="btn-floating btn-large blue darken-2 modal-trigger"
      >
        <i>
          <AddIcon />
        </i>
      </a>
      <ul>
        <li>
          <a
            href="#tech-list-modal"
            className="btn-floating green modal-trigger"
          >
            <i>
              <PersonIcon />
            </i>
          </a>
        </li>
        <li>
          <a href="#add-tech-modal" className="btn-floating red modal-trigger">
            <i>
              <PersonAddIcon />
            </i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AddBtn;
