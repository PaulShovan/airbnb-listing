import React, { Component } from 'react'

export default class ListItem extends Component{
    render(){
        return(
            <div className="list-item-container">
                <div className="list-item">
                    <img className="list-item-img" src={this.props.item.imageUrl} />
                </div>
                <div>
                    <div className="list-item-title">
                        <span styles={{color: 'rgb(217, 135, 94)'}}>
                            {this.props.item.title}
                        </span>
                    </div>
                    <div className="list-item-description">
                        {this.props.item.description}
                    </div>
                    <div className="list-item-price">
                        {this.props.item.price}
                    </div>
                </div>
            </div>
        )
    }
}