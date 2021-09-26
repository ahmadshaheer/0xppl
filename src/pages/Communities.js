import HtmlTitle from 'src/components/HtmlTitle';
import { metaTags } from 'src/helpers/seo';
import React, { Component } from 'react'
import { FeedPostsWrapper } from 'src/components/FeedPost';
import { Filters } from 'src/components/MenuBar';

class Communities extends Component {

    render() {
        return (
            <>
                <HtmlTitle {...metaTags('communities')} />
                <Filters></Filters>

                <FeedPostsWrapper />

            </>
        )
    }
}

export default Communities
