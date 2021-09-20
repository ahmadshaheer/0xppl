import React, { Component, useState } from 'react'
import styled from 'styled-components'
import home_icon from '~/../../src/assets/topmenu-home-icon.png'
import communities_icon from '~/../../src/assets/topmenu-communities-icon.png'
import messages_icon from '~/../../src/assets/topmenu-messages-icon.png'
import search_icon from '~/../../src/assets/topmenu-search-icon.png'
import TopMenuItem from './TopMenuItem'


const TopMenu = () => {
    
    const [expanded_search, setExpandedSearch] = useState(false);
    


    return (
        <Wrapper search={expanded_search}>
            <TopMenuItem 
                text="FEED" 
                icon={home_icon} 
                active={true} 
            />

            <TopMenuItem 
                text="COMMUNITIES" 
                icon={communities_icon}  
            />

            <TopMenuItem 
                text="MESSAGES" 
                icon={messages_icon}  
                
            />

            <SearchWrapper onFocus={() => setExpandedSearch(true)} onBlur={() => setExpandedSearch(false)} icon={search_icon} placeholder="SEARCH">
            </SearchWrapper>

        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    position: sticky;
    top: 0;
    height: 3rem;
    ${({search}) => search && `
        button {
            display: none;
        }
    `}

    ${({active}) => active && `
            background: #fff;
        `}
    
`
const SearchWrapper = styled.input`
    flex-grow: 1;
    border:none;
    font-weight: 600;
    background: url(${search_icon});
    background-color: #EAECEE;
    background-position: center;
    background-position-x: 1.313rem;
    background-repeat: no-repeat;
    background-size: 0.75rem;
    padding-left: 2.688rem;
    :focus {
        outline: none;
    }


`

export default TopMenu
