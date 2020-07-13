import React from 'react'

/**
 * 
 * @param {*} props.onChange(Event)
 * @param {*} props.onKeyPress(Event)
 */
function LsTextInput(props) {
    function handleChange(e) {
        if(!props.onChange) {
            return
        }
        props.onChange(e)
    }

    function handleKeyPress(e) {
        if(!props.onKeyPress) {
            return
        }
        props.onKeyPress(e)
    }

    return (
        <input type="text"
            className="border rounded bg-gray-100"
            onChange={e => handleChange(e)}
            onKeyPress={e => handleKeyPress(e)}
            value={props.value}
        />
    )
}

export default LsTextInput