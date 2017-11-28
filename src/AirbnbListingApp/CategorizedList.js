import React, {Component} from 'react'
import ListItem from "./ListItem"

export default class CategorizedList extends Component{
    render(){
        return(
            <div>
                <div className="Header">
                    <h3>{this.props.title}</h3>
                </div>
                <section className='container wrap'>
                    {this.props.item.map((listItem) =>
                        <ListItem
                            key={listItem.id}
                            item={listItem}
                        />
                    )}
                </section>
            </div>
        )
    }
}