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
                type='text'
                name='search'
                value={search}
                autoComplete='off'
                onChange = {onInputChange}
            />

            <button type='submit'>Search</button>
        </form>
    )
}
 
export default Search;
// export const Search = ({ onSubmit }) => {
//   const [search, setSearch] = useState('');

//   const onChangeInput = event => {
//     setSearch(event.currentTarget.value);
//   };

//   const onSubmintForm = e => {
//     e.preventDefault();
//     onSubmit(search);
//   };

//   return (
//     <form onSubmit={onSubmintForm}>
//       <button type="submit">
//         <span>Search</span>
//       </button>

//       <input
//         type="text"
//         name="search"
//         value={search}
//         autoComplete="off"
//         autoFocus
//         placeholder="Search images and photos"
//         onChange={onChangeInput}
//       />
//     </form>
//   );
// };

// Search.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };