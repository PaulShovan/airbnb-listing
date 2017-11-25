import React, {Component} from 'react'
import ExploreItemList from "./ExploreItemList"
import './style.css'


export default class AirbnbListingApp extends Component{
    render(){
        return (
            <div className="main ui text">
                <h1 className="ui dividing centered header">Airbnb Listings</h1>
                <div id="content">
                    <div>
                        <h1 className="ui header">Explore Miami</h1>
                    </div>
                    <ExploreItemList />
                </div>                
            </div>
        )
    }
}