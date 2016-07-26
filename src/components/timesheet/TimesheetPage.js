import React from 'react';
import moment from 'moment';

class AboutPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { today: moment() };
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
                                    <input type="number" placeholder="00:00" />
                                </div>
                                <div className="field">
                                    <div className="ui button">Add</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutPage;