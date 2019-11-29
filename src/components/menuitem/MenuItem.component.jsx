import React from 'react'

import './menu-item.styles.scss' //style homepage
import {withRouter} from 'react-router-dom'

const clickCat = (history,linkURL,match)=>{
    history.push(`${match.url}${linkURL}`)
}

const MenuItem = ({ title, imageURL , history ,linkURL,match,delayAnim}) => {
    console.log(match)
    console.log(delayAnim)
    return(
    <div className="menu-item"
    style={{animation: `slide-in-top 1.${delayAnim}s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`}}
        onClick={()=> clickCat(history,linkURL,match)}
    >
        <div className="backgroundItem" style={{
            backgroundImage: `url(${imageURL})`,
            backgroundSize: "cover"
        }}>

        </div>
        <div className="content">
            <h1 className="title">{title}</h1>
            <span className="subtitle">BELI</span>
        </div>
    </div>
)}

export default withRouter(MenuItem) 