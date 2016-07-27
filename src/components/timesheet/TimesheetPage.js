import React from 'react';
import moment from 'moment';
import ListHours from './ListHours';
import SummaryHours from './SummaryHours';
import AddHour from './AddHour';
import DayCard from './DayCard';
import update from 'react-addons-update';

class AboutPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { today: moment(), hours: [] };
        this.addHour = this.addHour.bind(this);
        this.removeHour = this.removeHour.bind(this);
    }
    addHour(hour) {
        this.setState({ hours: [...this.state.hours, hour] });
    }

    removeHour(hour){
        let index = this.state.hours.indexOf(hour);
        this.setState({hours: update(this.state.hours,{$splice: [[index, 1]]})});
    }

    render() {
        return (
            <div className="ui segment">
                <DayCard date={this.state.today} />
                <AddHour hours={this.state.hours} addHour={this.addHour} />
                <div className="ui divider"></div>
                <ListHours hours={this.state.hours} removeHour={this.removeHour} />
                <SummaryHours hours={this.state.hours} />
            </div>
        );
    }
}

export default AboutPage;