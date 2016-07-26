import React, {Component, PropTypes} from 'react'

class ListHours extends Component {
    render () {
        function renderHours(hour) {
            return(
                <div key={hour} className="item">
                    {hour}
                </div>
            )
        }
        return (
            <div className="ui list">
                {this.props.hours.map(renderHours, this)}
            </div>
        )
    }
}

ListHours.propTypes = {
    hours:PropTypes.arrayOf(PropTypes.number).isRequired
}

export default ListHours