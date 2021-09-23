import React, { useContext } from 'react'
import styled from 'styled-components'
import home_icon from 'src/assets//topmenu-home-icon.png'
import communities_icon from 'src/assets//topmenu-communities-icon.png'
import messages_icon from 'src/assets//topmenu-messages-icon.png'
import TopMenuItem from './TopMenuItem'

import {Context} from 'src/Store'
import SearchBar from './SearchBar/SearchBar'


const TopMenu = () => {
    
    const [state] = useContext(Context);


    return (
        <Wrapper 
            className="top-menu" 
            search_bar_expanded={state.search_bar_expanded} 
            display_search_result_dropdown={state.display_search_result_dropdown}
            >

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
            <SearchBar />            
            

        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    position: sticky;
    top: 0;

    /**
        * handle the active menu:
        * if active passed to the component 
        * update the background
    * /
    ${({active}) => active && `
            background: #fff;
        `}
    
    
    
    /**
     * handle the search expanding:
     * if search input clicked 
        * hide other menus i.e. FEED, COMMUNITIES, MESSAGES
        * show the exit button
    * else
        * hide the exit button
    */ 
    ${({search_bar_expanded}) => search_bar_expanded ? `
        > button {
            display: none;
        }
    ` : `
        .close-icon {
            display: none;
        }
    `}

    /**
     * handle the search suggestions dropdown:
     * on key pressed display_search_result_dropdown = true
     * 
     * if display_search_result_dropdown is true
        * change flex direction to column
    */
   
    ${({display_search_result_dropdown}) => display_search_result_dropdown ? `
        flex-direction: column;
        .search-result-wrapper {
            display: block;
        }
        ` : `
        height: 3rem;
        .search-result-wrapper {
            display: none;
        }
    `}

    
    
`



export default TopMenu
