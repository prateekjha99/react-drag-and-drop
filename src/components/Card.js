import React from 'react'

function Card(props) {
    const dragStart = e =>{
        const target = e.target;

        // set this 'target' card to 'card_id' which tells which card we are dragging now
        e.dataTransfer.setData('card_id',target.id);
        
        //settimeout is 0, coz we want a lil delay to make the card invisible before dragging
        setTimeout(()=>{
            target.style.display="none";
        },0);

    }

    const dragOver = e => {
        e.stopPropagation();
    }
    return (
        <div
            id={props.id}
            className={props.className}
            draggable={props.draggable}
            onDragStart={dragStart}
            onDragOver={dragOver}    
        >
            {props.children}
        </div>
    )
}

export default Card
