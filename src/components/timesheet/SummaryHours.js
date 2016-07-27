import React, {Component, PropTypes} from 'react';
import _ from 'lodash';
import classNames from 'classnames';

class SummaryHours extends Component {
    constructor(props) {
        super(props);
        this.state = { summary: 0 };
    }

    componentDidUpdate() { 
        this.balanceOfHours();
    }

    balanceOfHours() {
        let balance = 0;
        if (this.props.hours.length >1 && this.props.hours.length % 2 == 0) {
            var pairs = _.chunk(this.props.hours,2);

            for (var index = 0; index < pairs.length; index++) {
                balance += pairs[index][1] - pairs[index][0];
            }

            balance += -8;
            this.setState({summary:balance});
        }
    }

    render() {
         var balanceClass = classNames({
                'ui big blue label' : this.state.summary == 0,
                'ui big green label' : this.state.summary > 0,
                'ui big red label' : this.state.summary < 0
            });

        return (
            <div className={balanceClass}>
                {this.state.summary}
            </div>
        )
    }
}

SummaryHours.propTypes = {
    hours: PropTypes.arrayOf(PropTypes.number).isRequired,
    summary: PropTypes.number
}

export default SummaryHours    