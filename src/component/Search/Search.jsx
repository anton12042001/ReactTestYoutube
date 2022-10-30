import React from 'react';
import cl from './Search.module.css'
import SearchInput from "./SearchInput/SearchInput";


const Search = ({youtubeRequest}) => {

    const youtubeTerm = (termFromSearchBar) => {
        youtubeRequest(termFromSearchBar)
    }

    return (
        <div>
            <SearchInput youtubeTerm={youtubeTerm} />
        </div>
    );
};

export default Search;