import React, { useContext } from 'react'
import {shopCtx} from './App';
import cellicon from './assets/cellicon.png'

function Card() {
//    setCount((count) => count + 1);
console.log(useContext(shopCtx));
const { addQty, removeQty, removeItem, ele } = useContext(shopCtx);

    return (
        <div className="row border-top border-bottom">
            <div className="row main align-items-center">
                <div className="col-2"><img className="img-fluid" src={cellicon} /></div>
                <div className="col">
                    <div className="row text-muted">{ele.brand}</div>
                    <div className="row">{ele.title}</div>
                </div>
                <div className="col">
                    <button onClick={()=>removeQty(ele)}>-</button><a className="border">{ele.quantity}</a><button onClick={()=>addQty(ele)}>+</button>
                </div>
                <div className="col">Rs. {ele.price * ele.quantity} <button className="close" onClick={()=>removeItem(ele)}>&#10005;</button></div>
            </div>
            <div className="row main align-items-center">
                <div className="col-2" />
                <div className="col-10 border-top">
                    <div className="row text-muted">{ele.description}</div>
                </div>
            </div>
        </div>
    )
}

export default Card;