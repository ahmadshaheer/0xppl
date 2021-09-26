import React from 'react'
import Layout from './Components/Layout'
import MainContent from './Components/MainContent'
import {leftSidebarProperties} from 'src/components/Sidebars/Messages/MessagesLayoutLeftSidebar'
import {rightSidebarProperties} from 'src/components/Sidebars/Messages/MessagesLayoutRightSidebar'
const MessagesLayout = ({children}) => {
    return (
        <Layout
            topLogo={true}
            leftSidebar= {leftSidebarProperties}

            rightSidebar={rightSidebarProperties}
        >
            <MainContent widthInRem={46.563} children={children} />

        </Layout>
    )
}

export default MessagesLayout
