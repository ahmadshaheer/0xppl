import React from 'react'
import  styled  from 'styled-components';
import {NewMessageButton} from 'src/components/Buttons';
import {MessagePreviewItemsWrapper} from './';
import ScrollableContentWrapper from 'src/components/ScrollableContentWrapper';

const MessagesLayoutLeftSidebar = () => {
    
    return (
        <Wrapper>
            <NewMessageButton />
            <ScrollableContentWrapper
                paddingInRem={
                    {
                        top: 0,
                        bottom: 0,
                        right: 1.25,
                        left: 1.25,
                    }
                }

                heightInRem={40.75}
            >
                <MessagePreviewItemsWrapper />

            </ScrollableContentWrapper>
        </Wrapper>
        
    )
}
const Wrapper = styled.div`
`
export default MessagesLayoutLeftSidebar
