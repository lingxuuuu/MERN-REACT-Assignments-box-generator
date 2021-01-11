import React, {useState} from 'react';

function DisplayBox(props) {

//App.js <DisplayBox box= {color} />

    return (
        <div>
        {props.box.map((box, i) =>
            <div 
                key={i}
                style = {{backgroundColor: box.color, height: box.height+'px', width: box.height + 'px', margin: '4px' }} > 
            </div>
         )}
        </div>
    );
}

export default DisplayBox;
