import React, {Component} from 'react'

import './style.css'
import ProductList from './ProductList'


export default class VotingApp extends Component{
    render(){
        return (
            <div className="main ui text container">
                <h1 className="ui dividing centered header">Popular Products</h1>
                <div id="content">
                    <ProductList/>
                </div>
            </div>
        )
    }
}