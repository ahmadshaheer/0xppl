import { Sticky } from 'src/components/Sidebars'
import React from 'react'
import styled from 'styled-components'
import {TopLogo} from './'

const Layout = (props) => {
    const {justifyContent, leftSidebar, rightSidebar, children, topLogo} = props
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
    /* display: flex; */
    /* ${({justifyContent}) => justifyContent && `
        justify-content: ${justifyContent};
    `}; */
    margin-top: 1.25rem;
    height: 1400px;
`
export default Layout
