import React from 'react';
import moment from 'moment';
import ListHours from './ListHours';

class AboutPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { today: moment(), hours: [], hour: null };
        this.handleClick =this.handleClick.bind(this);
        this.onChangeInputHour = this.onChangeInputHour.bind(this);
    }
    handleClick() {
        this.setState({ hours: [...this.state.hours, this.state.hour] });
    }
    onChangeInputHour(event) {
        this.setState({ hour: event.target.value });
    }

    render() {
        return (
            <div className="ui segment">
                <div className="ui card">
                    <div className="content">
                        <div className="ui center aligned">{this.state.today.format("dddd") }</div>
                    </div>
                    <div className="content">
                        <h1 className="ui center aligned">{this.state.today.format("D") }</h1>
                    </div>
                </div>
                <div className="ui form">
                    <div className="fields">
                        <div className="field">
                            <label>Hora</label>
                            <div className="two fields">
                                <div className="field">
                                    <input type="number" onChange={this.onChangeInputHour} placeholder="00:00" />
                                </div>
                                <div className="field">
                                    <div className="ui button" onClick={this.handleClick}>Add</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ui divider"></div>
                <ListHours  hours={this.state.hours}/>
            </div>
        );
    }
}

export default AboutPage;