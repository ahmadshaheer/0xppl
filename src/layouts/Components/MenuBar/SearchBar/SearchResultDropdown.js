import React from 'react'
// search result data
import {people_search_results, activity_search_result} from 'src/data/search_result.js'
import styled from 'styled-components'
import {SearchResultWrapper} from './Index'

const SearchResultDropdown = () => {
    return (
        <Wrapper className="search-result-wrapper">
            <SearchResultWrapper
                type="people"
                results={people_search_results}
            />
            <SearchResultWrapper
                type="activity"
                results={activity_search_result}
            />

        </Wrapper>
    )
}
const Wrapper = styled.div`
    
    opacity: 1;
    padding: 1.875rem 0;
    position: absolute;
    top: 3rem;
    background: #fff;
    left: 0;
    right: 0;
    filter: drop-shadow(0px 4px 12px rgba(104, 118, 132, 0.1));



    
`

export default SearchResultDropdown
