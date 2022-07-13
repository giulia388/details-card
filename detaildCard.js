import React from "react";

export class DetailsCard extends React.Component {

    constructor() {
        super();
    }

    render() {

        return (
            <>
                <div className="dc-container">

                    <div className="dc-container__header">
                        <h1>{this.props.titleP1} <span style={{ color:this.props.color}}>{this.props.titleP2}</span></h1>
                        <img src={this.props.icon} width={50} />
                    </div>

                    <div className="dc-container__description">
                       {this.props.description}
                    </div>
                </div>
            </>
        )

    }
}