import React from 'react'
import {NewMessageButton} from 'src/components/Buttons';
import {MessagePreviewItemsWrapper} from '.';
import SimpleBarReact  from 'simplebar-react';

const LeftSidebar = () => {
    
    return (
        <>
            <NewMessageButton />
            <SimpleBarReact style={{ height: '42.125rem' }}>

                <MessagePreviewItemsWrapper />

            </SimpleBarReact>            
        </>
        
    )
}

export const leftSidebarProperties = {
    sticky:false,
    topInRem:5.438,
    leftInRem: 2.5,
    widthInRem:27.875,
    background: "#fff",
    contentsComponent: LeftSidebar,
    minHeightRem:20,
}
export default LeftSidebar
