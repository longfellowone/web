import React from 'react';
import PropTypes from 'prop-types';

const App = ({ name, title }) => (
  <div className="container mx-auto">
    <div className="sm:flex">
      <div className="w-1/3" />
      <div className="sm:w-1/3">
        <div className="text-center py-4">
          {name}`s {title}
        </div>
        <div className="sm:mx-0 mx-3">
          <div className="bg-green rounded p-2 my-1">Item 1</div>
          <div className="bg-green rounded p-2 my-1">Item 2</div>
          <div className="bg-green rounded p-2 my-1">Item 3</div>
          <div className="bg-green rounded p-2 my-1">Item 4</div>
          <input className="bg-grey-light rounded p-2 w-full" />
        </div>
      </div>
      <div className="w-1/3" />
    </div>
  </div>
);

App.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default App;
