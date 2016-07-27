import React, {Component, PropTypes} from 'react';

class DayCard extends Component {
    render() {
        return (
            <div className="ui card">
                <div className="content">
                    <div className="ui center aligned">{this.props.date.format("dddd")}</div>
                </div>
                <div className="content">
                    <h1 className="ui center aligned">{this.props.date.format("D")}</h1>
                </div>
            </div>
        );
    }
}

DayCard.propTypes = {
    date: PropTypes.object.isRequired
};

export default DayCard;