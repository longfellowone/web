import React from 'react';
// import PropTypes from 'prop-types';
import Menu from './Menu';

const App = () => (
  <div className="container mx-auto">
    <div className="sm:flex">
      <div className="w-1/3" />
      <div className="sm:w-1/3">
        <Menu />
      </div>
      <div className="w-1/3" />
    </div>
  </div>
);

// App.propTypes = {
//   title: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
// };

export default App;
