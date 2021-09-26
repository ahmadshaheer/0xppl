// import { SelectedMessagePreviewItem } from 'src/components/Messages'

import React from 'react'
import ReplyInput from 'src/components/Messages/ReplyInput'
import SimpleBarReact from "simplebar-react";

import "simplebar/src/simplebar.css";
import ChatExchange from 'src/components/Messages/ChatExchange';
import SelectedMessageTopPreviewBar from '../components/Messages/SelectedMessageTopPreviewBar';
import HtmlTitle from 'src/components/HtmlTitle';
import { metaTags } from 'src/helpers/seo';

const Messages = () => {
    return (
        <>
            <HtmlTitle {...metaTags('messages')} />
            <SelectedMessageTopPreviewBar />
            
            <SimpleBarReact style={{ height: '42.125rem' }}>
                <ChatExchange />
            </SimpleBarReact>
            
            <ReplyInput />
        </>
    )
}

export default Messages
