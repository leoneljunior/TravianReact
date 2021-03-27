import React from 'react'

export class Distancia extends React.Component {
    render(){
        return (
            <div>{this.props.x} - {this.props.y}</div>
        );
    }
}