import React, { Component } from 'react';
import './SearchOptions.css';
import StateSelect from '../StateSelect/StateSelect';

class SearchOptions extends Component {
  render() {
    const { handleSelectState } = this.props;
    return (
      <div className="search__page">
        <form className="search__bar" onChange={handleSelectState}>
          <div className="search__by__state search__items">
            <label htmlFor="search__by__state">Search by State</label>
            <select
              name="state"
              id="search__by__state"
              className="state__dropdown"
              form="search__bar"
            >
              <StateSelect />
            </select>
          </div>
          <div className="select__services search__items">
            <label htmlFor="select__services">Filter by Service</label>
            <select
              name="services"
              id="select__services"
              className="service__dropdown"
              form="search__bar"
            >
              <option value="">Select service</option>
              <option value="sensory_hours">Sensory hours</option>
              <option value="scissor_cuts">Scissor cuts</option>
              <option value="long_apt">Longer appointments </option>
              <option value="home_cuts">Home haircuts</option>
            </select>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchOptions;
