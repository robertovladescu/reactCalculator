import React, {Component} from 'react';
import "../ComponentStyle/Display.css";

class Display extends Component {
    render(){
        return(
            <div className="Display">
                {this.props.data}
            </div>
        );
    }
}

export default Display;