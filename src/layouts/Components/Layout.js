import { Sticky } from 'src/components/Sidebars'
import React from 'react'
import styled from 'styled-components'

const Layout = (props) => {
    const {leftSidebar, rightSidebar, children} = props
    return (
        <Wrapper>
            <Sticky
                sticky={leftSidebar.sticky}
                widthInRem={leftSidebar.widthInRem}
                topInRem={leftSidebar.topInRem}
                marginLeftInRem={leftSidebar.marginLeftInRem}
                marginRightInRem={leftSidebar.marginRightInRem}
                contentsComponent={leftSidebar.contentsComponent}
            />

                {children}

            <Sticky
                sticky={rightSidebar.sticky}
                widthInRem={rightSidebar.widthInRem}
                topInRem={rightSidebar.topInRem}
                marginLeftInRem={rightSidebar.marginLeftInRem}
                marginRightInRem={rightSidebar.marginRightInRem}
                contentsComponent={rightSidebar.contentsComponent}
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
     display: flex;
    justify-content: space-between;
    margin-top: 1.25rem;
    height: 1400px;
`
export default Layout
