import React, { useState } from 'react';

function AddBox(props) {

    const [color, setColor] = useState('');
    const [height, setHeight] =useState('');

    const handleSubmit = e => {
        e.preventDefault();
        
        const newBox = {
            color: color,
            height: height,
        }

        props.onNewBox(newBox);

        setColor("");
        setHeight("");
    }

   // const handleForm

    return (
        <div>
            <h2>Box Generator</h2>
            <form onSubmit={handleSubmit}>
                <label>Color: </label>
                <input type='text' placeholder= "Enter Color Here" name='color' value={color} onChange= {e=>setColor(e.target.value)} />
                <label>Height: </label>
                <input type='text' placeholder= "Enter Height Here" name='height' value={height} onChange={e=>setHeight(e.target.value)} />
                <button type='submit'> Add </button>
            </form>
        </div>
    )
}

export default AddBox;



