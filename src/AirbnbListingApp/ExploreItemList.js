import React, { Component } from 'react'

import exploreItems from './ExploreItemsSeed'
import ExploreItem from './ExploreItem'

export default class ExploreItemList extends Component{
    render(){
        return(
            <div className='ui horizontal list'>
                {exploreItems.map((exploreItem) =>
                    <ExploreItem
                        key={exploreItem.id}
                        item={exploreItem}
                   />
                )}
            </div>
        )
    }
}