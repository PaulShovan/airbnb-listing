import React, {Component} from 'react'

import exploreItems from './ExploreItemsSeed'
import ExploreItem from './ExploreItem'

import listingSeed from "./ListingSeed"
import ListItem from "./ListItem"
import './style.css'


export default class AirbnbListingApp extends Component{
    state = {
        listItems: []
    }

    componentDidMount = () => {
        this.setState({
            listItems: listingSeed
        })
    }

    handleExploreItemFilter = (exploreItem) => {
        console.log(exploreItem);
        const filteredItems = listingSeed.filter(item => item.categories.indexOf(exploreItem) >= 0);
        
        this.setState({
            listItems: filteredItems
        })
    }

    render(){
        return (
            <div className="main ui text">
                <h1 className="ui dividing centered header">Airbnb Listings</h1>
                <div id="content">
                    <div>
                        <h1 className="ui header">Explore Miami</h1>
                    </div>
                    <div className='ui horizontal list'>
                        {exploreItems.map((exploreItem) =>
                            <ExploreItem
                                key={exploreItem.id}
                                item={exploreItem}
                                onClick={this.handleExploreItemFilter}
                            />
                        )}
                    </div>
                    <section className='container wrap'>
                        {this.state.listItems.map((listItem) =>
                            <ListItem
                                key={listItem.id}
                                item={listItem}
                            />
                        )}
                    </ section>

                </div>                
            </div>
        )
    }
}