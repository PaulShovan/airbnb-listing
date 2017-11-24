import React, { Component } from 'react'

import seedProducts from './seed'
import Product from './Product'

export default class ProductList extends Component{
    state = {
        products: []
    }

    componentDidMount = () => {
        this.setState({
            products: seedProducts
        })
    }

    handleProductUpVote = (productId) => {
        const nextProducts = this.state.products.map((product) => {
            if (product.id === productId) {
                return Object.assign({}, product, {
                    votes: product.votes + 1,
                })
            } else {
                return product
            }
        })
        this.setState({
            products: nextProducts,
        })
    }

    render(){
        const products = this.state.products.sort((a, b) => (
            b.votes - a.votes
        ))

        return (
            <div className='ui unstackable items'>
                {products.map((product) =>
                    <Product
                        key={product.id}
                        product={product}
                        onVote={this.handleProductUpVote}
                    />
                )}
            </div>
        )
    }
}