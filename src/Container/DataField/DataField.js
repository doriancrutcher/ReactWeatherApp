import React, { Component } from 'react';
import './DataField.css'

class DataField extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <React.Fragment>
            <div className="DataTitle">Location</div>
            <div className="CityDisplay">
                {this.props.Location}
            </div>
            <div className="DataTitle">Temperature</div>

            <div className="TempDisplay">
                {this.props.Temperature}
            </div>
            </React.Fragment>
        );
    }
}

export default DataField;