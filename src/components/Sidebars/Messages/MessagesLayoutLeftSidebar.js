import React from 'react'
import  styled  from 'styled-components';
import {NewMessageButton} from 'src/components/Buttons';
import {MessagePreviewItemsWrapper} from './';

const MessagesLayoutLeftSidebar = () => {
    
    return (
        <Wrapper>
            <NewMessageButton />
            <MessagePreviewItemsWrapper />
            {/* <NewMessageButton />

            <RecentMessages /> */}
        </Wrapper>
    )
}
const Wrapper = styled.div`

`
export default MessagesLayoutLeftSidebar
