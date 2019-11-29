import React from 'react'
import './collection-collection.scss';
const CollectionItem = ({id,name,imageUrl,price,delay}) =>{
    return (
        <div className="collectionItem" style={{background:`url(${imageUrl})`,backgroundSize:`cover`,animation: `slide-in-top ${delay}s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`}}>
            <div className="collectionItemsContent">
                <div className="collectionDetail">
                <h3>{name}</h3>
                <p>Rp.{price},000</p>
                </div>
                <div className="buttonBuy">
                    <p>BUY NOW</p>
                </div>
            </div>
        </div>
    )
}

export default CollectionItem