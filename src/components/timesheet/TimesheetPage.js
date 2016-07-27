import React from 'react';
import moment from 'moment';
import ListHours from './ListHours';
import SummaryHours from './SummaryHours';

class AboutPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { today: moment(), hours: [], hour: null };
        this.addHour = this.addHour.bind(this);
        this.onChangeInputHour = this.onChangeInputHour.bind(this);
        this.handleAddHourKeyPress = this.handleAddHourKeyPress.bind(this);
    }
    addHour() {
        this.setState({ hours: [...this.state.hours, this.state.hour] });
    }
    onChangeInputHour(event) {
        this.setState({ hour: event.target.value });
    }
    handleAddHourKeyPress(event) {
        if (event.key == 'Enter') {
            this.addHour();
        }
    }

    render() {
        return (
            <div className="ui segment">
                <div className="ui card">
                    <div className="content">
                        <div className="ui center aligned">{this.state.today.format("dddd")}</div>
                    </div>
                    <div className="content">
                        <h1 className="ui center aligned">{this.state.today.format("D")}</h1>
                    </div>
                </div>
                <div className="ui form">
                    <div className="fields">
                        <div className="six wide field">
                            <label>Hora</label>
                            <div className="fields">
                                <div className="twelve wide field">
                                    <input type="number" min="0" max="23" onChange={this.onChangeInputHour} onKeyPress={this.handleAddHourKeyPress} placeholder="00:00" />
                                </div>
                                <div className="field">
                                    <div className="ui button" onClick={this.addHour}>Add</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ui divider"></div>
                <ListHours  hours={this.state.hours}/>
                <SummaryHours hours={this.state.hours} />
            </div>
        );
    }
}

export default AboutPage;