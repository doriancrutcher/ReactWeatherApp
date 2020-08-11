import React, { Component } from 'react';

class Input extends Component {
    constructor(props){
        super(props)
        this.InputRef=React.createRef()
    }

    SendSearch=(e)=>{
        if(e.keyCode===13){
            this.props.WeSearch(e.target.value)
        }
        }

    render() {


        return (
            <div>
                <input  onKeyDown={this.SendSearch} ref={this.InputRef} type="text" placeholder='Search By City...'></input>
            </div>
        );
    }
}

export default Input;