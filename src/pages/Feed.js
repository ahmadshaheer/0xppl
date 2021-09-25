import SeoMeta from 'src/components/SeoMeta';
import { metaTags } from 'src/helpers/seo';
import React, { Component } from 'react'
import {ErrorBoundary} from 'react-error-boundary'
import ErrorFallback from 'src/components/Errors/ErrorFallback';
import { FeedPostsWrapper } from 'src/components/FeedPost';
import { Filters } from 'src/components/MenuBar';

class Feed extends Component {

    render() {
        const meta = metaTags('feed');
        return (
            <>

                <ErrorBoundary FallbackComponent={ErrorFallback} >
                    <SeoMeta
                        title={meta.title}
                        meta={meta.meta}
                    />
                    
                </ErrorBoundary>
                <Filters></Filters>

                <FeedPostsWrapper />

            </>
        )
    }
}

export default Feed
