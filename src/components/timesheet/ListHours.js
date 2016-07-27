import React, {Component, PropTypes} from 'react';

class ListHours extends Component {
     constructor(props) {
        super(props);
        this.removeHour = this.removeHour.bind(this);
    }
    removeHour(hour) {
        this.props.removeHour(hour);
    }
    render() {
        function renderHours(hour) {
            return (
                <div key={hour} className="four wide item">
                    <div className="right floated content">
                        <i className="delete medium red icon" onClick={(event) => this.removeHour(hour, event)}></i>
                    </div>
                    <div className="content">
                        {hour}
                    </div>
                </div>
            );
        }
        return (
            <div className="ui middle aligned selection four wide list">
                {this.props.hours.map(renderHours, this) }
            </div>
        );
    }
}

ListHours.propTypes = {
    hours: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default ListHours;