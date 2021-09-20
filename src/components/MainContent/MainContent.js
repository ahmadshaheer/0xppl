import React from 'react'
import styled from 'styled-components'
import Filters from './Filters'
import TopMenu from '~/../../src/layouts/MainLayout/Components/MainContent/TopMenu'
import FeedPost from './FeedPost'

const MainContent = () => {
    return (
        <Wrapper>
            <TopMenu></TopMenu>
            <Filters></Filters>
            <FeedPost></FeedPost>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    flex-basis: 45rem;
    background: #fff;
    filter: drop-shadow(0px 4px 12px rgba(104, 118, 132, 0.1));
`
export default MainContent
