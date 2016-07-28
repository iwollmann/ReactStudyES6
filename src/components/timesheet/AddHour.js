import React, {Component, PropTypes} from 'react';

class AddHour extends Component {
    constructor(props) {
        super(props);
        this.addHour = this.addHour.bind(this);
        this.handleAddHourKeyPress = this.handleAddHourKeyPress.bind(this);
    }
    addHour() {
        if (this._addHourInput.value)
            this.props.addHour(this._addHourInput.value);
        
        this._addHourInput.value = null;
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
                                <input type="number" 
                                    min="0" 
                                    max="23" 
                                    onKeyPress={this.handleAddHourKeyPress} 
                                    placeholder="00:00" 
                                    ref={(c) => this._addHourInput = c}
                                    />
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