import React, { Component } from 'react';
import './SearchOptions.css';
import StateSelect from '../StateSelect/StateSelect';

class SearchOptions extends Component {
  render() {
    const { handleSelectState, handleSelectService } = this.props;
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
        </form>
        <form className="service__select" onChange={handleSelectService}>
          <div className="select__services search__items">
            <label htmlFor="select__services">Filter by Service</label>
            <select
              name="services"
              id="select__services"
              className="service__dropdown"
              form="search__bar"
            >
              <option value="">Select service</option>
              <option value="Sensory Hours">Sensory hours</option>
              <option value="Scissor Cuts">Scissor cuts</option>
              <option value="Longer Appointments">Longer appointments </option>
              <option value="Home Haircuts">Home haircuts</option>
            </select>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchOptions;
