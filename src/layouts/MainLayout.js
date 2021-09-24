import React from 'react'
import styled from 'styled-components'
import MainContent from './Components/MainContent'

import {MainLayoutLeftSidebar, MainLayoutRightSidebar} from 'src/components/Sidebars/Main'
import Layout from './Components/Layout'

const MainLayout = ({children}) => {
    return (
        <Wrapper>
            <Layout
                leftSidebar= {
                    {
                        sticky:true,
                        widthInRem:14.125,
                        topInRem:4.375,
                        marginLeftInRem:7.188, 
                        contentsComponent: MainLayoutLeftSidebar
                    }
                }

                rightSidebar={
                    {
                        sticky: true,
                        widthInRem: 15,
                        topInRem: 11.563,
                        marginRightInRem: 7.188,
                        contentsComponent: MainLayoutRightSidebar
                    }
                }
            >
            

                <MainContent>
                {children}
                </MainContent>

            </Layout>
            
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
    /* margin: 1.25rem 5.75rem  0 7.188rem; */
    margin-top: 1.25rem;
    height: 1400px;
    

`

export default MainLayout
