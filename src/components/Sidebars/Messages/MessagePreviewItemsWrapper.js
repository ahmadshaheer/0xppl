import React from 'react'
import {MessagePreviewItem} from '.';
import profile_image from 'src/assets/feed_post_profile.png'

const MessagePreviewItemsWrapper = () => {
    return (
        <div>
            
            <MessagePreviewItem 
                id={1}
                image={profile_image}
                name="flippen.eth"
                verified={false}
                address=""
                preview_text="You all ready for what’s next?"
                elapsed_time="4m"
                active
            />
            <MessagePreviewItem 
                id={2}
                image={profile_image}
                name="flippen.eth"
                verified={true}
                address="0xPras"
                preview_text="Business-to-business marketing twitter funding. Assets handshake supply chain conversion virality product management branding direct mailing partnership creative value proposition android equity. Iteration A/B testing holy grail seed round channels series A financing release partnership seed money twitter virality venture. Infographic beta paradigm shift lean startup metrics virality."
                elapsed_time="28m"
                unread_messages_count={1}
            />
            <MessagePreviewItem 
                id={3}
                image={profile_image}
                name="flippen.eth"
                verified={true}
                address="0xPras"
                preview_text="The integration of which arts..."
                elapsed_time="28m"
                unread_messages_count={2}

            />
            <MessagePreviewItem 
                id={4}
                image={profile_image}
                name="flippen.eth"
                verified={false}
                address=""
                preview_text="You all ready for what’s next?"
                elapsed_time="4m"
            />
            <MessagePreviewItem 
                id={5}
                image={profile_image}
                name="flippen.eth"
                verified={true}
                address="0xPras"
                preview_text="The integration of which arts..."
                elapsed_time="28m"
            />
            <MessagePreviewItem 
                id={6}
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
