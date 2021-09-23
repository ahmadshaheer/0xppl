import React from 'react'
import styled from 'styled-components'
import FeedPostsWrapper from '../FeedPost/FeedPostsWrapper'
import Filters from './Filters'
import TopMenu from './TopMenu'

const MainContent = ({children}) => {

    return (
        <Wrapper >
            <TopMenu></TopMenu>
            <Filters></Filters>
            <FeedPostsWrapper></FeedPostsWrapper>
            {children}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    flex-basis: 45rem;
    background: #fff;
    
    filter: drop-shadow(0px 4px 12px rgba(104, 118, 132, 0.1));

    
`
export default MainContent
