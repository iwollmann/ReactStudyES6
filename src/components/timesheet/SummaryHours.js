import React, {Component, PropTypes} from 'react';
import _ from 'lodash';
import classNames from 'classnames';

class SummaryHours extends Component {
    constructor(props) {
        super(props);
        this.state = { summary: 0 };
    }

    componentWillReceiveProps(nextProps) {
        this.balanceOfHours(nextProps.hours);
    }

    balanceOfHours(hours) {
        let balance = 0;
        if (hours.length > 1 && hours.length % 2 == 0) {
            let pairs = _.chunk(hours, 2);

            for (let index = 0; index < pairs.length; index++) {
                balance += pairs[index][1] - pairs[index][0];
            }

            balance += -8;
            this.setState({ summary: balance });
        }
    }

    render() {
        let balanceClass = classNames({
            'ui big blue label': this.state.summary == 0,
            'ui big green label': this.state.summary > 0,
            'ui big red label': this.state.summary < 0
        });

        return (
            <div className={balanceClass}>
                {this.state.summary}
            </div>
        );
    }
}

SummaryHours.propTypes = {
    hours: PropTypes.arrayOf(PropTypes.string).isRequired,
    summary: PropTypes.number
};

export default SummaryHours;  