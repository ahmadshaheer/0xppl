import SeoMeta from 'src/components/SeoMeta';
import { metaTags } from 'src/helpers/seo';
import React, { Component } from 'react'
import MainLayout from '../layouts/MainLayout'
import {ErrorBoundary} from 'react-error-boundary'
import ErrorFallback from 'src/components/Errors/ErrorFallback';

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
                <MainLayout>
                </MainLayout>
            </>
        )
    }
}

export default Feed
