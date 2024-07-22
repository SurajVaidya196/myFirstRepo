import React,{ Component } from "react";
import CustomInput from "../component/CustomInput";

export default class Registration extends Component{
    state = {
        firstName:''
    }
render(){
    return(
        <div>
            APP
            <CustomInput label="first name" onChange={this.handleChange}/>
        </div>
    )
}
}