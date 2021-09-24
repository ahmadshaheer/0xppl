import { Sticky } from 'src/components/Sidebars'
import React from 'react'

const Layout = (props) => {
    const {leftSidebar, rightSidebar, children} = props
    console.log(rightSidebar)
    return (
        <>
            <Sticky
                sticky={leftSidebar.sticky}
                widthInRem={leftSidebar.widthInRem}
                topInRem={leftSidebar.topInRem}
                marginLeftInRem={leftSidebar.marginLeftInRem}
                marginRightInRem={leftSidebar.marginRightInRem}
                contentsComponent={leftSidebar.contentsComponent}
            />

                {children}

            <Sticky
                sticky={rightSidebar.sticky}
                widthInRem={rightSidebar.widthInRem}
                topInRem={rightSidebar.topInRem}
                marginLeftInRem={rightSidebar.marginLeftInRem}
                marginRightInRem={rightSidebar.marginRightInRem}
                contentsComponent={rightSidebar.contentsComponent}
            />


        </>
    )
}

export default Layout
