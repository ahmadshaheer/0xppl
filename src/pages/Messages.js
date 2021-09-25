// import { SelectedMessagePreviewItem } from 'src/components/Messages'
import { MessagePreviewItem } from 'src/components/Sidebars/Messages'
import React from 'react'
import profile_image from 'src/assets/feed_post_profile.png'
import ScrollableContentWrapper from 'src/components/ScrollableContentWrapper'
import ReplyInput from 'src/components/Messages/ReplyInput'

const Messages = () => {
    return (
        <div>
            <MessagePreviewItem 
                id={2}
                image={profile_image}
                name="flippen.eth"
                verified={true}
                address="0xPras"
                border="bottom"
                hoverable={false}
                settings
                cursorPointer={false}
                image_size="md"
            />
            <ScrollableContentWrapper
                

                heightInRem={40.75}
             >
                
                <MessagePreviewItem
                    image_size="md" 
                    id={2}
                    image={profile_image}
                    name="flippen.eth"
                    verified={true}
                    address="0xPras"
                    preview_text="You all ready for what’s next?
                    This is another message
                    We follow Slack/Quill concept here more than Twitter/WhatsApp
                    Anyhow here is another message"
                    elapsed_time="28m"
                    dont_trim_text
                />
                <MessagePreviewItem
                    image_size="md" 
                    id={2}
                    image={profile_image}
                    name="flippen.eth"
                    verified={true}
                    address="0xPras"
                    preview_text="You all ready for what’s next?
                    This is another message
                    We follow Slack/Quill concept here more than Twitter/WhatsApp
                    Anyhow here is another message"
                    elapsed_time="28m"
                    dont_trim_text
                />
                <MessagePreviewItem
                    image_size="md" 
                    id={2}
                    image={profile_image}
                    name="flippen.eth"
                    verified={true}
                    address="0xPras"
                    preview_text="Alpha return on investment startup responsive web design social media gen-z crowdsource disruptive. Freemium disruptive MVP prototype metrics responsive web design rockstar release conversion channels. Release partner network first mover advantage innovator termsheet virality infographic rockstar marketing. Responsive web design partnership deployment alpha early adopters iPad sales analytics incubator innovator crowdsource. Leverage return on investment handshake"
                    elapsed_time="28m"
                    dont_trim_text
                />
                <MessagePreviewItem
                    image_size="md" 
                    id={2}
                    image={profile_image}
                    name="flippen.eth"
                    verified={true}
                    address="0xPras"
                    preview_text="You all ready for what’s next?
                    This is another message
                    We follow Slack/Quill concept here more than Twitter/WhatsApp
                    Anyhow here is another message"
                    elapsed_time="28m"
                    dont_trim_text
                />
                <MessagePreviewItem
                    image_size="md" 
                    id={2}
                    image={profile_image}
                    name="flippen.eth"
                    verified={true}
                    address="0xPras"
                    preview_text="Alpha return on investment startup responsive web design social media gen-z crowdsource disruptive. Freemium disruptive MVP prototype metrics responsive web design rockstar release conversion channels. Release partner network first mover advantage innovator termsheet virality infographic rockstar marketing. Responsive web design partnership deployment alpha early adopters iPad sales analytics incubator innovator crowdsource. Leverage return on investment handshake"
                    elapsed_time="28m"
                    dont_trim_text
                />
            </ScrollableContentWrapper>
            <ReplyInput />
        </div>
    )
}

export default Messages
