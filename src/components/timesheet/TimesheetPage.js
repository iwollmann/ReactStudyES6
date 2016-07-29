import React, {PropTypes} from 'react';
import moment from 'moment';
import ListHours from './ListHours';
import SummaryHours from './SummaryHours';
import AddHour from './AddHour';
import DayCard from './DayCard';
import update from 'react-addons-update';
import {connect} from 'react-redux';
import * as timesheetActions from '../../actions/timesheetActions';

class TimeSheetPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { today: moment() };
        this.addHour = this.addHour.bind(this);
        this.removeHour = this.removeHour.bind(this);
    }
    addHour(hour) {
        this.props.dispatch(timesheetActions.addHour(hour));
    }

    removeHour(hour){
        this.props.dispatch(timesheetActions.removeHour(hour));
    }

    render() {
        return (
            <div className="ui segment">
                <DayCard date={this.state.today} />
                <AddHour hours={this.props.hours} addHour={this.addHour} />
                <div className="ui divider"></div>
                <ListHours hours={this.props.hours} removeHour={this.removeHour} />
                <SummaryHours hours={this.props.hours} />
            </div>
        );
    }
}

TimeSheetPage.propTypes = {
    dispatch:PropTypes.func.isRequired,
    hours:PropTypes.array.isRequired
};

function mapStateToProps(state,ownProps){
    return {
        hours:state.hours
    };
}

export default connect(mapStateToProps)(TimeSheetPage);