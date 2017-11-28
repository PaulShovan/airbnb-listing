import React, {Component} from 'react'

import exploreItems from './ExploreItemsSeed'
import ExploreItem from './ExploreItem'

import listingSeed from "./ListingSeed"
import ListItem from "./ListItem"
import CategorizedList from "./CategorizedList"
import './style.css'

Object.defineProperty(Array.prototype, 'group', {
    enumerable: false,
    value: function (key) {
      var map = {};
      this.forEach(function (e) {
        var k = key(e);
        map[k] = map[k] || [];
        map[k].push(e);
      });
      return Object.keys(map).map(function (k) {
        return {title: k, data: map[k]};
      });
    }
  });

export default class AirbnbListingApp extends Component{

    state = {
        listItems: [],
        categorizedItems: [],
        filtered: false
    }

    componentDidMount = () => {
        this.setState({
            listItems: listingSeed,
            filtered: false,
            categorizedItems: listingSeed.group(function (item) {
                return item.section;
              })
        })
    }

    handleExploreItemFilter = (exploreItem) => {
        if(exploreItem == 'All'){
            this.setState({
                listItems: listingSeed,
                filtered: false,
                categorizedItems: listingSeed.group(function (item) {
                    return item.section;
                  })
            })
        }
        else{
            const filteredItems = listingSeed.filter(item => item.categories.indexOf(exploreItem) >= 0);
            this.setState({
                listItems: filteredItems,
                filtered: true
            })
        }
    }

    render(){
        var list;
        if(this.state.filtered){
            list = <section className='container wrap'>
                        {this.state.listItems.map((listItem) =>
                            <ListItem
                                key={listItem.id}
                                item={listItem}
                            />
                        )}
                    </ section>
        }
        else{
            list = <div>
                        {this.state.categorizedItems.map((listItem) =>
                            <CategorizedList
                                key={listItem.title}
                                title={listItem.title}
                                item={listItem.data}
                            />
                        )}
                    </div>
        }
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
                    {list}
                </div>                
            </div>
        )
    }
}