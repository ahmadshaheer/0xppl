import React from 'react'
import styled from 'styled-components'
import NavbarItem from './NavbarItem'
import Searchbar from './Searchbar'
import feed_icon from '../../../../assets/feed-icon.svg'
import communities_icon from '../../../../assets/communities-icon.svg'
import messages_icon from '../../../../assets/messages-icon.svg'
const Navbar = () => {
    return (
        <Wrapper>
            <NavbarItem 
                active={true} 
                icon={feed_icon}
                text="FEED" 
            />
            <NavbarItem 
                icon={communities_icon}
                text="COMMUNITIES" 
            />
            <NavbarItem 
                icon={messages_icon}
                text="MESSAGES" 
            />

            <Searchbar 
                text="SEARCH"
            />
        </Wrapper>
    )
}
const Wrapper = styled.div`
    display: flex;


    ${Searchbar}:focus + & {
        background: #FFA689;
    }
    ${Searchbar}:invalid + & {
        background: #FE2F75;
    }
    ${Searchbar}:valid + & {
        background: #70EDB9;
    }
`

export default Navbar
