import { Sticky } from 'src/components/Sidebars'
import React, {useContext} from 'react'
import styled from 'styled-components'
import {TopLogo} from './'
import {Context} from 'src/Store'

const Layout = ({justifyContent, leftSidebar, rightSidebar, children, topLogo}) => {
    const [state] = useContext(Context);

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
            {state.display_search_result_dropdown && <div className="overlay"></div>}

        </Wrapper>
    )
}
const Wrapper = styled.div`

    /**
    * *- Overall Layout with margins from each side
    * *- |--|---|--|
    * *- Left Sidebar | Main Content | Right Sidebar
     */
     .overlay {
        position: fixed;
        background: #fff;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        opacity: .8;
    }
    margin-top: 1.25rem;
    
`
export default Layout
