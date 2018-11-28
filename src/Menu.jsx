import React, { Component } from 'react';
import MenuItem from './MenuItem';

class Menu extends Component {
  constructor() {
    super();

    this.state = {
      items: 'Item 1',
    };

    this.formSubmitted = this.formSubmitted.bind(this);
  }

  formSubmitted = e => {
    e.preventDefault();
    console.log(e);
  };

  // formSubmitted(event) {
  //   event.preventDefault();
  //   console.log(event);
  // }

  render() {
    const { items } = this.state;

    return (
      <div className="bg-blue p-2 rounded mt-2">
        <MenuItem items={items} />
        <form onSubmit={e => this.formSubmitted(e)}>
          <input
            className="bg-grey-light rounded p-2 w-full mb-2"
            placeholder="New Item..."
          />
          <button type="submit" className="bg-grey-light rounded p-2 w-full">
            Add new item
          </button>
        </form>
      </div>
    );
  }
}

export default Menu;
