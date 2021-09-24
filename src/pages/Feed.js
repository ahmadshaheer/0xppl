import SeoMeta from 'src/components/SeoMeta';
import { metaTags } from 'src/helpers/seo';
import React, { Component } from 'react'
import {ErrorBoundary} from 'react-error-boundary'
import ErrorFallback from 'src/components/Errors/ErrorFallback';
import { FeedPostsWrapper } from 'src/components/FeedPost';

class Feed extends Component {

    render() {
        const meta = metaTags('feeds');
        return (
            <>

                <ErrorBoundary FallbackComponent={ErrorFallback} >
                    <SeoMeta
                        title={meta.title}
                        meta={meta.meta}
                    />
                    
                </ErrorBoundary>
                <FeedPostsWrapper />

            </>
        )
    }
}

export default Feed
