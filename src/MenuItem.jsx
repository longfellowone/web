import React from 'react';
import PropTypes from 'prop-types';

const MenuItem = ({ items }) => (
  <div>
    <div className="bg-grey-light rounded p-2 mb-2">
      <div className="flex justify-between">
        <div>{items}</div>
        <div>Right</div>
      </div>
    </div>
    <div className="bg-grey-light rounded p-2 mb-2">
      <div className="flex justify-between">
        <div>Item 2</div>
        <div>Right</div>
      </div>
    </div>
    <div className="bg-grey-light rounded p-2 mb-2">
      <div className="flex justify-between">
        <div>Item 3</div>
        <div>Right</div>
      </div>
    </div>
    <div className="bg-grey-light rounded p-2 mb-2">
      <div className="flex justify-between">
        <div>Item 4</div>
        <div>Right</div>
      </div>
    </div>
  </div>
);

MenuItem.propTypes = {
  items: PropTypes.string.isRequired,
};

export default MenuItem;
