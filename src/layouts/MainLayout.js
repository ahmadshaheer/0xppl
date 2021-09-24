import React from 'react'
import MainContent from './Components/MainContent'

import {MainLayoutLeftSidebar, MainLayoutRightSidebar} from 'src/components/Sidebars/Main'
import Layout from './Components/Layout'

const MainLayout = ({children}) => {
    return (
        <>
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
            
                <MainContent children={children} />

            </Layout>
            
        </>
    )
}


export default MainLayout
