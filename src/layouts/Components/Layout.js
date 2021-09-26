import { Sticky } from 'src/components/Sidebars'
import React from 'react'
import styled from 'styled-components'
import {TopLogo} from './'

const Layout = ({justifyContent, leftSidebar, rightSidebar, children, topLogo}) => {
    
    return (
        <Wrapper justifyContent={justifyContent}>
            {topLogo && <TopLogo />}
            <Sticky
                {...leftSidebar}
            />

                {children}

            <Sticky
                {...rightSidebar}
            />


        </Wrapper>
    )
}
const Wrapper = styled.div`

    /**
    * *- Overall Layout with margins from each side
    * *- |--|---|--|
    * *- Left Sidebar | Main Content | Right Sidebar
     */
    
    margin-top: 1.25rem;
    
`
export default Layout
