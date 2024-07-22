import React,{ Component } from "react";

export default class CustomInput extends Component{
    state = {
        text:""
    }

    componentDidUpdate(prevProps, prevState){
        if (prevState.text !== this.state.text) {
            this.props.onChange(this.props.name, this.state.text)
        }
    }

    handleChange=(e)=>{
        this.setState({
        text: e.target.value
        })
    }
    
render(){
    return(
        <div>
            <label htmlFor={this.props.label}>{this.props.label}</label>
            <input 
                id={this.props.label}
                type="text" 
                value={this.state.text}
                onChange={this.handleChange}
            />
        </div>
    )
}
}