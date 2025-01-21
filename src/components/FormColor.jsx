import React, { useState } from 'react'

function FormColor() {
    const [currentColor, setCurrentColor]=useState("#831B1B");
    function handleColorChange(e){
        setCurrentColor(e.target.value);
    }
    return (
        <>            
            <div 
                className="colorSquare"
                style={{backgroundColor: currentColor}}
            >
            </div>
            <div className="form-color">
                <input
                    onChange={handleColorChange} 
                    type="color" 
                    name="primary" 
                    id="primary" 
                    value={currentColor}
                />
            </div>
        </>
    )
}

export default FormColor
