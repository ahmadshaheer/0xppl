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
            
                {/* <MainContent children={children} /> */}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit deleniti et tempore unde ipsum reprehenderit cum vel facilis, obcaecati, culpa eligendi beatae nihil tenetur quis, minus odit reiciendis laudantium. Nulla.

            </Layout>
            
        </>
    )
}

export default MessagesLayout
