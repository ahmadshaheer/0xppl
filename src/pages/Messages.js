// import { SelectedMessagePreviewItem } from 'src/components/Messages'

import React from 'react'
import ReplyInput from 'src/components/Messages/ReplyInput'
import SimpleBarReact from "simplebar-react";

import "simplebar/src/simplebar.css";
import ChatExchange from 'src/components/Messages/ChatExchange';
import SelectedMessageTopPreviewBar from '../components/Messages/SelectedMessageTopPreviewBar';

const Messages = () => {
    return (
        <>
            <SelectedMessageTopPreviewBar />
            
            <SimpleBarReact style={{ height: '42.125rem' }}>
                <ChatExchange />
            </SimpleBarReact>
            
            <ReplyInput />
        </>
    )
}

export default Messages
