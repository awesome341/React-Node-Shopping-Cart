import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from "react-redux";

import { updateSort } from '../../store/actions/sortActions';

import Selectbox from '../Selectbox';

const sortBy = [
  { value: '',           label: 'Select'  },
  { value: 'lowestprice', label: 'Lowest to highest' },
  { value: 'highestprice', label: 'Highest to lowest' },
]

const sortGender = [
  { value: '',           label: 'Select'  },
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
]

class Sort extends Component {

  handleSort = (value) => {
    this.props.updateSort(value);
  }
    className;

  render() {
    return (
      <div className="sort">
         Gender:  <Selectbox options={sortGender} handleOnChange={this.handleSort} />
        Order by <Selectbox options={sortBy} handleOnChange={this.handleSort} />
      </div>
    );
  }
}

Sort.propTypes = {
  updateSort: PropTypes.func.isRequired,
  sort: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  sort: state.sort.item,
})

export default connect(mapStateToProps, { updateSort })(Sort);