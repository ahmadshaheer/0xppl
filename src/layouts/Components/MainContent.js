import React, {useContext} from 'react'
import styled from 'styled-components'
import TopMenu from 'src/components/MenuBar/TopMenu'
import {Context} from 'src/Store'

const MainContent = ({children, style}) => {
    
    const [state] = useContext(Context);
    return (
        <Wrapper style={style}>
            <TopMenu></TopMenu>
            <Content>
                {children}

            </Content>
            {state.display_search_result_dropdown && <div className="overlay"></div>}

        </Wrapper>
    )
}

const Wrapper = styled.div`
.overlay {
    position: absolute;
    background: #fff;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: .8;
}
    position: relative;
    z-index:9;
    width: 45rem;
    min-height: 97vh;
    margin: 0 auto;


    background: #fff;
    
    filter: drop-shadow(0px 4px 12px rgba(104, 118, 132, 0.1));

    
`

const Content = styled.div`
    /* padding: 0 1.875rem; */
`
export default MainContent
