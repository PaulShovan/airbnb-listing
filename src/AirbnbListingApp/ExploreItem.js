import React, { Component } from 'react'

export default class ExploreItem extends Component{
    handleExploreItemFilter = () => (
        this.props.onClick(this.props.item.name)
    );
    render(){
        return(
            <a onClick={this.handleExploreItemFilter} className='item'>
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