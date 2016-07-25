import React, {PropTypes} from 'react';
import LayoutPage from './common/layoutpage';

class App extends React.Component{
    render(){
        return(
            <div>
            <LayoutPage />
            {this.props.children}
            </div>
        );
    }
}

App.propTypes ={
    children: PropTypes.object.isRequired
};

export default App;