import React from 'react'
import Layout from './Components/Layout'
import MainContent from './Components/MainContent'
import { MessagesLayoutRightSidebar } from 'src/components/Sidebars/Messages'
import { MessagesLayoutLeftSidebar } from 'src/components/Sidebars/Messages'

const MessagesLayout = ({children}) => {
    return (
        <>
            <Layout
                topLogo={true}
                leftSidebar= {
                    {
                        topInRem:5.438,
                        leftInRem: 2.5,
                        widthInRem:28.625,
                        background: "#fff",
                        contentsComponent: MessagesLayoutLeftSidebar
                    }
                }

                rightSidebar={
                    {
                        paddingTopInRem: 3.688,
                        paddingBottomInRem: 4.25,
                        paddingRightInRem: 4.625,
                        paddingLeftInRem: 4.813,
                        widthInRem: 19.438,
                        topInRem: 0,
                        bottomInRem: 0,
                        rightInRem: 0,
                        fullHeight: true,
                        background: "#fff",
                        contentsComponent: MessagesLayoutRightSidebar
                    }
                }
            >
            
                <MainContent children={children} />

            </Layout>
            
        </>
    )
}

export default MessagesLayout
