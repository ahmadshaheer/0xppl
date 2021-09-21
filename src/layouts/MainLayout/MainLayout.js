import React from 'react'
import styled from 'styled-components'
import MainContent from 'src/components/MainContent/MainContent'
import LeftSidebar from './Components/LeftSidebar'
import RightSidebar from './Components/RightSidebar/RightSidebar'

const MainLayout = (props) => {
    return (
        <Wrapper>
            <LeftSidebar />
            <MainContent />
            <RightSidebar/> 
        </Wrapper>
    )
}

const Wrapper = styled.div`
    
    
    /**
    * *- Overall Layout with margins from each side
    * *- |--|---|--|
    * *- Left Sidebar
    * *- Main Content
    * *- Right Sidebar
     */
    display: flex;
    justify-content: space-between;
    margin: 1.25rem 5.75rem  0 7.188rem;
    height: 1400px;
    

`

export default MainLayout
