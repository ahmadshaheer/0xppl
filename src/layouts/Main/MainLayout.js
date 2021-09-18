import React from 'react'
import styled from 'styled-components'
import LeftFixedSidebar from './Components/LeftFixedSidebar/LeftFixedSidebar'
import MainContentWrapper from './Components/MainContent/MainContentWrapper'
import RightFixedSidebar from './Components/RightFixedSidebar/RightFixedSidebar'

const MainLayout = (props) => {
    return (
        <MainLayoutWrapper>
            <LeftFixedSidebar />

            <MainContentWrapper >
                {props.children}
            </MainContentWrapper>

            <RightFixedSidebar />
            
        </MainLayoutWrapper>

    )
}

const MainLayoutWrapper = styled.div`
        display: flex;

`

export default MainLayout
