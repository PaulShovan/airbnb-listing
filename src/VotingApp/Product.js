import React, { Component } from 'react'

export default class Product extends Component{

    handleUpVote = () => (
        this.props.onVote(this.props.product.id)
    );

    render(){
        return (
            <div className='item'>
                <div className='image'>
                    <img src={this.props.product.productImageUrl} />
                </div>
                <div className='middle aligned content'>
                    <div className='header'>
                        <a onClick={this.handleUpVote}>
                            <i className='large caret up icon' />
                        </a>
                        {this.props.product.votes}
                    </div>
                    <div className='description'>
                        <a href={this.props.product.url}>
                            {this.props.product.title}
                        </a>
                        <p>
                            {this.props.product.description}
                        </p>
                    </div>
                    <div className='extra'>
                        <span>Submitted by:</span>
                        <img
                            className='ui avatar image'
                            src={this.props.product.submitterAvatarUrl}
                        />
                    </div>
                </div>
            </div>
        )
    }
}