import React from "react";

export class Square extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="square">
                <p>{this.props.title}</p>
            </div>
        )
    }
}