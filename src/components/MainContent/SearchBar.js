import React, {useContext} from 'react'
import styled from 'styled-components'
import search_icon from 'src/assets//topmenu-search-icon.png'
import close_search_icon from 'src/assets//topmenu-search-close-icon.png'
import {Context} from 'src/Store'
import SearchResultDropdown from './SearchResultDropdown'

const SearchBar = () => {
    const [state, setState] = useContext(Context);

    return (
        <>
        <SearchWrapper className="">
            {/* 
                search input and close button
            */}
            <SearchInput 
                onFocus={() => setState({...state, search_bar_expanded: true})} 
                icon={search_icon} 
                placeholder="SEARCH" 
                onKeyPress = {() => setState({...state, display_search_result_dropdown: true})}
                value = {state.search_term} 
                onChange={e => {setState({...state, search_term: e.target.value})}}
            />

            <button onClick={() => {setState({search_bar_expanded: false, display_search_result_dropdown: false, search_term: ""})}} className="close-icon">
                <img src={close_search_icon} alt="" />
            </button>


        </SearchWrapper>
        
        <SearchResultDropdown />
        </>
    )
}

const SearchWrapper = styled.div`
    flex-grow: 1;
    display: flex;
    align-items: center;
    height: 3rem;
    
    background-color: #EAECEE;
    button {
        border: none;
        cursor: pointer;
        img {
            width: 1rem;
            padding-right: 1.892rem;
        }
        
    }

    .top-menu  {
        display: none;
    }
`

const SearchInput = styled.input`
    height: 1.25rem;
    flex-grow: 1;
    border:none;
    background: url(${search_icon});
    background-color: #EAECEE;
    background-position: center;
    background-position-x: 1.313rem;
    background-repeat: no-repeat;
    background-size: 0.75rem;
    padding-left: 3.313rem;
    
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--color-black);
    :focus {
        outline: none;
    }
`

export default SearchBar
