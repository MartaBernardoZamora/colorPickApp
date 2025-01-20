import React from 'react'

function FormColor(onChange, label, id, value = "#292929") {
    
    return (
        <div className="form-color">
            <label htmlFor={id}>{label}</label>
            <div className="form-input-wrapper">
                <div 
                    className="form-input-fill"
                    data-color={value}
                    style={{ color: value }}>
                </div>
                <input 
                    onChange={onChange}
                    defaultValue={value}
                    name={id} 
                    id={id}
                    type="color" 
                />
            </div>
        </div>
    )
}

export default FormColor
