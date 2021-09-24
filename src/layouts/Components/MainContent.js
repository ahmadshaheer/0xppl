import React from 'react'
import styled from 'styled-components'
import Filters from 'src/components/MenuBar/Filters'
import TopMenu from 'src/components/MenuBar/TopMenu'

const MainContent = ({children}) => {

    return (
        <Wrapper >
            <TopMenu></TopMenu>
            <Filters></Filters>
            <Content>
                {children}

            </Content>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    flex-basis: 45rem;
    background: #fff;
    
    filter: drop-shadow(0px 4px 12px rgba(104, 118, 132, 0.1));

    
`

const Content = styled.div`
    padding: 0 1.875rem;
`
export default MainContent
