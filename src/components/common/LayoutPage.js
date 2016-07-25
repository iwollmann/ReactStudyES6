import React from 'react';

class LayoutPage extends React.Component{
    render(){
        return(
            <div className="ui menu">
            <a className="active item" href="/">
                Home
            </a>
            <a className="item" href="/about">
                TimeSheet
            </a>
            <div className="right menu">
                <div className="item">
                <div className="ui icon input">
                    <input type="text" placeholder="Search..." />
                    <i className="search link icon"></i>
                </div>
                </div>
                <a className="ui item">
                Logout
                </a>
            </div>
            </div>
        );
    }
}

export default LayoutPage;