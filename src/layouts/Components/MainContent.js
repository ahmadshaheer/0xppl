import React from 'react'
import styled from 'styled-components'
import TopMenu from 'src/components/MenuBar/TopMenu'

const MainContent = ({children, widthInRem}) => {

    return (
        <Wrapper widthInRem={widthInRem}>
            <TopMenu></TopMenu>
            <Content>
                {children}

            </Content>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    
    ${({widthInRem}) => widthInRem ? `
        width: ${widthInRem}rem;
    ` : `width: 45rem;`}
    min-height: 97vh;
    margin: 0 auto;


    background: #fff;
    
    filter: drop-shadow(0px 4px 12px rgba(104, 118, 132, 0.1));

    
`

const Content = styled.div`
    padding: 0 1.875rem;
`
export default MainContent
