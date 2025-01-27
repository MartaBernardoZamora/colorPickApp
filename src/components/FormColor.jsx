import React, { useState } from 'react'

function FormColor() {
    const [currentColor, setCurrentColor]=useState("#48fea9");
    function handleColorChange(e){
        setCurrentColor(e.target.value);
    }
    return (
        <main>            
            <div
                className="colorSquare"
                style={{backgroundColor: currentColor}}
            >                
                <p>Color seleccionado: {currentColor}</p>
            </div>
            <div className="form-color">
                <h2>Selecciona un color</h2>
                <input
                    onChange={handleColorChange} 
                    type="color" 
                    className="colorInput" 
                    value={currentColor}
                />
            </div>
        </main>
    )
}

export default FormColor
