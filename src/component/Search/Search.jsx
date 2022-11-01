import React from 'react';
import cl from './Search.module.css'
import SearchInput from "./SearchInput/SearchInput";


const Search = ({youtubeRequest}) => {

    const youtubeTerm = (termFromSearchBar) => {
        youtubeRequest(termFromSearchBar)
    }

    return (
        <div  className={cl.formWrapper} >
            <SearchInput youtubeTerm={youtubeTerm} />
        </div>
    );
};

export default Search;