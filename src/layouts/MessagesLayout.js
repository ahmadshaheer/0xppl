import { MainLayoutLeftSidebar, MainLayoutRightSidebar } from 'src/components/Sidebars/Main'
import React from 'react'
import Layout from './Components/Layout'
import MainContent from './Components/MainContent'

const MessagesLayout = ({children}) => {
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

export default MessagesLayout
