import React from 'react'
import './preview-collections.scss'
import CollectionItem from '../collection-item/collectionItem.component'

const PreviewCollection = ({ id, title, items ,delayTime}) => {
     var prevdelayTime = delayTime
    return (
        <div className="previewCollection">
            <h2 className="title" >
                {title}
            </h2>
            <div className="preview">
                {
                    items.filter((id, indx) => indx < 4).map(item => {
                        prevdelayTime += 0.5
                        return (
                                <CollectionItem key={item.id} {...item} delay={prevdelayTime}/>
                        )
                    })
                }
            </div>

        </div>
    )

}

export default PreviewCollection