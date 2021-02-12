import React, {useState,Component} from 'react'

const Select = (label, defaultstate, options) => {
    
    const [change, setChange] = useState(defaultstate)

    const Dropdownmaker = () => (
        <label htmlFor={label}>
            {label}
                <select
                id={label}
                value={change}
                onChange={e=>setChange(e.target.value)}
                disabled={!options.length}
                >
                    <option>Please Select</option>
                    {options.map(item=>
                        <option key={item} value={item}>{item}</option>)}

                </select>


        </label>
    );
    
    return [change, Dropdownmaker, setChange]
}

export default Select
