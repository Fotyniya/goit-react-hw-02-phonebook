//import {Input} from "../Filter/Filter.styled"

export const Filter = ({value, onChange})=> {
    return (
        <label>
            <h3>Find contact by name</h3>
            <input type="text" value = {value} onChange = {onChange} />
        </label> 
    )
}