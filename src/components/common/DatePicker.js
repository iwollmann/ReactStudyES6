import Moment from 'moment-range';
import React from 'react';
import DateRangePicker from 'react-daterange-picker';

const stateDefinitions = {
  available: {
    color: null,
    label: 'Available'
  },
  enquire: {
    color: '#ffd200',
    label: 'Enquire'
  },
  unavailable: {
    selectable: false,
    color: '#78818b',
    label: 'Unavailable'
  }
};

const dateRanges = [];

class DatePicker extends React.Component{
  getInitialState() {
    return {
      value: null
    };
  }

  handleSelect(range, states) {
    // range is a moment-range object
    this.setState({
      value: range,
      states: states
    });
  }

  render() {
    return (
      <DateRangePicker
        firstOfWeek={1}
        numberOfCalendars={2}
        selectionType="range"
        minimumDate={new Date()}
        stateDefinitions={stateDefinitions}
        dateStates={dateRanges}
        defaultState="available"
        showLegend={true}
        value={this.state.value}
        onSelect={this.handleSelect} />
    );
  }
}


export default DatePicker;