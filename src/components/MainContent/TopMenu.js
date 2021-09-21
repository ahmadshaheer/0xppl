import React, { useState } from 'react'
import styled from 'styled-components'
import home_icon from 'src/assets//topmenu-home-icon.png'
import communities_icon from 'src/assets//topmenu-communities-icon.png'
import messages_icon from 'src/assets//topmenu-messages-icon.png'
import search_icon from 'src/assets//topmenu-search-icon.png'
import close_search_icon from 'src/assets//topmenu-search-close-icon.png'
import profile_image from 'src/assets//search_result_profile2.png'
import TopMenuItem from './TopMenuItem'
import SearchResultWrapper from './SearchResult/SearchResultWrapper'


const TopMenu = () => {
    
    const [expanded_search, setExpandedSearch] = useState(true);
    const [search_result_dropdown, setSearchSuggestionsDropdown] = useState(true);
    


    return (
        <Wrapper expanded_search={expanded_search} search_result_dropdown={search_result_dropdown}>
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
            <SearchWrapper className="">
                {/* 
                    search input and close button
                */}
                <SearchInput 
                    onFocus={() => setExpandedSearch(true)} 
                    icon={search_icon} 
                    placeholder="SEARCH" 
                    onKeyPress = {() => setSearchSuggestionsDropdown(true)} 
                />
                <button onClick={() => setExpandedSearch(false)} className="close-icon">
                    <img src={close_search_icon} alt="" />
                </button>


            </SearchWrapper>
            {/* search suggestion dropdown */}
            <SearchResultDropdown>
                <SearchResultWrapper
                    type="people"
                    results={
                        [
                            {
                                profile_image: profile_image,
                                user_name:'ethernity',
                                code:'0x0D3A…2CEE',
                                total_stats:'7 transactions',
                                search_term: 'Eth'
                            },
                            {
                                profile_image: profile_image,
                                user_name:'methakovan',
                                code:'0x0D3A…2CEE',
                                total_stats:'18 posts  18 transactions',
                                search_term: 'Eth'
                            },
                            {
                                profile_image: profile_image,
                                user_name:'prethanna',
                                code:'0x0D3A…2CEE',
                                total_stats:'36 posts  12 transactions',
                                search_term: 'Eth'
                            },
                            {
                                profile_image: profile_image,
                                user_name: 'flippeth.eth',
                                code: '0x0D3A…2CE4',
                                total_stats: '41 transactions',
                                search_term: 'Eth'
                            },
                            {
                                profile_image: profile_image,
                                user_name:'Marc Ethreessen',
                                code: '0x0D3A…2CEE',
                                total_stats: '24 posts',
                                search_term: 'Eth'
                            }
                        ]
                    }
                />
                <SearchResultWrapper
                    type="posts"
                    results={
                        [
                            {
                                profile_image: profile_image,
                                user_name:'ethernity',
                                code:'0x0D3A…2CEE',
                                total_stats:'7 transactions',
                                search_term: 'Eth'
                            },
                            {
                                profile_image: profile_image,
                                user_name:'methakovan',
                                code:'0x0D3A…2CEE',
                                total_stats:'18 posts  18 transactions',
                                search_term: 'Eth'
                            },
                            {
                                profile_image: profile_image,
                                user_name:'prethanna',
                                code:'0x0D3A…2CEE',
                                total_stats:'36 posts  12 transactions',
                                search_term: 'Eth'
                            },
                            {
                                profile_image: profile_image,
                                user_name: 'flippeth.eth',
                                code: '0x0D3A…2CE4',
                                total_stats: '41 transactions',
                                search_term: 'Eth'
                            },
                            {
                                profile_image: profile_image,
                                user_name:'Marc Ethreessen',
                                code: '0x0D3A…2CEE',
                                total_stats: '24 posts',
                                search_term: 'Eth'
                            }
                        ]
                    }
                />
            </SearchResultDropdown>

        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    position: sticky;
    top: 0;
    
    

    /**
     * handle the search expanding:
     * if search input clicked 
        * hide other menus i.e. FEED, COMMUNITIES, MESSAGES
        * show the exit button
    * else
        * hide the exit button
    */ 
    ${({expanded_search}) => expanded_search ? `
        > button {
            display: none;
        }
    ` : `
        .close-icon {
            display: none;
        }
    `}

    /**
     * handle the active menu:
     * if active passed to the component 
        * update the background
    * /
    ${({active}) => active && `
            background: #fff;
        `}

    /**
     * handle the search suggestions dropdown:
     * on key pressed search_result_dropdown = true
     * 
     * if search_result_dropdown is true
        * change flex direction to column
    */
   
    ${({search_result_dropdown}) => search_result_dropdown ? `
        flex-direction: column;
    ` : `
        height: 3rem;
    `}

    
    
`
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

const SearchResultDropdown = styled.div`
    

    padding: 1.875rem 0;
    position: absolute;
    top: 3rem;
    background: #fff;
    left: 0;
    right: 0;
    height: 20rem;



    
`

export default TopMenu
