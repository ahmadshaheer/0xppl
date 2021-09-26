import React from 'react'
import MainContent from './Components/MainContent'

import Layout from './Components/Layout'
import {leftSidebarProperties} from 'src/components/Sidebars/Main/LeftSidebar'
import {rightSidebarProperties} from 'src/components/Sidebars/Main/RightSidebar'
const MainLayout = ({children}) => {
    return (
            <Layout
                justifyContent="space-between"
                leftSidebar= {leftSidebarProperties}

                rightSidebar={rightSidebarProperties}
            >
            
                <MainContent widthInRem={46.563} children={children} />

            </Layout>
    )
}

export default MainLayout
