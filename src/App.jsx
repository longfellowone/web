import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="container mx-auto">
        <div className="sm:flex">
          <div className="w-1/3" />
          <div className="sm:w-1/3">
            <div className="text-center py-4">List</div>
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
  }
}

export default App;
