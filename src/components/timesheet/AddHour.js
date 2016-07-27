import React, {Component, PropTypes} from 'react'

class AddHour extends Component {
    constructor(props) {
        super(props);
        this.state = { hour: null };
        this.addHour = this.addHour.bind(this);
        this.onChangeInputHour = this.onChangeInputHour.bind(this);
        this.handleAddHourKeyPress = this.handleAddHourKeyPress.bind(this);
    }
    addHour() {
        this.props.addHour(this.state.hour);
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
        )
    }
}

AddHour.propTypes = {
    hour: PropTypes.number
};

export default AddHour;