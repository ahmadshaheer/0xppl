import React from 'react'
import MainContent from './Components/MainContent'

import {MainLayoutLeftSidebar, MainLayoutRightSidebar} from 'src/components/Sidebars/Main'
import Layout from './Components/Layout'

const MainLayout = ({children}) => {
    return (
        <>
            <Layout
                justifyContent="space-between"
                leftSidebar= {
                    {
                        topInRem:5.625,
                        leftInRem: 7.188,
                        sticky:true,
                        widthInRem:14.125,
                        marginRightInRem:7, 
                        contentsComponent: MainLayoutLeftSidebar
                    }
                }

                rightSidebar={
                    {
                        sticky: true,
                        widthInRem: 15,
                        topInRem: 12.813,
                        rightInRem: 5.75,
                        marginLeftInRem: 6.25,
                        contentsComponent: MainLayoutRightSidebar
                    }
                }
            >
            
                <MainContent widthInRem={46.563} children={children} />

            </Layout>
            
        </>
    )
}


export default MainLayout
