import React from 'react'
import {MessagePreviewItem} from './';
import profile_image from 'src/assets/feed_post_profile.png'
const MessagePreviewItemsWrapper = () => {
    return (
        <div>
            <MessagePreviewItem 
                image={profile_image}
                name="flippen.eth"
                verified={false}
                address=""
                preview_text="You all ready for what’s next?"
                elapsed_time="4m"
            />
            <MessagePreviewItem 
                image={profile_image}
                name="flippen.eth"
                verified={true}
                address="0xPras"
                preview_text="The integration of which arts..."
                elapsed_time="28m"
            />
            <MessagePreviewItem 
                image={profile_image}
                name="flippen.eth"
                verified={true}
                address="0xPras"
                preview_text="The integration of which arts..."
                elapsed_time="28m"
            />
            <MessagePreviewItem 
                image={profile_image}
                name="flippen.eth"
                verified={false}
                address=""
                preview_text="You all ready for what’s next?"
                elapsed_time="4m"
            />
            <MessagePreviewItem 
                image={profile_image}
                name="flippen.eth"
                verified={true}
                address="0xPras"
                preview_text="The integration of which arts..."
                elapsed_time="28m"
            />
            <MessagePreviewItem 
                image={profile_image}
                name="flippen.eth"
                verified={true}
                address="0xPras"
                preview_text="The integration of which arts..."
                elapsed_time="28m"
            />
        </div>
    )
}

export default MessagePreviewItemsWrapper
