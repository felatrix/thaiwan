import React, { Component } from 'react'

import './directory-menu.styles.scss'
import DATA_SECTION from './DATA_SECTION'
import MenuItem from '../menuitem/MenuItem.component' //component menu item

class DirectoryMenu extends Component {
    constructor() {
        super()

        this.state = DATA_SECTION
    }
    render() {
        var delayAnim = 0;
        return (
            <div className="directory-menu">
                {   
                    this.state.itemSections.map(
                        ({ id, title, imgURL ,linkURL}) => {
                            delayAnim += 5
                            return (<MenuItem key={id} title={title} imageURL={imgURL} linkURL={linkURL} delayAnim={delayAnim}/>
                        )}
                    )
                }
            </div>
        )
    }
}

export default DirectoryMenu