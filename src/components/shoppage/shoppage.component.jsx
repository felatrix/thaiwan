import React from 'react'

import SHOP_DATA from './SHOP_DATA'
import PreviewCollection from '../previewCollections/previewCollections.component'

class ShopPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {collection:SHOP_DATA}
    }

    render() {
        const { collection } = this.state
        var delayTime = 1

        return (
            <div className="shopPage">
                {
                    
                    collection.map(({ id, ...otherCollection }) =>
                    {   
                        delayTime += 0.5
                        return (<PreviewCollection key={id} delayTime={delayTime} {...otherCollection} />)}
                    )
                }

            </div>
        )
    }
}

export default ShopPage