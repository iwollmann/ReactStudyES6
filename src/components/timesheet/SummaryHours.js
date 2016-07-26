import React, {Component, PropTypes} from 'react';
import _ from 'lodash';

class SummaryHours extends Component {
    constructor(props) {
        super(props);
        this.balanceOfHours = this.balanceOfHours.bind(this);
        // var balanceClass = "ui big label";
    }
    balanceOfHours() {
        let balance = 0;
        if (this.props.hours.length >1 && this.props.hours.length % 2 == 0) {
            var pairs = _.chunk(this.props.hours,2);

            for (var index = 0; index < pairs.length; index++) {
                debugger;
                balance += pairs[index][1] - pairs[index][0];
            } 
        }

        var result = balance-8;

        // if (result > 0) {
        //     this.balanceClass += "green";
        // }else if (result < 0) {
        //     this.balanceClass += "red";
        // }else{
        //     this.balanceClass += "blue";
        // }

        return (result);
    }

    render() {
        return (
            <div className="ui big label">
                {this.balanceOfHours() }
            </div>
        )
    }
}

SummaryHours.propTypes = {
    hours: PropTypes.arrayOf(PropTypes.number).isRequired
}

export default SummaryHours    