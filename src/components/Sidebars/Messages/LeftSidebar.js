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
    style:{
        top: '5.438rem',
        left: '2.5rem',
        width: '26.875rem',
        background: '#fff',
        minHeight: '20rem',
        
    },
    contentsComponent: LeftSidebar,
}
export default LeftSidebar
