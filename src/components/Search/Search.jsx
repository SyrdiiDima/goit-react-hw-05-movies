import { useState } from 'react';
import PropTypes from 'prop-types';



export const Search = ({onSubmit}) => {
    const [search, setSearch] = useState('')
    

    const onInputChange = event => {
        setSearch(event.currentTarget.value)
   
    }

    const onSubmitForm = event => {
        event.preventDefault();
        onSubmit(search)
    }
    return (
        <form onSubmit = {onSubmitForm}>

            <input
                type="text"
                name="search"
                value={search}
                autoComplete='off'
                onChange = {onInputChange}
            />

            <button type='submit'>Search</button>
        </form>
    )
}
 


Search.propTypes = {
    onSubmit:PropTypes.func.isRequired
}