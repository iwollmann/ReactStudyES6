import React, {Component, PropTypes} from 'react';
import _ from 'lodash';
import classNames from 'classnames';

class SummaryHours extends Component {
    constructor(props) {
        super(props);
    }

    balanceOfHours() {
        let balance = 0;
        if (this.props.hours.length > 1 && this.props.hours.length % 2 == 0) {
            let pairs = _.chunk(this.props.hours, 2);

            for (let index = 0; index < pairs.length; index++) {
                balance += pairs[index][1] - pairs[index][0];
            }

            return balance += -8;
        }
    }

    render() {
        let summary = this.balanceOfHours();
        let balanceClass = classNames({
            'ui big blue label': summary == 0,
            'ui big green label': summary > 0,
            'ui big red label': summary < 0
        });

        return (
            <div className={balanceClass}>
                {summary}
            </div>
        );
    }
}

SummaryHours.propTypes = {
    hours: PropTypes.arrayOf(PropTypes.string).isRequired
};
SummaryHours.defaultProps ={
    hours:[]
}

export default SummaryHours;  