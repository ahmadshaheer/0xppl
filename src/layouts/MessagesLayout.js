import React from 'react'
import Layout from './Components/Layout'
import MainContent from './Components/MainContent'
import {leftSidebarProperties} from 'src/components/Sidebars/Messages/LeftSidebar'
import {rightSidebarProperties} from 'src/components/Sidebars/Messages/RightSidebar'
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
