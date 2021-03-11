import React from 'react';

function Board(props){
    const drop = e =>{
        e.preventDefault();
        console.log('hello')

        //dataTransfer = object is used to hold the data that is being dragged 
        const card_id = e.dataTransfer.getData('card_id');

        const card = document.getElementById(card_id);
        card.style.display = 'block';


        //this target will be where we will drop card
        e.target.appendChild(card);
        
    }

    const dragOver = e => {
        e.preventDefault();
    }
    return (
        <div
            id={props.id}
            onDrop={drop}
            onDragOver={dragOver}
            className={props.className}
        >
            { props.children }
        </div>
    )
}

export default Board;