import React, { Component } from 'react'

export default class ExploreItem extends Component{
    render(){
        return(
            <a className='item'>
                <div className='image'>
                    <img width="80" src={this.props.item.imageUrl} />
                </div>
                <div className='middle aligned content'>
                    <div className='header'>
                        {this.props.item.name}
                    </div>
                </div>
            </a>
        )
    }
}