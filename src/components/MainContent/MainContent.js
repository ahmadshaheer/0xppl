import React, { useContext } from 'react'
import styled from 'styled-components'
import Filters from './Filters'
import FeedPostsWrapper from './FeedPostsWrapper'
import TopMenu from './TopMenu'

const MainContent = () => {

    return (
        <Wrapper >
            <TopMenu></TopMenu>
            <Filters></Filters>
            <FeedPostsWrapper></FeedPostsWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    flex-basis: 45rem;
    background: #fff;
    
    filter: drop-shadow(0px 4px 12px rgba(104, 118, 132, 0.1));

    
`
export default MainContent
