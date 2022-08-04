import { useState } from 'react';
import PropTypes from 'prop-types';



const Search = ({onSubmit}) => {
    const [search, setSearch] = useState(null)
    

    const onInputChange = event => {
        setSearch(event.currentTarget.value)
   
    }

    const onSubmitFormChange = event => {
        event.preventDefault();
        onSubmit(search)
    }
    return (
        <form onSubmit = {onSubmitFormChange}>

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
 
export default Search;

Search.propTypes = {
    onSubmit:PropTypes.func.isRequired
}